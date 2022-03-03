import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

import { routes } from '../../routes';

export default function HomePage() {
  const signUp = routes.find(route => route.label === 'SignUp');
  const signIn = routes.find(route => route.label === 'SignIn');
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Hey! This is your personal phone book</h1>
      <span className={styles.span}>
        Register, record and save your contacts!
      </span>
      <div className={styles.links}>
        <NavLink className={styles.login} to={`${signIn.path}`}>
          {signIn.label}
        </NavLink>
        <NavLink className={styles.register} to={`${signUp.path}`}>
          {signUp.label}
        </NavLink>
      </div>
    </div>
  );
}
