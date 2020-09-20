import {Permissions} from '../enums/permissions';
import {Roles} from '../enums/roles';

export const userPermissions = {
  [Roles.ADMIN]: [
    Permissions.CREATE,
    Permissions.UPDATE,
    Permissions.MOVE,
    Permissions.DELETE,
    Permissions.VIEW,
    Permissions.SHARE
  ],
  [Roles.USER]: [Permissions.CREATE, Permissions.UPDATE, Permissions.VIEW, Permissions.SHARE],
  [Roles.MEMBER]: [Permissions.VIEW, Permissions.SHARE],
  [Roles.CUSTOM]: []
};
