import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { contactsSlice, contactsSelectors } from '../../redux/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  useEffect(() => {
    console.log(filter);
  }, []);

  const onChange = e => {
    console.log(e.target.value);
    console.log(e.target);
    dispatch(filter.contactsSlice.changeFilter(e.target.value));
  };

  return (
    <label className={styles.lable}>
      <span className={styles.descr}>Find contacts by name</span>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Search by name..."
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={e => onChange(e)}
        autoComplete="off"
        required
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};
