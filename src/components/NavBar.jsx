import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-items-container">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
