// Accessible modal w/ centered title + colored header
import React, { useEffect, useRef } from 'react';

const Modal = ({ open, onClose, title, titleBg = '#B7A08B', children }) => {
  const closeRef = useRef(null);

  // Close on Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Autofocus close
  useEffect(() => {
    if (open && closeRef.current) closeRef.current.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(760px, 92vw)',
          background: '#FEFAF7',               // cream
          border: '2px solid #0f172a',        // ink
          borderRadius: 12,
          boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
          overflow: 'hidden',                  // clip the header corners
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header bar w/ centered title */}
        <div style={{ position: 'relative', background: titleBg, padding: '12px 48px' }}>
          <h3 style={{ margin: 0, textAlign: 'center', color: '#0f172a' }}>{title}</h3>
          {/* Close button in top-right, doesn't shift title */}
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute', right: 10, top: 8,
              border: '2px solid #0f172a', borderRadius: 8,
              padding: '6px 10px', fontWeight: 600, background: '#fff', cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: 16, overflow: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
