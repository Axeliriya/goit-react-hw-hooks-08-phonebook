// import styles from './Title.module.css';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  title: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    margin: '0 0 10px',
  },

  wrapper: {
    width: 270,
    display: 'block',
    paddingTop: 30,
    '&:last-child': {
      paddingTop: 0,
    },

    '&:not(:last-child)': {
      marginRight: 0,
    },
  },

  '@media screen and (min-width: 670px)': {
    wrapper: {
      paddingTop: 30,
      '&:last-child': {
        paddingTop: 30,
      },
      '&:not(:last-child)': {
        marginRight: 30,
      },
    },
  },
});

export default function Title({ text, children }) {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{text}</h2>
      {children}
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
