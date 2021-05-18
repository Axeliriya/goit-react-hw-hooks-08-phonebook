import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';
import { register } from '../redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

export default function SignUpPage() {
  const dispatch = useDispatch();

  const onRegister = credentials => dispatch(register(credentials));

  const [name, setName] = useState('');

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

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
      name,
      email,
      password,
    };

    onRegister(credentials);
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const signIn = routes.find(route => route.label === 'SignIn');

  return (
    <form className="HomePage" onSubmit={handleSubmit} autoComplete="off">
      <div>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label>
          <b>Name</b>
          <input
            className="form_input"
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label>
          <b>Email</b>
          <input
            className="form_input"
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
            className="form_input"
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={handleChangePassword}
          />
        </label>

        <button type="submit" className="registerbtn">
          Register
        </button>

        <div className="container signin">
          <p>
            Already have an account?{' '}
            <NavLink to={`${signIn.path}`}>{signIn.label}</NavLink>.
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
