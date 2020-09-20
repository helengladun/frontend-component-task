import React, {FC} from 'react';
// components
import UserForm from '../UserForm';
// styles
import '../../assets/styles/base/_global.css';
import styles from './styles.css';

const App: FC = () => (
  <div className={styles.container}>
    <UserForm />
  </div>
);

export default App;
