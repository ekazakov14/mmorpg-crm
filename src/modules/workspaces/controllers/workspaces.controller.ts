import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { ValidationPipe } from 'src/commons/pipes/ValidationPipe';
import { hasRole } from 'src/modules/auth/decorators/hasRole.decorator';
import { UserRoles } from 'src/modules/users/entities/user.interface';
import { Workspace } from '../entities/workspace.entity';
import { WorkspacesService } from '../workspaces.service';
import { CreateDto, UpdateDto } from './dto';

@ApiTags('workspaces')
@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  @hasRole(UserRoles.ADMIN)
  @ApiOperation({ summary: 'get all workspaces' })
  public async index() {
    return this.workspacesService.findAll();
  }

  @Get(':id(\\d+)')
  @ApiOperation({ summary: 'get one workspace' })
  @ApiBearerAuth()
  public get(@Param('id') id: number) {
    return this.workspacesService.find(id);
  }

  @Post()
  @hasRole(UserRoles.ADMIN)
  @ApiOperation({ summary: 'create one workspace' })
  public create(@Body(new ValidationPipe()) data: CreateDto) {
    const workspace = plainToClass(Workspace, data);
    return this.workspacesService.create(workspace);
  }

  @Get(':id(\\d+)/users')
  @ApiOperation({ summary: 'get users of one workspace' })
  @ApiBearerAuth()
  public users(@Param('id') id: number) {
    return this.workspacesService.users(id);
  }

  @Patch(':id(\\d+)')
  @hasRole(UserRoles.ADMIN)
  @ApiOperation({ summary: 'update one workspace' })
  public update(
    @Param('id') id: number,
    @Body(new ValidationPipe()) updates: UpdateDto,
  ) {
    return this.workspacesService.update(id, updates);
  }

  @Delete(':id(\\d+)')
  @hasRole(UserRoles.ADMIN)
  @ApiOperation({ summary: 'delete one workspace' })
  public delete(@Param('id') id: number) {
    return this.workspacesService.delete(id);
  }
}
