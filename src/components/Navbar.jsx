import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navbar
 * - Sticky, responsive
 * - Works with React Router (NavLink active state)
 * - No TypeScript syntax errors (plain JS JSX)
 * - Avoids accidental page rendering (was previously a Projects component)
 */

const BRAND = {
  ink: '#0f172a',
  cream: '#FEFAF7',
  teal: '#154D57',
  beige: '#B7A08B',
};

const linkBase = {
  padding: '10px 14px',
  borderRadius: '10px',
  fontWeight: 600,
  textDecoration: 'none',
  display: 'inline-block',
  border: '2px solid rgba(255,255,255,0.25)',
};

const DesktopLinks = () => (
  <div className="nav-links-desktop" style={{ display: 'none', gap: 10 }}>
    <NavLink
      to="/"
      style={({ isActive }) => ({
        ...linkBase,
        color: BRAND.cream,
        background: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
      })}
      end
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      style={({ isActive }) => ({
        ...linkBase,
        color: BRAND.cream,
        background: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
      })}
    >
      About
    </NavLink>
    <NavLink
      to="/projects"
      style={({ isActive }) => ({
        ...linkBase,
        color: BRAND.cream,
        background: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
      })}
    >
      Projects
    </NavLink>
    <NavLink
      to="/contact"
      style={({ isActive }) => ({
        ...linkBase,
        color: BRAND.cream,
        background: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
      })}
    >
      Contact
    </NavLink>
  </div>
);

const MobileLinks = ({ onNavigate }) => (
  <div
    id="mobile-menu"
    style={{
      borderTop: `2px solid ${BRAND.ink}`,
      background: BRAND.teal,
      padding: '10px 16px 14px',
      display: 'grid',
      gap: 10,
    }}
  >
    <NavLink
      to="/"
      onClick={onNavigate}
      style={({ isActive }) => ({
        ...linkBase,
        color: BRAND.cream,
        background: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
      })}
      end
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      onClick={onNavigate}
      style={({ isActive }) => ({
        ...linkBase,
        color: BRAND.cream,
        background: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
      })}
    >
      About
    </NavLink>
    <NavLink
      to="/projects"
      onClick={onNavigate}
      style={({ isActive }) => ({
        ...linkBase,
        color: BRAND.cream,
        background: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
      })}
    >
      Projects
    </NavLink>
    <NavLink
      to="/contact"
      onClick={onNavigate}
      style={({ isActive }) => ({
        ...linkBase,
        color: BRAND.cream,
        background: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
      })}
    >
      Contact
    </NavLink>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close mobile menu on window resize up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 720) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: BRAND.teal,
        borderBottom: `2px solid ${BRAND.ink}`,
        boxShadow: '0 2px 0 rgba(15,23,42,0.06)',
      }}
    >
      <nav
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: BRAND.cream,
          gap: 12,
        }}
        aria-label="Main navigation"
      >
        {/* Brand */}
        <NavLink
          to="/"
          style={{
            color: BRAND.cream,
            fontWeight: 800,
            fontSize: '1.05rem',
            textDecoration: 'none',
            letterSpacing: '0.3px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
          aria-label="Go to home"
        >
          <span
            aria-hidden
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: BRAND.beige,
              border: `2px solid ${BRAND.cream}`,
              boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.4)',
            }}
          />
          <span>Tegan&nbsp;Rogers</span>
        </NavLink>

        {/* Desktop links */}
        <DesktopLinks />

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          style={{
            border: `2px solid ${BRAND.cream}`,
            background: 'transparent',
            color: BRAND.cream,
            padding: '8px 10px',
            borderRadius: 10,
            fontWeight: 700,
            lineHeight: 1,
          }}
          className="nav-mobile-trigger"
        >
          Menu
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && <MobileLinks onNavigate={() => setOpen(false)} />}

      {/* tiny CSS for responsive display */}
      <style>{`
        @media (min-width: 720px) {
          .nav-links-desktop { display: flex !important; }
          .nav-mobile-trigger { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
