// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  const codingProjects = [
    {
      title: 'NeuraNest',
      description: 'A smart home server project built with Raspberry Pi. Features include ad-blocking, cloud sync, and AI integration.',
      link: '#',
    },
    {
      title: 'MediScan',
      description: 'AI-powered tool to analyze medical symptoms and images. Built with GPT-4 Vision and FastAPI.',
      link: '#',
    },
    {
      title: 'MediStock',
      description: 'Pharmacy inventory system with role-based access, expiry tracking, batch logs, and analytics dashboard.',
      link: '#',
    },
    {
      title: 'Tegan Portfolio Site',
      description: 'This personal website — a React and Tailwind-powered portfolio built to showcase my work, story, and growth.',
      link: '#',
    },
  ];

  const socialProjects = [
    {
      title: 'FaZeAfterDark',
      description: 'A TikTok & YouTube Shorts page sharing the funniest and most viral FaZe Clan moments.',
      link: 'https://www.tiktok.com/@fazeafterdark',
    },
    {
      title: 'SmoshUnhinged',
      description: 'A social channel for curated Smosh clips designed to blow up on TikTok and Reels.',
      link: 'https://www.tiktok.com/@smoshunhinged',
    },
    {
      title: 'MicrowaveMinutes',
      description: 'A short-form storytelling channel with bizarre, hilarious, and scroll-stopping tales for the modern attention span.',
      link: 'https://www.tiktok.com/@microwaveminutes',
    },
  ];

  const ProjectCard = ({ title, description, link }) => (
    <div className="bg-white rounded-lg shadow p-6 border hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 font-medium hover:underline"
      >
        Visit
      </a>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">💻 Coding Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {codingProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6">📱 Social Media Channels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
