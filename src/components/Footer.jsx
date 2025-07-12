import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} Tegan Rogers. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '4rem',
    padding: '2rem 1rem',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    textAlign: 'center',
  },
  text: {
    fontSize: '0.9rem',
    margin: 0,
  },
};

export default Footer;
