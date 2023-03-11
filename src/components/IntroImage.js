import React from 'react';
import ImageOfMe from '../imgs/my.jpg';

const IntroImage = () => {
  return (
    <div className="mx-auto p-20 text-center bg-gray-100">
      <div>
        <img
          src={ImageOfMe}
          alt="my.jpg"
          className="w-40 h-auto rounded-full mx-auto border-gray-800 border-4"
        />
        <h1 className="tracking-widest text-3xl text-gray-700 font-black pt-5">
          Adam Marey
        </h1>
        <h4 className="text-1xll text-gray-500 pt-2">
          Full Stack Software Engineer based in Arizona
        </h4>
      </div>
    </div>
  );
};

export default IntroImage;
