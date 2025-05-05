import React, { useState } from "react";

// Icons
import {
   FaHtml5,
   FaCss3,
   FaJs,
   FaReact,
   FaNodeJs,
   FaBootstrap,
} from "react-icons/fa";
import {
   SiNextdotjs,
   SiFramer,
   SiMongodb,
   SiTailwindcss,
   SiTypescript,
   SiGreensock,
   SiMysql,
   SiFirebase,
   SiPostgresql,
} from "react-icons/si";

// Data
export const aboutData = [
   {
      title: "skills",
      info: [
         {
            title: "Frontend services",
            icons: [
               <FaHtml5 key="html5" />,
               <FaCss3 key="css3" />,
               <FaJs key="js" />,
               <FaReact key="react" />,
               <FaBootstrap key="bootstrap" />,
               <SiTailwindcss key="tailwind" />,
               <SiGreensock key="gsap" />,
               <SiFramer key="framer-motion" />,
            ],
         },
         {
            title: "Backend services",
            icons: [
               <FaNodeJs key="node" />,
               <SiNextdotjs key="next" />,
               <SiTypescript key="typescript" />,
            ],
         },
         {
            title: "Database",
            icons: [
               <SiMongodb key="mongodb" />,
               <SiFirebase key="firebase" />,
               <SiPostgresql key="postgresql" />,
            ],
         },
      ],
   },
   {
      title: "experience",
      info: [
         {
            title: "Mandir Trust Web Platform - 2025",
         },
         {
            title: "Housai Global Exim - 2025",
         },
         {
            title: "Guru Nanak Dental - 2024",
         },
         {
            title: "Avinomad 3D T-Shirt Customizer - 2024",
         },
         {
            title: "Zentrry Gaming Portfolio Clone - 2024",
         },
      ],
   },
];

// Components
import Circles from "../../components/Circles";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Counter
import CountUp from "react-countup";

const About = () => {
   const [index, setIndex] = useState(0);

   return (
      <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
         <Circles />
         {/* Avatar Image */}
         <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex absolute bottom-0 -left-[370px]"
         >
            {/* Avatar Placeholder */}
         </motion.div>
         <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center">
               <motion.h2
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="h2"
               >
                  Building the <span className="text-accent">Web </span> <br />
                  One Pixel at a Time a time 🛠️
               </motion.h2>
               <motion.p
                  variants={fadeIn("right", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="max-w-[500px] mz-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
               >
                  A couple of years ago I began coding. Since then, I have had
                  the privilege of working on a diverse range of projects.
                  Worked with a multiple clients and few companies.
               </motion.p>
               {/* Counters */}
               <motion.div
                  variants={fadeIn("right", 0.6)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="hidden md:flex md:max-w-xl xl:max-w-none mx:auto xl:mx-0 mb-8"
               >
                  <div className="flex flex-1 xl:gap-x-6">
                     {[
                        { label: "Days of experience", count: 745 },
                        { label: "Hours spent coding", count: 3000 },
                        { label: "Finished Projects", count: 10 },
                     ].map((item, idx) => (
                        <div
                           key={idx}
                           className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                        >
                           <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                              <CountUp
                                 start={0}
                                 end={item.count}
                                 duration={3}
                              />{" "}
                              +
                           </div>
                           <div className="text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                              {item.label}
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>
            </div>
            {/* Info Section */}
            <motion.div
               variants={fadeIn("left", 0.4)}
               initial="hidden"
               animate="show"
               exit="hidden"
               className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
            >
               {/* Tabs */}
               <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                  {aboutData.map((item, itemIndex) => (
                     <div
                        key={itemIndex}
                        className={`${
                           index === itemIndex &&
                           "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                        } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                        onClick={() => setIndex(itemIndex)}
                     >
                        {item.title}
                     </div>
                  ))}
               </div>
               {/* Tab Content */}
               <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                  {aboutData[index].info.map((item, itemIndex) => (
                     <div
                        key={itemIndex}
                        className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                     >
                        {/* Title */}
                        <div className="font-light mb-2 md:mb-0">
                           {item.title}
                        </div>
                        {/* Icons */}
                        {item.icons && (
                           <div className="flex gap-x-4">
                              {item.icons.map((icon, iconIndex) => (
                                 <div
                                    key={iconIndex}
                                    className="text-2xl text-white"
                                 >
                                    {icon}
                                 </div>
                              ))}
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default About;
