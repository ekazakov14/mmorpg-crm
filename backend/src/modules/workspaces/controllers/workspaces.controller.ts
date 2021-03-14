import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { ValidationPipe } from 'src/commons/pipes/ValidationPipe';
import { hasRole } from 'src/modules/auth/decorators/hasRole.decorator';
import { User } from 'src/modules/users/entities/user.entity';
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
  @ApiOkResponse({ type: [Workspace] })
  public async index(): Promise<Workspace[]> {
    return this.workspacesService.findAll();
  }

  @Get(':id(\\d+)')
  @ApiOperation({ summary: 'get one workspace' })
  @ApiOkResponse({ type: Workspace })
  @ApiNotFoundResponse()
  @ApiBearerAuth()
  public get(@Param('id') id: number): Promise<Workspace> {
    return this.workspacesService.find(id);
  }

  @Post()
  @hasRole(UserRoles.ADMIN)
  @ApiOperation({ summary: 'create one workspace' })
  @ApiCreatedResponse({ type: Workspace })
  public create(
    @Body(new ValidationPipe()) data: CreateDto,
  ): Promise<Workspace> {
    const workspace = plainToClass(Workspace, data);
    return this.workspacesService.create(workspace);
  }

  @Get(':id(\\d+)/users')
  @ApiOperation({ summary: 'get users of one workspace' })
  @ApiOkResponse({ type: [User] })
  @ApiBearerAuth()
  public users(@Param('id') id: number): Promise<User[]> {
    return this.workspacesService.users(id);
  }

  @Patch(':id(\\d+)')
  @hasRole(UserRoles.ADMIN)
  @ApiOperation({ summary: 'update one workspace' })
  public update(
    @Param('id') id: number,
    @Body(new ValidationPipe()) updates: UpdateDto,
  ) {
    const workspace = plainToClass(Workspace, updates);
    return this.workspacesService.update(id, workspace);
  }

  @Delete(':id(\\d+)')
  @hasRole(UserRoles.ADMIN)
  @ApiOperation({ summary: 'delete one workspace' })
  public delete(@Param('id') id: number): Promise<void> {
    return this.workspacesService.delete(id);
  }
}
