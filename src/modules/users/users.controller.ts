import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { HideConfidentialCredentialsInterceptor } from './interceptors/HideConfidentialCredentials';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(HideConfidentialCredentialsInterceptor)
  @Get()
  public index(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id(\\d+)')
  public get(@Param('id') id: User['id']) {
    return this.usersService.find(id);
  }

  @UseInterceptors(HideConfidentialCredentialsInterceptor)
  @Post()
  public create(@Body() { username, email, password }: User): Promise<User> {
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;
    return this.usersService.create(user);
  }

  @UseInterceptors(HideConfidentialCredentialsInterceptor)
  @Patch(':id(\\d+)')
  public update(@Param('id') id: User['id'], @Body() updates: Partial<User>) {
    return this.usersService.update(id, updates);
  }

  @Delete(':id(\\d+)')
  public delete(@Param('id') id: User['id']): void {
    this.usersService.delete(id);
  }
}
