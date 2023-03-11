import React from 'react';
import Projects from '../components/Projects';
import fav from '../imgs/fav.jpg';
import kitchen from '../imgs/kitchen.jpg';
import ezmanage from '../imgs/ezmanage.png';
import portfolio from '../imgs/portfolio.png';
import { Link } from 'react-router-dom';
const ProjectsContainer = () => {
  return (
    <div class="mx-auto">
      <div class="mx-auto bg-gray-100 lg:pl-40">
        <div class="mx-auto p-20 bg-gray-100 mb-10 md:mb-0">
          <div className="container mx-auto">
            <h1 className="tracking-widest text-3xl text-gray-700 font-black pt-5 pb-4 flex justify-between">
              My Projects
            </h1>
            <p className="mx-auto text-sm md:text-base lg:text1xl text-gray-500 ">
              I love to write code and learn new things. So you can see that
              most of my work is public and can be found on my
              <span>
                <a
                  className="cursor-pointer border-b-2 border-indigo-600 px-1"
                  href="https://github.com/adam-marey"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </span>
              there you can see all the various languages that I mess around
              with, frameworks that I want to learn and projects I put together
              in the process of learning new things. Below are some of my
              featured products, these projects excite me and I could talk about
              them all day. I hope you enjoy them too. I will be adding to this
              constantly so check back for more.
            </p>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="flex items-center my-2" />
        <h1 className="font-weight-light">
          <Projects
            name="Neighbor-fave"
            description="NeighborFav, is a community-based platform that aims to facilitate
              the exchange of favors among members in a given area.The platform
              allows users to post and view favors, and offers a real-time chat
              feature to facilitate communication between users. Users are able to see their posts and other's posts via geolocations. 
						Built with React, Redux, Node, Express, Sequelize, PostgreSQL, socket.io, react-leaflet"
            image={fav}
            githubLink="https://github.com/cs-team-02/neighbor-fave"
            liveSite="https://neighbor-fave.herokuapp.com/"
          />
          <div />
          <Projects
            name="Personal Website"
            description="Personal website built with React and Tailwind CSS"
            image={portfolio}
            githubLink="https://github.com/adam-marey/myPort"
            liveSite="https://www.adammarey.com/"
          />
          <div />
          <Projects
            name="EZ-Manage"
            description="The project is a management system for keeping track of projects and clients. It is built using React for the frontend, Apollo Client for handling GraphQL requests, and Bootstrap for styling. The backend is built using Express and GraphQL for the database."
            image={ezmanage}
            githubLink="https://github.com/adam-marey/EZ-Manage"
            liveSite="https://github.com/adam-marey/EZ-Manage"
          />
          <div />
          <Projects
            name="Virtual Kitchen"
            description="Fullstack e-commerce application- Built with React, Redux, Node, Express, PostgreSQL, Sequelize"
            image={kitchen}
            githubLink="https://github.com/mudkip-masters/grace-shopper"
            liveSite="https://grace-shopper-mudkip-masters.herokuapp.com/"
          />
          <div />
        </h1>
      </div>
    </div>
  );
};

export default ProjectsContainer;
