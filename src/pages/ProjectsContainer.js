import React from 'react';
import Projects from '../components/Projects';
import fav from '../imgs/fav.jpg';
import kitchen from '../imgs/kitchen.jpg';
import ezmanage from '../imgs/ezmanage.png';
import portfolio from '../imgs/portfolio.png';
import styles from '../imgs/styles.jpg';
import pairs from '../imgs/pairsGenerator.png';
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
            name="Cohort Pair Generator"
            description="Cohort Pair Generator is a powerful and user-friendly web tool that leverages complex algorithms to simplify the creation of random pairs or groups of students in a higher education setting. This application automates the process of generating optimal academic pairings while taking into account multiple constraints, including the ability to specify certain students who cannot work together. Its intuitive drag-and-drop interface also allows users to manually adjust the generated pairs as needed. Additionally, users can easily copy the generated pairs to the clipboard or export them as CSV files to integrate into other workflows or applications."
            image={pairs}
            githubLink="https://github.com/adam-marey/pairing-management-"
            liveSite="https://pair-generator.netlify.app/"
          />
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
          <Projects
            name="Satorial Style Co."
            description="Professional e-commerce website using Next.js, Tailwind CSS, Auth0 for authentication, Stripe for payments, and Strapi CMS for content management. This website includes features such as product listings, shopping cart, and checkout functionality. The website is also fully responsive, ensuring that customers can shop seamlessly on any device. With this project, I demonstrated my skills in building a modern, secure, and efficient e-commerce platform that meets the needs of both the business and its customers. (under construction)"
            image={styles}
            githubLink=""
            liveSite=""
          />
          <Projects
            name="Personal Website"
            description="Personal website built with React and Tailwind CSS"
            image={portfolio}
            githubLink="https://github.com/adam-marey/Portfolio"
            liveSite="https://portfolio-adammaree.vercel.app/"
          />
        </h1>
      </div>
    </div>
  );
};

export default ProjectsContainer;
