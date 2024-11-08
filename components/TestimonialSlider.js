// testimonial slider data
const testimonialSlider = [
   {
      image: "/t-avt-1.png",
      name: "Anne Smith",
      position: "",
      message:
         "Her analytical acumen and innovative problem-solving make her a standout in data science. She has an exceptional ability to extract meaningful insights from complex datasets, driving impactful results.",
   },
   {
      image: "/t-avt-2.png",
      name: "Jane Doe",
      position: "",
      message:
         "Her mastery of data modeling and visualization is complemented by her strategic approach to tackling challenges. Her commitment to excellence and her enthusiasm for uncovering actionable insights make her an invaluable asset to any team",
   },
   {
      image: "/t-avt-3.png",
      name: "Jhon Doe",
      position: "",
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
         navigation={true}
         pagination={{
            clickable: true,
         }}
         modules={[Navigation, Pagination]}
         className="h-[400px]"
      >
         {testimonialSlider.map((person, index) => {
            return (
               <SwiperSlide key={index}>
                  <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
                     {/* avatar, name and position */}
                     <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                        <div className="flex flex-col justify-center text-center">
                           {/* avatar */}
                           <div className="mb-2 mx-auto">
                              <Image
                                 src={person.image}
                                 width={100}
                                 height={100}
                                 alt=""
                                 className="rounded-full"
                              />
                           </div>
                           {/* name */}
                           <div className="text-lg">{person.name}</div>
                           {/* postion */}
                           <div className="text-[12px] uppercase font-extralight tracking-widest">
                              {person.position}
                           </div>
                        </div>
                     </div>
                     {/* quote & message */}
                     <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                        {/* quote icon */}
                        <div className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0">
                           <FaQuoteLeft />
                        </div>
                        {/* message */}
                        <div className="xl:text-lg text-center md-text-left ">
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
