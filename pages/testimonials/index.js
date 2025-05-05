//components
import TestimonialSlider from "../../components/TestimonialSlider";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
   return (
      <div className="h-full bg-primary/30 py-16 sm:py-24 text-center">
         <div className="container mx-auto h-full flex flex-col justify-center px-4">
            {/* title */}
            <motion.h2
               variants={fadeIn("up", 0.2)}
               initial="hidden"
               animate="show"
               exit="hidden"
               className="h2 mb-6 sm:mb-8 xl:mb-0"
            >
               What clients <span className="text-accent">say.</span>
            </motion.h2>
            {/* slider */}
            <motion.div
               variants={fadeIn("down", 0.2)}
               initial="hidden"
               animate="show"
               exit="hidden"
               className="w-full"
            >
               <TestimonialSlider />
            </motion.div>
         </div>
      </div>
   );
};

export default Testimonials;
