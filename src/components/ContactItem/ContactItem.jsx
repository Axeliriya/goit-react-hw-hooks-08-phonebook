import styles from './ContactItem.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getVisibleContacts } from '../../redux/contacts';

export default function ContactItem() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      {contacts.map(({ name, number, id }) => (
        <li className={styles.item} key={id}>
          <span>{name}:</span>
          <span>
            <a href={`tel: ${number.replace(/[^+\d]/g, '')}`}>{number}</a>
          </span>
          <button className={styles.button} onClick={() => onDeleteContact(id)}>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
              width="22px"
              height="22px"
            >
              <path d="M3.389 7.113l1.101 10.908c0.061 0.461 2.287 1.977 5.51 1.979 3.225-0.002 5.451-1.518 5.511-1.979l1.102-10.908c-1.684 0.942-4.201 1.387-6.613 1.387-2.41 0-4.928-0.445-6.611-1.387zM13.168 1.51l-0.859-0.951c-0.332-0.473-0.692-0.559-1.393-0.559h-1.831c-0.7 0-1.061 0.086-1.392 0.559l-0.859 0.951c-2.57 0.449-4.434 1.64-4.434 2.519v0.17c0 1.547 3.403 2.801 7.6 2.801 4.198 0 7.601-1.254 7.601-2.801v-0.17c0-0.879-1.863-2.070-4.433-2.519zM12.070 4.34l-1.070-1.34h-2l-1.068 1.34h-1.7c0 0 1.862-2.221 2.111-2.522 0.19-0.23 0.384-0.318 0.636-0.318h2.043c0.253 0 0.447 0.088 0.637 0.318 0.248 0.301 2.111 2.522 2.111 2.522h-1.7z"></path>
            </svg>
          </button>
        </li>
      ))}
    </>
  );
}

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }),
// };
