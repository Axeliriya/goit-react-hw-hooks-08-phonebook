// import styles from './Filter.module.css';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { changeFilter } from '../../redux/contacts';
import { getFilter } from '../../redux/contacts/contacts-selectors';

import { useDispatch, useSelector } from 'react-redux';

const useStyles = createUseStyles({
  lable: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    fontSize: 18,
  },

  input: {
    width: '100%',
    padding: '4px 10px',
    marginTop: 5,
    background: '#ffffff',
    border: '1px solid #cacaca',
    borderRadius: 5,
    height: 30,
    fontSize: 12,
    letterSpacing: '0.01rem',
    outline: 'none',
  },
});

export default function Filter() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={styles.lable}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="name"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={onChange}
        autoComplete="off"
        required
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};
