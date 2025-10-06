// Unified Projects page: Programming + Social subsections
// Cards are minimal (title only). Click → modal with
// centered title + colored header, split: Description | Tools/Languages.
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';

// Teal header for programming, Beige for social
const HEADER = { programming: '#154D57', social: '#B7A08B' };

const Projects = () => {
  const programmingProjects = [
    {
      title: 'NeuraNest',
      languages: ['Python', 'Bash', 'YAML'],
      tools: ['FastAPI', 'Docker', 'Pi-hole (roadmap)', 'OpenAI (later)'],
      hardware: ['Raspberry Pi 5', 'External HDD/SSD'],
      description:
        'Home server hub: custom file manager now; roadmap adds Pi-hole, AI assistant, energy dashboard, and a wall-mounted tablet UI.',
      links: { live: '', code: 'https://github.com/JustTegan7/neuranest' },
      kind: 'programming',
    },
    {
      title: 'MediScan',
      languages: ['JavaScript', 'Python'],
      tools: ['React', 'FastAPI', 'GPT-4 Vision (prototype)'],
      hardware: ['Local dev PC (future: secure cloud)'],
      description:
        'Upload symptoms/images → preliminary explanations. Emphasis on UX clarity and safety; later: custom model training.',
      links: { live: '', code: 'https://github.com/JustTegan7' },
      kind: 'programming',
    },
    {
      title: 'MediStock',
      languages: ['JavaScript', 'SQL'],
      tools: ['React', 'Node/Express', 'Postman', 'CSV/PDF export'],
      hardware: ['Dev PC (future cloud deploy)'],
      description:
        'Pharmacy inventory with roles, expiry tracking, lot/batch logging, reorders, analytics, and exports. Mirrors real operations.',
      links: { live: '', code: 'https://github.com/JustTegan7/medistock' },
      kind: 'programming',
    },
    {
      title: 'Portfolio Site',
      languages: ['JavaScript', 'HTML', 'CSS'],
      tools: ['React', 'React Router'],
      hardware: ['N/A'],
      description:
        'Recruiter-first portfolio. Fast routing, accessible UI, and tight storytelling focused on impact.',
      links: { live: '', code: 'https://github.com/JustTegan7' },
      kind: 'programming',
    },
  ];

  const socialProjects = [
    {
      title: 'FaZeAfterDark',
      languages: ['—'],
      tools: ['CapCut/Premiere', 'ElevenLabs (VO)', 'Auto-subtitles'],
      hardware: ['iPhone', 'PC (batching)'],
      description:
        'Viral FaZe clips. Weekly batch 14 clips, daily posting cadence, iterate on hooks and retention.',
      links: { live: 'https://www.tiktok.com/@fazeafterdark' },
      kind: 'social',
    },
    {
      title: 'SmoshUnhinged',
      languages: ['—'],
      tools: ['CapCut/Premiere', 'Subtitle tools', 'Analytics dashboards'],
      hardware: ['iPhone'],
      description:
        'Curated Smosh moments tailored for TikTok/Reels. Tight story beats and mobile-safe framing.',
      links: { live: 'https://www.tiktok.com/@smoshunhinged' },
      kind: 'social',
    },
    {
      title: 'MicrowaveMinutes',
      languages: ['—'],
      tools: ['AI TTS', 'Subtitle tools', 'Mobile editors'],
      hardware: ['iPhone'],
      description:
        'Short-form storytelling with twist endings. Phone-first pipeline: VO → subs → BG gameplay.',
      links: { live: 'https://www.tiktok.com/@microwaveminutes' },
      kind: 'social',
    },
  ];

  // modal state
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (item) => {
    setActive(item);
    setOpen(true);
  };

  // responsive grid
  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: 16,
  };

  // pick header color per project kind
  const headerColor = active?.kind === 'social' ? HEADER.social : HEADER.programming;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem' }}>
        Projects
      </h2>

      {/* unified section with two subsections */}
      <section>
        {/* Programming */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>💻 Programming Projects</h3>
          <div style={grid}>
            {programmingProjects.map((p) => (
              <ProjectCard key={p.title} title={p.title} onClick={() => openModal(p)} />
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>📱 Social Media Projects</h3>
          <div style={grid}>
            {socialProjects.map((p) => (
              <ProjectCard key={p.title} title={p.title} onClick={() => openModal(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)} title={active?.title} titleBg={headerColor}>
        {active && (
          <div>
            {/* Optional quick meta */}
            {active.hardware && (
              <p style={{ margin: '0 0 10px', fontSize: '0.95rem' }}>
                <strong>Hardware:</strong> {active.hardware.join(', ')}
              </p>
            )}

            {/* 2-col split on md+ */}
            <div style={{ display: 'grid', gap: 16 }}>
              <style>
                {`
                  @media (min-width: 700px) {
                    .split-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                  }
                `}
              </style>

              <div className="split-2">
                {/* Description */}
                <section>
                  <h4 style={{ margin: '8px 0 6px' }}>Description</h4>
                  <p style={{ marginTop: 0 }}>{active.description}</p>
                </section>

                {/* Tools & Languages */}
                <section>
                  <h4 style={{ margin: '8px 0 6px' }}>Tools & Languages</h4>
                  <p style={{ margin: '0 0 6px' }}>
                    <strong>Languages:</strong> {active.languages?.join(', ') || '—'}
                  </p>
                  <div>
                    <strong>Programs/Tools:</strong>
                    <ul style={{ margin: '6px 0 0', paddingLeft: '1.2rem' }}>
                      {(active.tools || ['—']).map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
              {active.links?.code && (
                <a
                  href={active.links.code}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: '#fff',
                    color: '#0f172a',
                    border: '2px solid #0f172a', // ✅ fixed quotes
                    padding: '8px 12px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  Code
                </a>
              )}
              {active.links?.live && (
                <a
                  href={active.links.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: '#154D57',
                    color: '#fff',
                    border: '2px solid #0f172a',
                    padding: '8px 12px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  Live
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;
