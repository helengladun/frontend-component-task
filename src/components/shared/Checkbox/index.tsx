// libs
import React, {FC, useEffect, useState} from 'react';
import classNames from 'classnames';
// styles
import styles from './styles.css';

interface Props {
  checked?: boolean;
  onCheck: Function;
  text: string;
}

const Checkbox: FC<Props> = ({checked, onCheck, text}: Props) => {
  const [isChecked, setChecked] = useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const onClickHandler = () => {
    setChecked((prevChecked) => {
      onCheck(!prevChecked);

      return !prevChecked;
    });
  };

  return (
    <div className={styles.checkbox} onClick={onClickHandler}>
      <div className={classNames(styles.box, {[styles.checked]: isChecked})}>
        <img className={styles.image} src="/materials/uncheck.svg" alt="Checkbox" />
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

Checkbox.defaultProps = {
  checked: false
};

export default React.memo(Checkbox);
