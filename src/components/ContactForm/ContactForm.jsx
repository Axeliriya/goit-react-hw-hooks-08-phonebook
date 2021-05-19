import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operation';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  form: {
    width: 270,
    padding: 15,
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 30,
    border: '1px solid black',
  },

  lable: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    fontSize: 16,
  },

  input: {
    width: 240,
    height: 35,
    padding: '4px 10px',
    marginTop: 5,
    background: '#ffffff',
    border: '1px solid #cacaca',
    fontSize: 14,
    letterSpacing: '0.01rem',
    borderRadius: 5,
    outline: 'none',
  },

  btn: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '16px 20px',
    margin: '8px 0',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    fontSize: 16,
    fontWeight: 400,
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
    },
  },
});

export default function ContactForm() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);

  const [name, setName] = useState('');

  const handleInputChangeName = event => {
    setName(event.currentTarget.value);
  };

  const [number, setNumber] = useState('');

  function handleInputChangeNumber(event) {
    setNumber(event);
  }

  const onSubmit = contact => {
    console.log(contact);
    dispatch(addContact(contact));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number: replaceNum,
    };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : onSubmit(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const replaceNum =
    number.length === 11
      ? number.replace(
          /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
          '+$1 ($2) $3-$4-$5',
        )
      : number.replace(
          /^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
          '+$1 ($2) $3-$4-$5',
        );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.lable}>
        <span>Name</span>
        <input
          className={styles.input}
          type="text"
          value={name}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleInputChangeName}
          required
        />
      </label>

      <label className={styles.lable}>
        <span>Phone</span>
        <PhoneInput
          country="ru"
          preferredCountries={['ru', 'ua']}
          value={number}
          onEnterKeyPress={handleSubmit}
          containerStyle={{ width: 240 }}
          inputStyle={{ width: 240 }}
          onChange={event => handleInputChangeNumber(event)}
        />
      </label>

      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
