import { FaRegCopyright } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="flex flex-col items-center px-8">
        <div className="flex items-center gap-x-2 text-gray-300">
            <FaRegCopyright className="w-5 h-5"/> | 
            <p>Designed and Coded by Prashanth</p>
        </div>
    </div>
  )
}

export default Footer