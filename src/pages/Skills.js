import React from 'react';

function Skills() {
  return (
    <div>
      <div class="row1-container">
        <div class="box box-down cyan">
          <h1>Frontend Development</h1>
          <p>
            I can build scalable SPA and responsive Frontend applications using
            HTML, CSS, React, React Hooks, Next.js along with Tailwind and MUI
          </p>
        </div>

        <div class="box red">
          <h1>Backend Development</h1>
          <p>
            I can build scalable RESTful API and Backend applications using
            Node.js, Express, Sequelize, PostgreSQL, JWT, socket.io, MySql
          </p>
        </div>

        <div class="box box-down blue">
          <h1>Design tool</h1>
          <p>
            I use Figma, Schema Design, Miro to structure and plan user stories
          </p>
        </div>
      </div>
      <div class="row2-container">
        <div class="box orange ">
          <h1>Competitive Coder</h1>
          <p>a daily problem solver in HackerRank, LeetCode & codeWars</p>
        </div>
      </div>
      <div class="row2-container">
        <div class="box orange">
          <h1>Proficient</h1>
          <p>
            TypeScript - JavaScript - Java - Python - Node - HTML - CSS - React
            - Redux - Express - Sequelize - PostgreSQL - Webpack - JWT -
            socket.io.
          </p>
        </div>
      </div>
      <div class="row2-container">
        <div class="box orange">
          <h1>Familiarity</h1>
          <p>C# - React Native</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
