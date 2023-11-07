import React from 'react';

function Skills() {
  return (
    <div>
      <div className="mx-auto p-20 text-center bg-gray-100">
        <div>
          <h1 className="tracking-widest text-3xl text-gray-700 font-black pt-5">
            Technical Proficiency
          </h1>
          <h4 className="text-1xll text-gray-500 pt-2">
            I specialize in various technologies and frameworks, enabling me to
            create exceptional software solutions. Here are some of the
            technologies I excel in:
          </h4>
        </div>
      </div>
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
          <h1>Other Tool</h1>
          <p>Figma, Schema Design, Miro, Canvas, Monday, GitHub</p>
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
