import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        
        Hashr

        <nav className="navbarNav">
          <ul>
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/projects" className="" href="#">Login</Link>
            <Link to="/contact" className="" href="#">Signup</Link>
          </ul>
        </nav>

      </div>
    );
  }
}

export default Navbar;