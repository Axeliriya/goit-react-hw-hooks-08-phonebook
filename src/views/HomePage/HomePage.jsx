import styles from './HomePage.module.css';
// import PropTypes from 'prop-types';
import phonebook from '../../assets/img/phonebook.svg.png';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src={phonebook}
          alt="phonebook"
          width={200}
        />
        <h1>Your Phonebook</h1>
      </div>
    </div>
  );
}

//    HomePage.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object),
//   loading: PropTypes.bool,
//   error: PropTypes.object,
// };
