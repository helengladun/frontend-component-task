// libs
import React, {useState} from 'react';
// components
import Select from '../shared/Select';
import PermissionsBox from '../PermissionsBox';
// values
import {RolesData} from '../../values/roles';
// styles
import styles from '../App/styles.css';

const roleSelectValues = Object.keys(RolesData).map((role) => ({
  type: role,
  value: RolesData[role].name
}));

const UserForm = () => {
  const [userRole, changeUserRole] = useState(roleSelectValues[0].type);
  const [foldersPermissions, changeFoldersPermissions] = useState([]);
  const [gemsPermissions, changeGemsPermissions] = useState([]);

  const onSelectHandler = (type) => {
    changeUserRole(type);
  };

  const onSaveHandler = () => ({
    userRole,
    foldersPermissions,
    gemsPermissions
  });

  return (
    <div>
      <Select onSelect={onSelectHandler} values={roleSelectValues} />
      <PermissionsBox
        title="Folders"
        userRole={userRole}
        changePermissions={changeFoldersPermissions}
      />
      <PermissionsBox title="Gems" userRole={userRole} changePermissions={changeGemsPermissions} />
      <button onClick={onSaveHandler}>Save</button>
    </div>
  );
};

export default UserForm;
