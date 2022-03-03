import styles from './HomePage.module.css';
import phonebook from '../../assets/img/phonebook.png';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src={phonebook}
          alt="phonebook"
          width={200}
        />
        <h1>Your Phonebook</h1>
      </div>
    </div>
  );
}
