// import styles from './Navigation.module.css';
// import { NavLink } from 'react-router-dom';
// import Container from '../Container';
// import { routes, routesLogIn } from '../../routes';
// import { useSelector } from 'react-redux';
// import { getLoggedOn, getUserName } from '../../redux/auth/auth-selectors';

// export default function Navigation() {
//   const isLoggedOn = useSelector(getLoggedOn);
//   const userName = useSelector(getUserName);
//   // const home = routes.find(route => route.label === 'Home');
//   // const phonebook = routes.find(route => route.label === 'Phonebook');
//   // const signIn = routes.find(route => route.label === 'SignIn');
//   // const signUp = routes.find(route => route.label === 'SignUp');

//   return (
//     <nav className={styles.Navigation}>
//       <Container>
//         <ul className={styles.NavList}>
//           {routes.map(({ path, label }) => (
//             <li className={styles.NavItem}>
//               <NavLink
//                 className={styles.NavLink}
//                 activeClassName={styles.NavLink_active}
//                 exact
//                 to={`${path}`}
//               >
//                 {label}
//               </NavLink>
//             </li>
//           ))}

//           {/* <li className={styles.NavItem}>
//             <NavLink
//               className={styles.NavLink}
//               activeClassName={styles.NavLink_active}
//               exact
//               to={`${home.path}`}
//             >
//               Home
//             </NavLink>
//           </li>
//           {(!phonebook.logged || (phonebook.logged && isLoggedOn)) && (
//             <li className={styles.NavItem}>
//               <NavLink
//                 className={styles.NavLink}
//                 activeClassName={styles.NavLink_active}
//                 to={`${phonebook.path}`}
//               >
//                 Phonebook
//               </NavLink>
//             </li>
//           )}

//           {!isLoggedOn ? (
//             <li className={styles.NavItem}>
//               <NavLink
//                 className={styles.NavLink}
//                 activeClassName={styles.NavLink_active}
//                 to={`${signIn.path}`}
//               >
//                 SignIn
//               </NavLink>
//               <span className={styles.span}>or</span>
//               <NavLink
//                 className={styles.NavLink}
//                 activeClassName={styles.NavLink_active}
//                 to={`${signUp.path}`}
//               >
//                 SignUp
//               </NavLink>
//             </li>
//           ) : (
//             <li className={styles.NavItem}>
//               <span className={styles.span}>{userName}, Hallo!</span>
//               <NavLink
//                 className={styles.NavLink}
//                 activeClassName={styles.NavLink_active}
//                 to={`${home.path}`}
//               >
//                 LogOut
//               </NavLink>
//             </li>
//           )} */}
//         </ul>
//       </Container>
//     </nav>
//   );
// }
