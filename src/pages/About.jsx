import React from "react";

const About = () => {
  return (
    <>
      <h1 className="text-6xl mb-4 text-primary-content">Github Finder</h1>
      <p className="mb-4 text-2xl font-light text-primary-content">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a
          className="text-white"
          href="https://www.instagram.com/er.shashank91/"
        >
          Shashank Parashar
        </a>
      </p>
    </>
  );
};

export default About;
