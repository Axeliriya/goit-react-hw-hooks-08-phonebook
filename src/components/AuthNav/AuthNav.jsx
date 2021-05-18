import styles from '../Navigation/Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Container from '../Container';
import { routes } from '../../routes';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <Container>
        <ul className={styles.NavList}>
          {routes.map(
            ({ path, label, authNav }) =>
              authNav && (
                <li className={styles.NavItem} key={label}>
                  <NavLink
                    className={
                      label === 'SignIn' ? styles.NavLinkLogin : styles.NavLink
                    }
                    activeClassName={
                      label === 'SignIn'
                        ? styles.NavLinkLoginActive
                        : styles.NavLink_active
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
