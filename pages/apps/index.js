import AppGrid from "../../components/AppGrid";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";

const Apps = () => {
   return (
      <div className="h-full bg-primary/30 py-32 flex items-center">
         <Circles />
         <div className="container mx-auto">
            <div className="flex flex-col gap-y-8">
               {/* text */}
               <div className="flex flex-col items-center text-center mt-16 sm:mt-0">
                  <motion.h2
                     variants={fadeIn("up", 0.2)}
                     initial="hidden"
                     animate="show"
                     exit="hidden"
                     className="h2 xl:mt-8"
                  >
                     My <span className="text-accent">Apps</span>
                  </motion.h2>
                  <motion.p
                     variants={fadeIn("up", 0.4)}
                     initial="hidden"
                     animate="show"
                     exit="hidden"
                     className="mb-4 max-w-[400px] mx-auto"
                  >
                     Explore my collection of web applications built with modern
                     technologies.
                  </motion.p>
               </div>

               {/* grid */}
               <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="w-full"
               >
                  <AppGrid />
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default Apps;
