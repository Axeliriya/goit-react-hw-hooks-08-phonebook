import ContactItem from '../ContactItem/ContactItem';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
});

export default function ContactList() {
  const styles = useStyles();
  return (
    <ul className={styles.list}>
      <ContactItem />
    </ul>
  );
}
