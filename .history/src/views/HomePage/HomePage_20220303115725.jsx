import styles from './HomePage.module.css';
import phonebook from '../../assets/img/phonebook.png';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <h1>Hey! This is your personal phone book</h1>
      <span></span>
    </div>
  );
}
