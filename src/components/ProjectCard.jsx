// Minimal card: center title only; click opens modal via onClick
import React from 'react';

const PALETTE = { ink:'#0f172a', cream:'#FEFAF7' };

const ProjectCard = ({ title, onClick }) => {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
      style={{
        // minimal frame, centered text
        background: PALETTE.cream,
        border: `2px solid ${PALETTE.ink}`,
        borderRadius: 12,
        height: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 12,
        cursor: 'pointer',
        transition: 'transform 120ms ease',
      }}
      aria-label={`${title} project card`}
    >
      <strong style={{ color: PALETTE.ink }}>{title}</strong>
    </article>
  );
};

export default ProjectCard;
