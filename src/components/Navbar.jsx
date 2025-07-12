// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Tegan</h2>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/projects" style={styles.link}>Projects</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#f8fafc',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Navbar;
