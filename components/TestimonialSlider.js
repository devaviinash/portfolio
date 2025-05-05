// testimonial slider data
const testimonialSlider = [
   {
      image: "/t-avt-1.png",
      name: "Anusha Thakur",
      position: "Biotech Engineer",
      message:
         "Working with Avinash was honestly a great experience he helped me build my personal website from scratch understood exactly what I want and added his own creative ideas everything was delivered on time without any stress and with great attention to detail super professional..easy to work with and really skilled at what he does!",
   },
   {
      image: "/soham.jpg",
      name: "Soham Bhintade",
      position: "AI Engineer",
      message:
         "Working with Avi instantly made our work standout from the usual web developers. He has good expertise in developing interactive as well as attractive webpages we ever encountered. Definitely worth investing time and bills.",
   },
   {
      image: "/t-avt-3.png",
      name: "Jhon Doe",
      position: "Entrepreneur",
      message:
         "Her passion for data science is evident in her meticulous attention to detail and her drive to deliver meaningful results. Her enthusiasm and dedication inspire everyone around her.",
   },
];

//imoort swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import required modules
import { Navigation, Pagination } from "swiper";

//icons
import { FaQuoteLeft } from "react-icons/fa";

//next image
import Image from "next/image";

const TestimonialSlider = () => {
   return (
      <Swiper
         navigation={{
            enabled: true,
            hideOnClick: true,
         }}
         pagination={{
            clickable: true,
         }}
         loop={true}
         modules={[Navigation, Pagination]}
         className="h-[450px] sm:h-[400px] testimonial-slider"
      >
         {testimonialSlider.map((person, index) => {
            return (
               <SwiperSlide key={index}>
                  <div className="flex flex-col items-center md:flex-row gap-y-2 md:gap-x-8 h-full px-4 sm:px-16">
                     {/* avatar, name and position */}
                     <div className="w-full max-w-[240px] sm:max-w-[300px] flex flex-col justify-center items-center relative mx-auto xl:mx-0">
                        <div className="flex flex-col justify-center text-center">
                           {/* avatar */}
                           <div className="mb-1 mx-auto">
                              <Image
                                 src={person.image}
                                 width={80}
                                 height={80}
                                 alt={person.name}
                                 className="rounded-full sm:w-[100px] sm:h-[100px]"
                              />
                           </div>
                           {/* name */}
                           <div className="text-base sm:text-lg font-medium">
                              {person.name}
                           </div>
                           {/* position */}
                           <div className="text-[11px] sm:text-[12px] uppercase font-extralight tracking-widest">
                              {person.position}
                           </div>
                        </div>
                     </div>
                     {/* quote & message */}
                     <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 px-4 sm:px-0">
                        {/* quote icon */}
                        <div className="text-3xl sm:text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0 mb-1">
                           <FaQuoteLeft />
                        </div>
                        {/* message */}
                        <div className="text-sm sm:text-base xl:text-lg text-center md:text-left">
                           {person.message}
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
};

export default TestimonialSlider;
