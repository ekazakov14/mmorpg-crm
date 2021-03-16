import { applyDecorators } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { hasRole } from 'src/modules/auth/decorators/hasRole.decorator';
import { UserRoles } from 'src/modules/users/entities/user.interface';

export const EntityGet = (
  entity: new (...params: any[]) => any,
  role?: UserRoles,
) => {
  const decorators = [
    ApiOperation({ summary: `get one ${entity.name}` }),
    ApiOkResponse({ type: entity }),
    ApiNotFoundResponse({ description: 'workspace not found' }),
  ];

  if (role) {
    decorators.push(hasRole(role));
  }

  return applyDecorators(...decorators);
};
