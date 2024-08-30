/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md"
import { Button,NavLink } from './index'

const Sidebar = ({ setToggleSidebar }) => {
  return (
    <div className="flex-col absolute z-20 bg-gray-950 w-full h-[500px] items-center pl-14">
      <div className="px-4">
        <div className="flex justify-between items-center py-4 border-b-[1px] border-gray-600">
          <p className="text-gray-50 font-bold text-2xl tracking-[-2%] leading-8">
            Prashanth
          </p>
          <MdClose
            className="text-gray-300 text-xl w-9 h-9 p-[6px]"
            onClick={() => setToggleSidebar(false)}
          />
        </div>
        <div className="flex flex-col h-48 border-b-[1px] border-gray-600 items-start text-base leading-6 font-normal text-gray-300 py-4 gap-y-4">
          <NavLink label={"About"} setToggleSidebar={setToggleSidebar} />
          <NavLink label={"Skills"} setToggleSidebar={setToggleSidebar} />
          <NavLink label={"Projects"} setToggleSidebar={setToggleSidebar} />
          <NavLink label={"Contact"} setToggleSidebar={setToggleSidebar} />
        </div>
      </div>
      <div className="px-4">
        <Button label="Resume"/>
      </div>
    </div>
  );
};

export default Sidebar;
