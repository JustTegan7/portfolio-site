import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center text-gray-800">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
     <p className="text-lg leading-relaxed">
  I’m currently taking a 14-month break from school to focus on building my portfolio, saving money, and re-centering myself on my long-term goals. 
  During college, I found myself in a rut — uncertain, unfocused, and questioning if I was on the right path. 
  Stepping away gave me the clarity I needed. I used this time to dive deeper into my interests, develop real-world skills, and prove to myself that this field — technology, coding, AI — is truly what I want to pursue. 
  This website is the result of that turning point — a place to track my growth and showcase what I’m capable of.
</p>
      <p className="text-lg leading-relaxed mt-4 mb-12">
        I’m serious about turning this time into something meaningful. I’m using it to sharpen my skills, build real-world tools, 
        and prepare myself for what’s next. This isn’t just a break — it’s a pivot.
      </p>

      {/* Education & Experience Section */}
      <div className="grid md:grid-cols-2 gap-12 text-left">
        <div>
          <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>
          <ul className="space-y-3 text-base">
            <li>
              <strong>Current Goal:</strong> Transfer into University of Washington's CS program (2026) and join the Microsoft AI Development Team
            </li>
            <li>
              <strong>College:</strong> Everett Community College (EVCC) — 2 years of CS fundamentals, data structures, and discrete math
            </li>
            <li>
              <strong>Self-Learning:</strong> Full-stack development, AI tools, system design, and cloud services
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">💼 Work Experience</h3>
          <ul className="space-y-3 text-base">
            <li>
              <strong>Freelance Web Developer</strong> – Designed sites and tools for local businesses and clients
            </li>
            <li>
              <strong>Social Media Manager</strong> – Grew and managed viral pages like FaZeAfterDark and SmoshUnhinged
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
