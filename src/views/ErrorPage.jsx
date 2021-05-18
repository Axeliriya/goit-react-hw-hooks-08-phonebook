import { NavLink } from 'react-router-dom';
import { routes } from '../routes';
export default function ErrorPage() {
  const home = routes.find(route => route.label === 'Home');
  return (
    <div className="HomePage">
      <div className="HomePage_wrapper">
        <h1>Error 404: Not found</h1>
        <div className="container signin">
          <p>
            You can go back to the Home Page.{' '}
            <NavLink to={`${home.path}`}>{home.label}</NavLink>.
          </p>
        </div>
      </div>
    </div>
  );
}
