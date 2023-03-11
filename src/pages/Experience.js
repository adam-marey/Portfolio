const Experience = () => {
  return (
    <div class="mx-auto">
      <div class="mx-auto bg-gray-100 lg:pl-40">
        <div class="mx-auto p-20 bg-gray-100 mb-10 md:mb-0">
          <div className="container mx-auto">
            <h1 className="tracking-widest text-4xl text-gray-700 font-black pt-5 pb-4 flex justify-between">
              Work Experience
            </h1>
          </div>
          <div className="container mx-auto flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-1/3">
              <h1 className="text-xl text-gray-700 font-black">
                Software Development Mentor
              </h1>
              <h1 className="text-lg text-gray-700 font-black">
                @
                <a
                  href="https://www.fullstackacademy.com/"
                  className="text-blue-500"
                >
                  Fullstack Academy of Code
                </a>
              </h1>
              <h1 className="text-md text-gray-700 font-black pt-3">
                2022 - Present
              </h1>
              <h1 className="text-md text-gray-700 font-black">Remote / NYC</h1>
            </div>
            <div className="flex flex-col md:w-2/3 pl-5">
              <h1 className="text-md text-gray-500">
                <ul>
                  <li>
                    Teach PERN stacks - Agile Methodologies - Object Oriented
                    Programming concepts to 40+ students
                  </li>
                  <li>
                    Assisted students in the development of their final projects
                  </li>
                  <li>
                    Work with lead instructors on the group and individual
                    tutoring needs for students, prepare teaching materials, and
                    provide feedback on student progress and performance
                  </li>
                  <li>
                    Act as tech/team lead during student group projects, provide
                    students with code reviews, assist with debugging.
                  </li>
                </ul>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
