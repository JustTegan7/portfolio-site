import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <p className="text-lg text-gray-700 mb-4">
        Feel free to reach out or connect with me on any of the platforms below:
      </p>

      <div className="flex justify-center gap-6 mb-10">
        <a href="mailto:justtegan7@gmail.com" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
          Email
        </a>
        <a href="https://www.linkedin.com/in/tegan-rogers/" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/JustTegan7" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Instagram Posts</h3>
      <div className="border rounded-lg overflow-hidden">
        <iframe
          src="//lightwidget.com/widgets/bcf0113110795b14a841aa7f05ecd1ea.html"
          scrolling="no"
          allowtransparency="true"
          className="w-full"
          style={{ border: 0, overflow: 'hidden', height: '500px' }}
          title="Instagram Feed"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
