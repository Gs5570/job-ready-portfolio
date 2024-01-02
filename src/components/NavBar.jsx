import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bolder' : 'normal',
      boxShadow: isActive ? 'rgb(255, 131, 71) 0px 5px 15px' : 'none',
      textDecoration: isActive ? 'none' : 'none',
      padding: isActive ? '10px' : '0',
      borderRadius: isActive ? '20px' : '0',
      color: isActive ? 'inherit' : 'black',
    };
  };
  return (
    <>
      <nav className="navbar">
        <ul className="nav-items-container">
          <li>
            <NavLink to="/about" style={navLinkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={navLinkStyle}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={navLinkStyle}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
