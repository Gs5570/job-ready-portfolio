import NavBar from './NavBar';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'normal' : 'normal',
      boxShadow: isActive ? 'rgb(255, 131, 71) 0px 5px 15px' : 'none',
      textDecoration: isActive ? 'none' : 'none',
      // padding: isActive ? '10px' : '0',
      borderRadius: isActive ? '20px' : '0',
      color: isActive ? 'inherit' : 'black',
    };
  };
  return (
    <div className="header-container">
      <NavLink to="/" style={navLinkStyle}>
        <span>
          <div className="logo-text">
            <p>Galekwan</p>
            <p>Sango</p>
          </div>
        </span>
      </NavLink>

      <NavBar />
    </div>
  );
}
