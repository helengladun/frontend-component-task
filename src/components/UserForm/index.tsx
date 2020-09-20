// libs
import React, {FC, useState} from 'react';
// components
import Select from '../shared/Select';
import PermissionsBox from '../PermissionsBox';
// values
import {RolesData} from '../../values/roles';
// styles
import styles from './styles.css';

const roleSelectValues = Object.keys(RolesData).map((role) => ({
  type: role,
  value: RolesData[role].name
}));

const UserForm: FC = () => {
  const [userRole, changeUserRole] = useState(roleSelectValues[0].type);
  const [foldersPermissions, changeFoldersPermissions] = useState([]);
  const [gemsPermissions, changeGemsPermissions] = useState([]);

  const onSelectHandler = (type): void => {
    changeUserRole(type);
  };

  const onSaveHandler = (): object => ({
    userRole,
    foldersPermissions,
    gemsPermissions
  });

  return (
    <>
      <div className={styles.inner}>
        <div className={styles['select-wrapper']}>
          <div className={styles['select-title']}>User Role</div>
          <Select className={styles.select} onSelect={onSelectHandler} values={roleSelectValues} />
        </div>
        <div className={styles.section}>
          <PermissionsBox
            title="Folders"
            userRole={userRole}
            changePermissions={changeFoldersPermissions}
          />
        </div>
        <div className={styles.section}>
          <PermissionsBox
            title="Gems"
            userRole={userRole}
            changePermissions={changeGemsPermissions}
          />
        </div>
      </div>
      <button className={styles.button} onClick={onSaveHandler}>
        Save
      </button>
    </>
  );
};

export default UserForm;
