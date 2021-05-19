import { useState } from 'react';
import { logIn } from '../redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
import { routes } from '../routes';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  login: {
    display: 'block',
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

  form_input: {
    width: '100%',
    padding: 15,
    margin: '5px 0 22px 0',
    display: 'inline-block',
    border: 'none',
    background: '#f1f1f1',
    fontSize: 16,
    lineHeight: 1.4,
    '&:focus': {
      backgroundColor: '#ddd',
      outline: 'none',
    },
  },

  problem: {
    textAlign: 'center',
  },

  link: {
    textDecoration: 'none',
    color: 'dodgerblue',
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },

  hr: {
    border: '1px solid #f1f1f1',
    marginBottom: 25,
  },

  btn: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '16px 20px',
    margin: '8px 0',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    fontSize: 16,
    fontWeight: 400,
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
    },
  },
});

export default function SignInPage() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const onSignIn = credentials => dispatch(logIn(credentials));

  const [email, setEmail] = useState('');

  const handleChangeEmail = event => {
    setEmail(event.currentTarget.value);
  };

  const [password, setPassword] = useState('');

  const handleChangePassword = event => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };

    onSignIn(credentials);
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const signUp = routes.find(route => route.label === 'SignUp');

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <div>
        <h1>LogIn</h1>
        <p>Please fill in this form to login an account.</p>

        <hr className={styles.hr} />

        <label>
          <b>Email</b>
          <input
            className={styles.form_input}
            type="text"
            placeholder="Enter Email"
            required
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label>
          <b>Password</b>
          <input
            className={styles.form_input}
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={handleChangePassword}
          />
        </label>

        <button type="submit" className={styles.btn}>
          SignIn
        </button>

        <div className="container signin">
          <p className={styles.problem}>
            Don't have an account yet?{' '}
            <NavLink className={styles.link} to={`${signUp.path}`}>
              {signUp.label}
            </NavLink>
            .
          </p>
        </div>
      </div>
    </form>
  );
}

// MoviesPage.propTypes = {
//   search: PropTypes.string,
//   movies: PropTypes.arrayOf(PropTypes.object),
//   loading: PropTypes.bool,
//   error: PropTypes.object,
// };
