import { applyDecorators } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { hasRole } from '../../../modules/auth/decorators/hasRole.decorator';
import { UserRoles } from '../../../modules/users/entities/user.interface';

export const EntityDelete = (
  entity: new (...params: any[]) => any,
  role?: UserRoles,
) => {
  const decorators = [
    ApiOperation({ summary: `delete one ${entity.name}` }),
    ApiOkResponse(),
    ApiNotFoundResponse({ description: 'workspace not found' }),
  ];

  if (role) {
    decorators.push(hasRole(role));
  }

  return applyDecorators(...decorators);
};
