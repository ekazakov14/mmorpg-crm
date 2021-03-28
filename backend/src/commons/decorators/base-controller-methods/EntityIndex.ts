import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { hasRole } from '../../../modules/auth/decorators/hasRole.decorator';
import { UserRoles } from '../../../modules/users/entities/user.interface';

export const EntityIndex = (
  entity: new (...params: any[]) => any,
  role?: UserRoles,
) => {
  const decorators = [
    ApiOperation({ summary: `get all ${entity.name}` }),
    ApiOkResponse({ type: [entity] }),
  ];

  if (role) {
    decorators.push(hasRole(role));
  }

  return applyDecorators(...decorators);
};
