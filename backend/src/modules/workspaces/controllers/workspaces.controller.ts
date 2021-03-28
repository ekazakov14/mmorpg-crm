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
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { EntityCreate } from '../../../commons/decorators/base-controller-methods/EntityCreate';
import { EntityDelete } from '../../../commons/decorators/base-controller-methods/EntityDelete';
import { EntityGet } from '../../../commons/decorators/base-controller-methods/EntityGet';
import { EntityIndex } from '../../../commons/decorators/base-controller-methods/EntityIndex';
import { EntityUpdate } from '../../../commons/decorators/base-controller-methods/EntityUpdate';
import { ValidationPipe } from '../../../commons/pipes/ValidationPipe';
import { User } from '../../../modules/users/entities/user.entity';
import { UserRoles } from '../../../modules/users/entities/user.interface';
import { Workspace } from '../entities/workspace.entity';
import { WorkspacesService } from '../workspaces.service';
import { CreateDto, UpdateDto } from './dto';

@ApiTags('workspaces')
@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  @EntityIndex(Workspace, UserRoles.ADMIN)
  public async index() {
    return this.workspacesService.findAll();
  }

  @Get(':id')
  @EntityGet(Workspace)
  public get(@Param('id') id: number) {
    return this.workspacesService.find(id);
  }

  @Post()
  @EntityCreate(Workspace, UserRoles.ADMIN)
  public create(@Body(new ValidationPipe()) data: CreateDto) {
    const workspace = plainToClass(Workspace, data);
    return this.workspacesService.create(workspace);
  }

  @Patch(':id')
  @EntityUpdate(Workspace, UserRoles.ADMIN)
  public update(
    @Param('id') id: number,
    @Body(new ValidationPipe()) updates: UpdateDto,
  ) {
    const workspace = plainToClass(Workspace, updates);
    return this.workspacesService.update(id, workspace);
  }

  @Delete(':id')
  @EntityDelete(Workspace, UserRoles.ADMIN)
  public delete(@Param('id') id: number) {
    return this.workspacesService.delete(id);
  }

  @Get(':id/users')
  @ApiOperation({ summary: 'get users of one workspace' })
  @ApiOkResponse({ type: [User] })
  @ApiNotFoundResponse({ description: 'workspace not found' })
  @ApiBearerAuth()
  public users(@Param('id') id: number): Promise<User[]> {
    return this.workspacesService.users(id);
  }
}
