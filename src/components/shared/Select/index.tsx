import React, {useState} from 'react';
import classNames from 'classnames';
import styles from './styles.css';

interface Select {
  type: string;
  value: string;
}

interface Props {
  onSelect: Function;
  values: Select[];
}

const Select = ({values, onSelect}: Props) => {
  const [selectedOption, setSelectedOption] = useState(values[0]);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const onTriggerClickHandler = () => {
    setIsSelectOpen((prevIsSelectOpen) => !prevIsSelectOpen);
  };

  const onOptionClickHandler = (item: Select) => (): void => {
    setSelectedOption(item);
    setIsSelectOpen(false);
    onSelect(item.type);
  };

  return (
    <div className={styles.wrapper}>
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
