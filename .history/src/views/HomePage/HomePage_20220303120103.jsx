import styles from './HomePage.module.css';
import { routes } from '../../routes';

export default function HomePage() {
  const signUp = routes.find(route => route.label === 'SignUp');
  return (
    <div className={styles.homepage}>
      <h1>Hey! This is your personal phone book</h1>
      <span>Register, record and save your contacts!</span>
      <NavLink className={styles.link} to={`${signUp.path}`}>
        {signUp.label}
      </NavLink>
    </div>
  );
}
