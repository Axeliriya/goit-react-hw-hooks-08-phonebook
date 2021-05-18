// import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import shortid from 'shortid';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Title from '../components/Title';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/contacts';
import { useDispatch } from 'react-redux';

export default function PhonebookPage() {
  const dispatch = useDispatch();
  const getFetchContacts = () => dispatch(fetchContacts());

  useEffect(() => {
    getFetchContacts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="HomePage">
      <Title text="Phonebook">
        <ContactForm />
      </Title>

      <Title text="Contacts">
        <Filter />
        <ContactList />
      </Title>
    </div>
  );
}

// PhonebookPage.propTypes = {
//   title: PropTypes.string,
//   poster_path: PropTypes.string,
//   overview: PropTypes.string,
//   genres: PropTypes.arrayOf(PropTypes.object),
//   loading: PropTypes.bool,
//   vote_average: PropTypes.number,
// };
