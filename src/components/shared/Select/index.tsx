// libs
import React, {FC, useState} from 'react';
import classNames from 'classnames';
// styles
import styles from './styles.css';

interface Select {
  type: string;
  value: string;
}

interface Props {
  className: string;
  onSelect: Function;
  values: Select[];
}

const Select: FC<Props> = ({className, values, onSelect}: Props) => {
  const [selectedOption, setSelectedOption] = useState(values[0]);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const onTriggerClickHandler = (): void => {
    setIsSelectOpen((prevIsSelectOpen) => !prevIsSelectOpen);
  };

  const onOptionClickHandler = (item: Select) => (): void => {
    setSelectedOption(item);
    setIsSelectOpen(false);
    onSelect(item.type);
  };

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={classNames(styles.select, {[styles.open]: isSelectOpen})}>
        <div className={styles.trigger} onClick={onTriggerClickHandler}>
          <span>{selectedOption.value}</span>
          <div className={styles.arrow} />
        </div>
        <div className={styles.options}>
          {values.map((item) => (
            <span
              key={item.type}
              className={classNames(styles.option, {
                [styles.selected]: item.type === selectedOption.type
              })}
              onClick={onOptionClickHandler(item)}
              data-value={item.type}
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
