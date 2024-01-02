import NavBar from './NavBar';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <NavLink to="/">
      <div className="header-container">
        <div className="logo-text">
          <p>Galekwan</p>
          <p>Sango</p>
        </div>
        <NavBar />
      </div>
    </NavLink>
  );
}
