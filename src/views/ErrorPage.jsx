import { NavLink } from 'react-router-dom';
import { routes } from '../routes';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  signin: {
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    '& p': {
      margin: 0,
      padding: 15,
    },
  },

  error: {
    display: 'block',
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
    '& h1': {
      margin: '15px 0',
      textAlign: 'center',
    },
  },
});

export default function ErrorPage() {
  const styles = useStyles();
  const home = routes.find(route => route.label === 'Home');
  return (
    <div className={styles.error}>
      <div className={styles.wrapper}>
        <h1>Error 404: Not found</h1>
        <div className={styles.signin}>
          <p>
            You can go back to the Home Page.{' '}
            <NavLink to={`${home.path}`}>{home.label}</NavLink>.
          </p>
        </div>
      </div>
    </div>
  );
}
