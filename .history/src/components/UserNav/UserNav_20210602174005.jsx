import styles from './UserNav.module.css';
import { NavLink } from 'react-router-dom';
import Container from '../Container';
import { routes } from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../assets/img/avatar.jpg';
import { authOperations, authSelectors } from '../../redux/auth';

export default function Navigation() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  const onLogOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <nav className={styles.navigation}>
      <Container>
        <ul className={styles.list}>
          {routes.map(
            ({ path, label, userNav }) =>
              userNav && (
                <li className={styles.item} key={label}>
                  <NavLink
                    className={styles.link}
                    activeClassName={styles.link_active}
                    exact
                    to={`${path}`}
                  >
                    {label}
                  </NavLink>
                </li>
              ),
          )}
          <li>
            <div className={styles.wrapper}>
              <img
                className={styles.avatar}
                src={avatar}
                alt="Avatar"
                width={40}
              />
              <span className={styles.greeting}> Hello, {userName} </span>
              <button
                className={styles.logout}
                type="button"
                onClick={onLogOut}
              >
                LogOut
              </button>
            </div>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
