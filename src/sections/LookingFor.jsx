import { motion } from "framer-motion";
import Tag from "../components/Tag";

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#ffffff",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

const LookingFor = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-white gap-y-12 max-tablet:gap-y-8">
      {/* Small Note */}
      <div className="flex flex-col items-center">
        <Tag label={"Looking for ?"} />
      </div>

      <div className="flex flex-col gap-y-8 text-center">
        <div className="flex flex-col gap-y-2 max-tablet:gap-y-4">
          <h2 className="align-top inline text-gray-50 text-3xl font-semibold text-center">
            What I&apos;m Looking For ?
          </h2>
          <p className="text-lg">
            I am currently seeking opportunities where I can leverage my skills
            in web development and machine learning. If you are looking for a
            motivated and passionate individual to join your team or work on
            exciting projects, feel free to get in touch!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* LinkedIn Button */}
          <motion.a
            href="https://www.linkedin.com/in/chnvdprashanth"
            target="_blank"
            className="relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold overflow-hidden group cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-70 group-hover:opacity-80 transition-opacity duration-300"></span>
            <i className="fab fa-linkedin w-8 h-8 text-white"></i>
            <span className="relative text-xl font-medium ml-4">LinkedIn</span>
            <motion.div
              className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-full transition-all duration-300"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />
          </motion.a>

          {/* Gmail Button */}
          <motion.a
            href="mailto:chnvdprashanth@gmail.com"
            className="relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-red-500 text-white font-bold overflow-hidden group cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-700 to-red-600 opacity-70 group-hover:opacity-80 transition-opacity duration-300"></span>
            <i className="fas fa-envelope w-8 h-8 text-white"></i>
            <span className="relative text-xl font-medium ml-4">Gmail</span>
            <motion.div
              className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-full transition-all duration-300"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default LookingFor;
