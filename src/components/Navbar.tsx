import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark disaster-navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="fas fa-shield-alt me-2"></i>
          DisasterGuard
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/"
              >
                <i className="fas fa-home me-2"></i>Início
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`} 
                to="/dashboard"
              >
                <i className="fas fa-tachometer-alt me-2"></i>Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/simulation') ? 'active' : ''}`} 
                to="/simulation"
              >
                <i className="fas fa-map-marked-alt me-2"></i>Simulação
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/emergency') ? 'active' : ''}`} 
                to="/emergency"
              >
                <i className="fas fa-phone-alt me-2"></i>Emergência
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
                to="/about"
              >
                <i className="fas fa-info-circle me-2"></i>Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 