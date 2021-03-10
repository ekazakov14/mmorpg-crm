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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { ValidationPipe } from 'src/commons/pipes/ValidationPipe';
import { hasRole } from 'src/modules/auth/decorators/hasRole.decorator';
import { User } from '../entities/user.entity';
import { UserRoles } from '../entities/user.interface';
import { HideConfidentialCredentialsInterceptor } from '../interceptors/HideConfidentialCredentials';
import { UsersService } from '../users.service';
import { CreateDto, UpdateDto } from './dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(HideConfidentialCredentialsInterceptor)
  @Get()
  @hasRole(UserRoles.ADMIN)
  @ApiOperation({ summary: 'get all users' })
  public index(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id(\\d+)')
  @ApiOperation({ summary: 'get one user' })
  @ApiBearerAuth()
  public get(@Param('id') id: User['id']) {
    return this.usersService.find(id);
  }

  @UseInterceptors(HideConfidentialCredentialsInterceptor)
  @Post()
  @hasRole(UserRoles.ADMIN)
  @ApiOperation({ summary: 'create one user' })
  public create(@Body(new ValidationPipe()) data: CreateDto): Promise<User> {
    const user = plainToClass(User, data);
    return this.usersService.create(user);
  }

  @UseInterceptors(HideConfidentialCredentialsInterceptor)
  @Patch(':id(\\d+)')
  @hasRole(UserRoles.ADMIN)
  @ApiOperation({ summary: 'update one user' })
  public update(
    @Param('id') id: User['id'],
    @Body(new ValidationPipe()) updates: UpdateDto,
  ) {
    return this.usersService.update(id, updates);
  }

  @Delete(':id(\\d+)')
  @hasRole(UserRoles.ADMIN)
  @ApiOperation({ summary: 'delete one user' })
  public delete(@Param('id') id: User['id']): void {
    this.usersService.delete(id);
  }
}