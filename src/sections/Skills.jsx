import Tag from "../components/Tag";
import {
  Cpp,
  Css,
  Express,
  Html,
  Javascript,
  Matplotlib,
  Mongodb,
  Nodejs,
  Numpy,
  Python,
  React,
  ScikitLearn,
  Tailwindcss,
  Tensorflow,
} from "../components/icons";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="column-1">
        <Tag label={"Skills"} />
        <p className="text-gray-300 text-center align-top text-xl font-normal inline">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="column-2">
        <div className="grid grid-cols-7 gap-y-4 max-sm:grid-cols-3 max-md:grid-cols-4 justify-evenly text-gray-300">
          <div className="flex flex-col items-center gap-y-1">
            <Html width={64} height={64} />
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <Css width={64} height={64} />
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <Javascript width={64} height={64} />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <React width={64} height={64} />
            <p>React.js</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <Nodejs width={64} height={64} />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <Express width={64} height={64} />
            <p>Express.js</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <Mongodb width={64} height={64} />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center gap-y-1 ">
            <Cpp width={64} height={64} />
            <p>C++</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <Python width={64} height={64} />
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <Numpy width={64} height={64} />
            <p>Numpy</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <ScikitLearn width={64} height={64} />
            <p>Scikit-Learn</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <Tensorflow width={64} height={64} />
            <p>Tensorflow</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <Matplotlib width={64} height={64} />
            <p>Matplotlib</p>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <Tailwindcss width={64} height={64} />
            <p>Tailwindcss</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
