import styles from './ContactForm.module.css';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const [name, setName] = useState('');

  const handleInputChangeName = event => {
    setName(event.currentTarget.value);
  };

  const [number, setNumber] = useState('');

  function handleInputChangeNumber(event) {
    setNumber(event);
  }

  const onSubmit = contact => {
    dispatch(contactsOperations.addContact(contact));
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
        <span className={styles.subtitle}>Name</span>
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
        <span className={styles.subtitle}>Phone</span>
        <PhoneInput
          country="ru"
          preferredCountries={['ru', 'ua']}
          value={number}
          onEnterKeyPress={handleSubmit}
          // containerStyle={{ width: '100%', height: '52px' }}
          containerClass={styles.container}
          inputClass={styles.input}
          buttonClass={styles.button}
          // inputStyle={{
          //   width: '100%',
          //   minHeight: '52px',
          //   padding: '15px 15px 15px 45px',
          //   display: 'inline-block',
          //   border: 'none',
          //   borderRadius: '4px',
          //   background: 'rgba(151, 151, 151, 0.1)',
          //   fontSize: '16px',
          //   lineHeight: '1.4',
          //   color: '#95a1bb',
          // }}
          // buttonStyle={{
          //   background: 'rgba(151, 151, 151, 0.1)',
          //   border: 'none',
          //   '&:hover': {
          //     background: 'rgba(151, 151, 151, 0.1)',
          //   },
          // }}
          onChange={event => handleInputChangeNumber(event)}
        />
      </label>

      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
