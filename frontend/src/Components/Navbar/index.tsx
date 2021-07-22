import { Link } from 'react-router-dom';
import BtnExit from '../BtnExit';
import './styles.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/movies"><h1>MovieFlix</h1></Link>
      <BtnExit />
    </div>
  );
};

export default Navbar;
