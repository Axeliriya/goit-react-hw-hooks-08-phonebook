import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'block',
    width: 330,
    margin: '0 auto',
    padding: '0 15px',
  },

  '@media screen and (min-width: 670px)': {
    container: {
      display: 'flex',
      width: 630,
    },
  },
});

export default function Container({ children }) {
  const styles = useStyles();
  return <div className={styles.container}>{children}</div>;
}
