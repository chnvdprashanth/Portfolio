import { BsTwitterX } from "react-icons/bs"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { MdOutlineLocationOn } from "react-icons/md"
import { RxDotFilled } from "react-icons/rx"
import { profile_image } from "../assets"


const Hero = () => {
  return (
    <>
    <div className='w-full px-8 flex flex-col gap-y-12 text-gray-50'>
        <div className="flex flex-col gap-y-2">
            <p className="name">Hi, I&apos;m Prashanth<span>✌️</span></p>
            <p className="text-base font-normal align-bottom text-gray-400">
            I&apos;m a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. I am eager to learn and adapt to new technologies and methodologies, actively seeking opportunities to collaborate in diverse teams to enhance my skills and contribute to innovative projects.
            </p>
        </div>
        <div className="flex flex-col gap-y-2">
            <p className="flex items-center gap-x-2 text-gray-300"><MdOutlineLocationOn /><span>Hyderabad, India</span></p>
            <p className="flex items-center gap-x-2 text-gray-300"><RxDotFilled className="text-emerald-400"/><span>Available for new projects</span></p>
        </div>
        <div className="flex gap-x-1 text-gray-300">
          <a href="https://github.com/chnvdprashanth" target="_blank"><FiGithub className="p-[6px] w-9 h-9" /></a>
          <a href="https://www.linkedin.com/in/chnvdprashanth" target="_blank"><FiLinkedin className="p-[6px] w-9 h-9" /></a>
          <a href="https://x.com/NVD44874726" target="_blank"><BsTwitterX className="p-[6px] w-9 h-9" /></a>
        </div>
    </div>
    <div className="tablet:pl-20">
        <div className="pic-container">
            <img src={profile_image} alt="Profile Image" className="pic" />
            <div className="background-box"></div>
        </div>
    </div>
    </>
  )
}

export default Hero