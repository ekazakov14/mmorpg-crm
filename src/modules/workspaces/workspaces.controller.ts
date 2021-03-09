import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Workspace } from './entities/workspace.entity';
import { WorkspacesService } from './workspaces.service';

@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  public async index() {
    return this.workspacesService.findAll();
  }

  @Get(':id(\\d+)')
  public get(@Param('id') id: number) {
    return this.workspacesService.find(id);
  }

  @Post()
  public create(@Body() workspace: Workspace) {
    return this.workspacesService.create(workspace);
  }

  @Get(':id(\\d+)/users')
  public users(@Param('id') id: number) {
    return this.workspacesService.users(id);
  }

  @Patch(':id(\\d+)')
  public update(@Param('id') id: number, @Body() updates: Partial<Workspace>) {
    return this.workspacesService.update(id, updates);
  }

  @Delete(':id(\\d+)')
  public delete(@Param('id') id: number) {
    return this.workspacesService.delete(id);
  }
}
