//next image
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer-motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
   return (
      <div className="bg-primary/60 h-full">
         {/* text */}
         <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
            <div className="text-center flex flex-col justify-center pt-20 sm:pt-28 xl:pt-40 xl:text-left h-full container mx-auto px-4 sm:px-6">
               {/* title */}
               <motion.h1
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="text-[28px] sm:text-[35px] md:text-[45px] xl:text-[60px] leading-tight font-semibold mb-4 sm:mb-8"
               >
                  Get a <span className="text-accent">Premium Website</span>{" "}
                  <br className="hidden sm:block" />
                  For your Business
               </motion.h1>
               {/* subtitle */}
               <motion.p
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="text-base sm:text-lg max-w-[280px] sm:max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 sm:mb-10 xl:mb-16"
               >
                  Creating Stunning Websites that Transform Your Business
                  Presence and Convert Visitors into Loyal Customers.
               </motion.p>
               {/* btn */}
               <motion.div className="flex justify-center xl:hidden relative scale-90 sm:scale-100">
                  <ProjectsBtn />
               </motion.div>
               <motion.div
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="hidden xl:flex"
               >
                  <ProjectsBtn />
               </motion.div>
            </div>
         </div>
         {/* image */}
         <div className="w-full xl:w-[1500px] h-full absolute right-0 bottom-0">
            {/* bg img */}
            <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
            {/* particles */}
            <ParticlesContainer />
            {/* avatar */}
            <motion.div
               variants={fadeIn("up", 0.5)}
               initial="hidden"
               animate="show"
               exit="hidden"
               transition={{ duration: 1, ease: "easeInOut" }}
               className="w-full h-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] xl:max-w-[550px] max-h-[550px] absolute -bottom-5 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-[9%] lg:translate-x-0 lg:bottom-0"
            >
               <Avatar />
            </motion.div>
         </div>
      </div>
   );
};

export default Home;
