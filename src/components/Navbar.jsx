import { Button,NavLink } from './index'

const resume = "https://drive.google.com/file/d/1tio5My21gOJC-eZVV91y5StzLHBpc115/view?usp=sharing"

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-4 rounded-full border border-white/[0.2] shadow-sm shadow-white bg-gray-950">
      <div className="text-gray-50 font-bold text-3xl tracking-[-2%] leading-9">Prashanth</div>
      <div className="flex items-center max-lg:gap-x-12 gap-x-12">
        <div className="flex items-center gap-x-6 text-gray-300 text-lg leading-6 font-normal">
          <NavLink label={"About"} />
          <NavLink label={"Skills"} />
          <NavLink label={"Projects"} />
          <NavLink label={"Contact"} />
        </div>

        <div className="flex items-center gap-x-4 text-lg">
          <Button label="Resume" urlLink={resume}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar