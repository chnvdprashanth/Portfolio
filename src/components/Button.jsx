import { FiExternalLink } from "react-icons/fi"

// eslint-disable-next-line react/prop-types
const Button = ( { label, urlLink } ) => {
  return (
    <div className="flex items-center justify-center gap-x-2 text-gray-950 bg-white py-[6px] px-4 rounded-full border border-blue-600 shadow-md shadow-blue-600 text-base font-medium cursor-pointer">
        <span><FiExternalLink className="w-5 h-5" /></span>
        <a href={urlLink} target="_blank" rel="noopener noreferrer">{label}</a>
    </div>
  )
}

export default Button