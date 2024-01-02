import NavBar from './NavBar';
import '../styles/Header.css';

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-text">
        <p>Galekwan</p>
        <p>Sango</p>
      </div>
      <NavBar />
    </div>
  );
}
