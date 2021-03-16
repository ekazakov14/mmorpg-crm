import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { hasRole } from 'src/modules/auth/decorators/hasRole.decorator';
import { UserRoles } from 'src/modules/users/entities/user.interface';

export const EntityCreate = (
  entity: new (...params: any[]) => any,
  role?: UserRoles,
) => {
  const decorators = [
    ApiOperation({ summary: `create one ${entity.name}` }),
    ApiCreatedResponse({ type: entity }),
    ApiBadRequestResponse(),
  ];

  if (role) {
    decorators.push(hasRole(role));
  }

  return applyDecorators(...decorators);
};
