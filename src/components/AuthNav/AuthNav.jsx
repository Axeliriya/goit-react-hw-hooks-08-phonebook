import { NavLink } from 'react-router-dom';
import Container from '../Container';
import { routes } from '../../routes';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navigation: {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: '1100',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 64,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    color: 'rgb(56, 56, 56)',
    backgroundColor: '#e7e7e7',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },

  list: {
    listStyle: 'none',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 15px',
  },

  link: {
    display: 'block',
    fontSize: 18,
    fontWeight: 'bold',
    padding: '15px 0',
    textDecoration: 'none',
    color: 'rgb(56, 56, 56)',
    '&:hover': {
      color: 'rgb(170, 70, 70)',
    },
  },

  link_active: {
    color: 'rgb(170, 70, 70)',
  },

  avatar: {
    display: 'inline-block',
    borderRadius: '50%',
  },

  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  greeting: {
    margin: '0 5px',
    fontSize: '16px',
    fontWeight: '600',
  },

  login_link: {
    display: 'block',
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 20px',
    margin: 0,
    fontSize: '13px',
    fontWeight: '400',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
    },
  },
  '@media screen and (min-width: 670px)': {
    list: {
      display: 'flex',
      flexDirection: 'row',
    },

    item: {
      padding: '15px 0',
    },
  },
});

export default function AuthNav() {
  const styles = useStyles();
  return (
    <nav className={styles.navigation}>
      <Container>
        <ul className={styles.list}>
          {routes.map(
            ({ path, label, authNav }) =>
              authNav && (
                <li className={styles.item} key={label}>
                  <NavLink
                    className={
                      label === 'SignIn' ? styles.login_link : styles.link
                    }
                    activeClassName={
                      label === 'SignIn'
                        ? styles.login_link
                        : styles.link_active
                    }
                    exact
                    to={`${path}`}
                  >
                    {label}
                  </NavLink>
                </li>
              ),
          )}
        </ul>
      </Container>
    </nav>
  );
}
