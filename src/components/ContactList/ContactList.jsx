import styles from './ContactList.module.css';

import ContactItem from '../ContactItem/ContactItem';

export default function ContactList() {
  return (
    <ul className={styles.list}>
      <ContactItem />
    </ul>
  );
}
