// libs
import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
// components
import Checkbox from '../shared/Checkbox';
// values
import {PermissionsData} from '../../values/permissions';
import {userPermissions} from '../../values/userPermissions';
// enums
import {Roles} from '../../enums/roles';
// styles
import styles from './styles.css';

interface Props {
  changePermissions: Function;
  title: string;
  userRole: string;
}

const permissionsItems = Object.keys(PermissionsData);

const getInitialPermissions = (userRole) =>
  permissionsItems.reduce(
    (acc, curr) => ({...acc, [curr]: userPermissions[userRole].includes(curr)}),
    {}
  );

const PermissionsBox = ({changePermissions, title, userRole}: Props) => {
  const [permissions, setPermissions] = useState(getInitialPermissions(userRole));
  const isCustomRole = userRole === Roles.CUSTOM;

  useEffect(() => {
    setPermissions(getInitialPermissions(userRole));
  }, [userRole]);

  const onCheckHandler = (permission) => (isSet) => {
    setPermissions((prev) => {
      const newPermissions = {...prev, [permission]: isSet};
      changePermissions(newPermissions);

      return newPermissions;
    });
  };

  return (
    <>
      <div className={styles.name}>{title}</div>
      <div className={classNames(styles.inner, {[styles.readonly]: !isCustomRole})}>
        {permissionsItems.map((key) => {
          const {id, name} = PermissionsData[key];

          return (
            <div key={id} className={styles['checkbox-wrapper']}>
              <Checkbox checked={permissions[key]} onCheck={onCheckHandler(key)} text={name} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PermissionsBox;
