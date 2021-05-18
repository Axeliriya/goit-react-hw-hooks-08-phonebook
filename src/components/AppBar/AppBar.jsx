import UserNav from '../UserNav';
import AuthNav from '../AuthNav';
import { useSelector } from 'react-redux';
import { getLoggedOn } from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedOn = useSelector(getLoggedOn);

  return <header>{isLoggedOn ? <UserNav /> : <AuthNav />}</header>;
}
