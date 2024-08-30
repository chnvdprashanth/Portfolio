import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Navbar, Sidebar } from "./components";

import {
  Hero,
  About,
  Skills,
  LookingFor,
  Projects,
  Contact,
  Footer,
} from "./sections";

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="max-w:lg h-auto relative">
      <div className="w-full h-[68px] max-tablet:hidden px-20 py-4">
        <Navbar />
      </div>
      <div className="w-full tablet:hidden">
        {!toggleSidebar ? (
          <div className="flex justify-between items-center gap-x-4 px-4 py-4">
            <p className="text-gray-50 font-bold text-2xl tracking-[-2%] leading-8">
              Prashanth
            </p>
            <MdMenu
              className="text-gray-300 flex items-center justify-center text-xl w-9 h-9 p-[6px]"
              onClick={() => setToggleSidebar(true)}
            />
          </div>
        ) : (
          <Sidebar setToggleSidebar={setToggleSidebar} />
        )}
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="about" id="About">
        <About />
      </div>
      <div className="skills" id="Skills">
        <Skills />
      </div>
      <div className="lookingFor">
        <LookingFor />
      </div>
      <div className="projects" id="Projects">
        <Projects />
      </div>
      <div className="contact" id="Contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
