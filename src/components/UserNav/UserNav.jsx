import styles from '../Navigation/Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Container from '../Container';
import { routes } from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import avatar from '../../img/avatar.jpg';
import { logOut } from '../../redux/auth/auth-operation';

export default function Navigation() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <nav className={styles.Navigation}>
      <Container>
        <ul className={styles.NavList}>
          {routes.map(
            ({ path, label, userNav }) =>
              userNav && (
                <li className={styles.NavItem} key={label}>
                  <NavLink
                    className={styles.NavLink}
                    activeClassName={styles.NavLink_active}
                    exact
                    to={`${path}`}
                  >
                    {label}
                  </NavLink>
                </li>
              ),
          )}
          <li>
            <div className={styles.User_wrapper}>
              <img
                className={styles.Avatar}
                src={avatar}
                alt="Avatar"
                width={40}
              />
              <span className={styles.User_span}> Hello, {userName} </span>
              <button
                className={styles.Button_logout}
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
