import styles from './SignUpPage.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';

export default function SignUpPage() {
  const dispatch = useDispatch();

  const onRegister = credentials =>
    dispatch(authOperations.register(credentials));

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

  const [repeatPass, setRepeatPass] = useState('');

  const handleChangeRepeatPassword = event => {
    password
      .split('')
      .forEach(item =>
        item === event.currentTarget.value
          ? setRepeatPass(event.currentTarget.value)
          : event.currentTarget.style,
      );
  };

  const [showPass, setShowPass] = useState(false);

  const onClickChangeType = () => {
    setShowPass(!showPass);
  };

  const [showRepeatPass, setShowRepeatPass] = useState(false);

  const onClickChangeTypeRepeat = () => {
    setShowRepeatPass(!showRepeatPass);
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
    setRepeatPass('');
  };

  const signIn = routes.find(route => route.label === 'SignIn');

  return (
    <form
      className={styles.registration}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div>
        <h1 className={styles.title}>Register</h1>
        <p className={styles.descr}>
          Please fill in this form to create an account.
        </p>
        <label className={styles.label}>
          <b className={styles.subtitle}>Name</b>
          <input
            className={styles.form_input}
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label className={styles.label}>
          <b className={styles.subtitle}>Email</b>
          <input
            className={styles.form_input}
            type="text"
            placeholder="Enter Email"
            required
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label className={styles.label}>
          <b className={styles.subtitle}>Password</b>
          <div className={styles.pass}>
            <input
              className={styles.form_input}
              type={showPass ? 'password' : 'text'}
              placeholder="Enter Password"
              required
              value={password}
              onChange={handleChangePassword}
            />
            <div className={styles.showPass} onClick={onClickChangeType}>
              {showPass ? 'Show' : 'Hide'}
            </div>
          </div>
        </label>
        <label className={styles.label}>
          <b className={styles.subtitle}>Pepeat Password</b>
          <div className={styles.pass}>
            <input
              className={styles.form_input}
              type={showRepeatPass ? 'password' : 'text'}
              placeholder="Enter Password"
              required
              value={repeatPass}
              onChange={handleChangeRepeatPassword}
            />
            <div className={styles.showPass} onClick={onClickChangeTypeRepeat}>
              {showRepeatPass ? 'Show' : 'Hide'}
            </div>
          </div>
        </label>

        <button type="submit" className={styles.btn}>
          Register
        </button>

        <div>
          <p className={styles.elseLogin}>
            Already have an account?{' '}
            <NavLink className={styles.link} to={`${signIn.path}`}>
              {signIn.label}
            </NavLink>
            .
          </p>
        </div>
      </div>
    </form>
  );
}
