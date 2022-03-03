import styles from './PhonebookPage.module.css';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Title from '../../components/Title';
import Filter from '../../components/Filter';
import { contactsOperations } from '../../redux/contacts';
import { useDispatch } from 'react-redux';

export default function PhonebookPage() {
  const dispatch = useDispatch();
  const getFetchContacts = () => dispatch(contactsOperations.fetchContacts());

  useEffect(() => {
    getFetchContacts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.phonebook}>
      <>
        <Title text="Phonebook">
          <ContactForm />
        </Title>

        <Title text="Contacts">
          <Filter />

          <ContactList />
        </Title>
      </>
    </div>
  );
}
