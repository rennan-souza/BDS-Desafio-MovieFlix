import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from '../../util/requests';
import BtnExit from '../BtnExit';
import './styles.css';

const Navbar = () => {
  return (
    <div className={`navbar-container ${isAuthenticated() ? 'navbar-container-logged' : '' }`}>
      <Link to="/movies"><h1>MovieFlix</h1></Link>
      <span className="user-name">{getTokenData()?.user_name}</span>
      <BtnExit />
    </div>
  );
};

export default Navbar;
