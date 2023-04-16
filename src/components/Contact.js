import React from 'react';
import { SocialIcon } from 'react-social-icons';
// import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className="container mx-auto p-10 lg:w-6/12 lg:pt-28 lg:pt-0">
      <h1 className="tracking-widest text-2xl text-gray-700 font-black pt-5">
        Interested in collaborating?
      </h1>
      <div className="text-1xl text-gray-500 pt-2">
        <p>
          if you're interested in working with me on a project or have any
          questions, please don't hesitate to reach out using any of the
          following methods:
        </p>
      </div>
      <br />
      <div className="">
        <span className="pr-2 cursor-pointer" target="_blank">
          <SocialIcon
            url="https://www.linkedin.com/in/sulaiman-marey/"
            network="linkedin"
            target="_blank"
          />
        </span>
        <span className="pr-2 cursor-pointer">
          <SocialIcon
            url="https://github.com/adam-marey"
            network="github"
            target="_blank"
          />
        </span>
        <span className="pr-2 cursor-pointer">
          <SocialIcon
            url={'mailto:marey119988@gmail.com'}
            network="email"
            target="_blank"
          />
        </span>
      </div>
    </div>
  );
};

export default Contact;
