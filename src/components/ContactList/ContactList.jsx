import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

export default function ContactList() {
  return (
    <ul className={styles.list}>
      <ContactItem />
    </ul>
  );
}
