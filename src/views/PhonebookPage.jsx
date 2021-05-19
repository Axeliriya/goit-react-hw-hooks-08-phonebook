// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Title from '../components/Title';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/contacts/contacts-operation';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  phonebook: {
    display: 'block',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 12,
    paddingBottom: 12,
    width: '100%',
    color: 'rgb(56, 56, 56)',
    backgroundColor: '#f7f7f7',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(97, 7, 7, 0.12)',
  },

  spinner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '@media screen and (min-width: 670px)': {
    phonebook: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
});

export default function PhonebookPage() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const getFetchContacts = () => dispatch(fetchContacts());

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

// PhonebookPage.propTypes = {
//   title: PropTypes.string,
//   poster_path: PropTypes.string,
//   overview: PropTypes.string,
//   genres: PropTypes.arrayOf(PropTypes.object),
//   loading: PropTypes.bool,
//   vote_average: PropTypes.number,
// };
