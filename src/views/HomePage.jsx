// import { Component } from 'react';
// import MoviesList from '../components/Co';
// import apiService from '../services/api-service';
// import Loader from 'react-loader-spinner';
// import PropTypes from 'prop-types';
import phonebook from '../img/phonebook.svg.png';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  homepage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '@media screen and (min-width: 670px)': {
    homepage: {
      flexDirection: 'row',
    },
    wrapper: {
      flexDirection: 'row',
    },
  },
});

export default function HomePage() {
  const styles = useStyles();
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
