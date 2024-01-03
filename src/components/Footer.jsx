import { NavLink } from 'react-router-dom';

import '../styles/Footer.css';
export default function Footer() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bolder' : 'normal',
      boxShadow: isActive ? 'none' : 'none',
      textDecoration: isActive ? 'none' : 'none',
      padding: isActive ? '10px' : '0',
      borderRadius: isActive ? '20px' : '0',
      color: isActive ? 'inherit' : 'black',
    };
  };

  return (
    <div className="footer-container">
      <>
        <nav className="navbar2">
          <ul className="nav-items-container2">
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
    </div>
  );
}
