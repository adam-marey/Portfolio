import React from 'react';
import './Navbar.css';
import { MenuIcon } from '@heroicons/react/solid';

import { SocialIcon } from 'react-social-icons';

const Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const toggle = () => setNavbarOpen(!navbarOpen);

  return (
    <div className="container mx-auto">
      <nav className="relative flex flex-wrap items-center justify-between px-1 py-1 bg-blueGray-500 mb-1 text-center">
        <div className="container px-1 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-black cursor-pointer text-xl leading-none px-1 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={toggle}
            >
              <MenuIcon className="h-5 w-5 text-gray" />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <br />
                <div className="">
                  <span className="pr-5 cursor-pointer" target="_blank">
                    <SocialIcon
                      url="https://www.linkedin.com/in/adam-marey/"
                      network="linkedin"
                      target="_blank"
                    />
                  </span>

                  <span className="pr-5 cursor-pointer">
                    <SocialIcon
                      url={'mailto:marey119988@gmail.com'}
                      network="email"
                      target="_blank"
                    />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
