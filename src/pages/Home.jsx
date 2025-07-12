import React from 'react';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-12">
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-6">
        <img
          src={profileImage}
          alt="Tegan Rogers"
          className="w-56 h-full object-cover transform -translate-x-2"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Tegan Rogers</h1>
      <p className="text-lg text-gray-600 mb-4">
        Building my future one step at a time.
      </p>
      <p className="max-w-xl text-gray-700 leading-relaxed">
        I'm a computer science student passionate about AI development, currently on a 14-month journey of self-growth,
        building real-world projects and running creative media channels.
      </p>
    </div>
  );
};

export default Home;
