import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../variants";
import Image from "next/image";

// Demo data for apps
const apps = [
   {
      id: 1,
      title: "3D T-Shirt Designing Application",
      initial: "3D",
      createdOn: "2024-09-15",
      description:
         "An interactive app for designing custom 3D T-shirts with real-time previews",
      projectUrl: "https://avinomad-3d-tshirt.vercel.app/",
      bgImage: "/thumb.png",
   },
   {
      id: 2,
      title: "Shree Bapdev Maharaj Trust Website",
      initial: "SBMT",
      createdOn: "2025-03-28",
      description:
         "A website for Shree Bapdev Maharaj Trust with donation and event features",
      projectUrl: "https://mandir-trust.vercel.app/",
      bgImage: "/thumb2.png",
   },
   {
      id: 3,
      title: "Housai Global Exim",
      initial: "HGE",
      createdOn: "2025-03-10",
      description:
         "A global trade portfolio website for import-export business",
      projectUrl: "https://housaiglobalexim.vercel.app/",
      bgImage: "/thumb3.png",
   },
   {
      id: 4,
      title: "Red Cyber Fox Website",
      initial: "RCF",
      createdOn: "2025-02-10",
      description:
         "A premium cyberpunk theme website for a cyber security company",
      projectUrl: "https://www.redcyberfox.in/",
      bgImage: "/thumb5.png",
   },
   {
      id: 5,
      title: "Guru Nanak Dental Clinic Website",
      initial: "GNDC",
      createdOn: "2025-01-28",
      description:
         "A website for Guru Nanak Dental Clinic with appointment booking system",
      projectUrl: "https://www.gurunanakdental.com/",
      bgImage: "/thumb4.png",
   },
   {
      id: 6,
      title: "Rahul Printers",
      initial: "RP",
      createdOn: "2025-01-10",
      description:
         "A sleek website for Rahul Printers showcasing their printing services",
      projectUrl: "https://rahul-printers.vercel.app/",
      bgImage: "/thumb6.png",
   },
   {
      id: 7,
      title: "New Projects on the Way!",
      initial: "NEXT",
      createdOn: "2025-05-07",
      description: "Fresh projects cooking, coming soon! 🚀",
      projectUrl: "#",
      bgImage: "/thumb0.png",
   },
];

const AppGrid = () => {
   const [selectedApp, setSelectedApp] = useState(null);

   const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
         year: "numeric",
         month: "long",
         day: "numeric",
      });
   };

   return (
      <>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-accent/80 scrollbar-track-accent/20 p-4 pb-24 rounded-lg">
            {apps.map((app) => (
               <motion.div
                  key={app.id}
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  onClick={() => setSelectedApp(app)}
                  className="flex flex-col items-center cursor-pointer group"
               >
                  <div
                     className="relative w-full max-w-[260px] aspect-square rounded-2xl 
                         mb-4 overflow-hidden border border-[rgba(255,255,255,0.08)]
                         group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300
                         bg-gradient-to-br from-[#2A0E61]/50 via-[#150B33]/50 to-[#11042C]/50
                         before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#662D8C]/20 before:via-[#ED1E79]/20 before:to-[#4776E6]/20 before:opacity-0 before:transition-opacity before:duration-300
                         group-hover:before:opacity-100"
                  >
                     {/* Content Container */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                        {/* Initial Letter - will move below card and disappear on hover */}
                        <div className="transform transition-all duration-300 group-hover:translate-y-[200%] group-hover:opacity-0">
                           <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] bg-clip-text text-transparent">
                              {app.initial}
                           </span>
                        </div>

                        {/* Description Overlay - will move up from bottom */}
                        <div
                           className="absolute inset-0 flex items-center justify-center
                             translate-y-full group-hover:translate-y-0 transition-all duration-300
                             bg-gradient-to-br from-[#2A0E61]/90 via-[#150B33]/90 to-[#11042C]/90
                             backdrop-blur-[2px]"
                        >
                           <p className="text-white/90 text-sm text-center px-6 leading-relaxed">
                              {app.description}
                           </p>
                        </div>
                     </div>
                  </div>

                  <h3 className="text-base md:text-lg text-center text-white/90 font-medium w-full px-2 max-w-[260px]">
                     {app.title ? (
                        <>
                           <span className="text-accent">
                              {app.title.split(" ")[0]}
                           </span>{" "}
                           {app.title.split(" ").slice(1).join(" ")}
                        </>
                     ) : null}
                  </h3>
               </motion.div>
            ))}
         </div>

         {/* Modal */}
         {selectedApp && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4">
               <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="bg-gradient-to-br from-[#2A0E61]/90 via-[#150B33]/95 to-[#11042C]/90 backdrop-blur-md 
                     rounded-2xl w-full max-w-lg overflow-hidden shadow-[0_0_40px_rgba(138,62,198,0.15)]
                     border border-[rgba(255,255,255,0.08)] relative my-4 sm:my-8"
               >
                  {/* Header with background image */}
                  <div className="relative w-full aspect-[16/10]">
                     {/* Background Image */}
                     <div className="absolute inset-0">
                        <Image
                           src={selectedApp.bgImage}
                           alt={selectedApp.title}
                           fill
                           className="object-cover object-center"
                           priority
                           quality={95}
                        />
                        {/* Gradient Overlay - ensuring full coverage */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(42,14,97,0)] via-[rgba(42,14,97,0.8)] to-[#11042C]"></div>
                     </div>

                     {/* Close Button */}
                     <button
                        onClick={() => setSelectedApp(null)}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full
                         bg-white/10 hover:bg-white/20 text-white/90 hover:text-white z-10
                         transition-all duration-300 backdrop-blur-sm border border-white/10
                         hover:scale-110 hover:rotate-90"
                     >
                        ✕
                     </button>

                     {/* Title Section */}
                     <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#11042C] to-transparent">
                        <motion.h2
                           initial={{ y: 20, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           transition={{ delay: 0.1 }}
                           className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg"
                        >
                           {selectedApp.title}
                        </motion.h2>
                     </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-6 pt-4 sm:pt-6 bg-gradient-to-b from-[#11042C] to-[#2A0E61]/90">
                     {/* Date */}
                     <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center text-white/70 mb-6 space-x-3 bg-white/5 px-4 py-2 rounded-full w-fit"
                     >
                        <svg
                           className="w-4 h-4"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                           />
                        </svg>
                        <span className="text-sm font-medium">
                           {formatDate(selectedApp.createdOn)}
                        </span>
                     </motion.div>

                     {/* Description */}
                     <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/90 mb-8 text-lg leading-relaxed"
                     >
                        {selectedApp.description}
                     </motion.p>

                     {/* Button */}
                     <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                     >
                        <a
                           href={selectedApp.projectUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] hover:from-[#FF3CAC]/90 hover:via-[#784BA0]/90 hover:to-[#2B86C5]/90
                           text-white py-3 px-6 rounded-xl text-center block
                           transition-all duration-300 transform hover:-translate-y-1
                           font-medium text-lg shadow-lg hover:shadow-xl
                           border border-white/10"
                        >
                           View Project →
                        </a>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         )}
      </>
   );
};

export default AppGrid;
