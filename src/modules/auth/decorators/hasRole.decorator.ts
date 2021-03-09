import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { UserRoles } from 'src/modules/users/entities/user.interface';
import { JwtAuthGuard } from '../guards/JwtAuthGuard';
import { RolesGuard } from '../guards/RolesGuard';

export const hasRole = (...roles: UserRoles[]) =>
  applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(JwtAuthGuard, RolesGuard),
  );
