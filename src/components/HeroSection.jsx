// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = ({ darkMode }) => {
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className={`py-20 ${
        darkMode ? "bg-gray-900" : "bg-gradient-to-r from-blue-50 to-indigo-100"
      } relative`}
    >
  <motion.img
        src="https://img.icons8.com/?size=160&id=7Zom8WfRFgUn&format=png"
        alt="Floating Image 1"
        className="absolute top-130 right-25 w-10 h-10 rounded-full"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      />

      <motion.img
        src="https://img.icons8.com/?size=160&id=SwvDja4ryubi&format=png"
        alt="Floating Image 2"
        className="absolute top-98 left-117 w-12 h-12 rounded-full"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 5 }}
      />

      <motion.img
        src="https://img.icons8.com/?size=160&id=HshIQgiZ35nI&format=png"
        alt="Floating Image 3"
        className="absolute top-16 left-200 w-10 h-10 rounded-full"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Unlock the Value <br />
              of Your{" "}
              <span
                className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}
              >
                Software Licenses
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl mb-8 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Turn your unused software licenses into instant cash. Fast,
              secure, and hassle-free valuation and resale.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className={`px-8 py-3 text-lg font-medium rounded-lg flex items-center justify-center ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#how-it-works"
                className={`px-8 py-3 text-lg font-medium rounded-lg flex items-center justify-center ${
                  darkMode
                    ? "bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300"
                    : "bg-white border border-gray-300 hover:border-gray-400 text-gray-800"
                }`}
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-[60%] mt-10 md:mt-0">
            <div className={`rounded-xl overflow-hidden`}>
              <img
                src="/home.png"
                alt="Software license management dashboard"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
