//imoort swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
   RxCrop,
   RxPencil2,
   RxDesktop,
   RxReader,
   RxRocket,
   RxArrowTopRight,
} from "react-icons/rx";

//import required modules
import { FreeMode, Pagination } from "swiper";

//service data
const serviceData = [
   {
      icon: <RxCrop />,
      title: "Branding",
      description: "Build a trusted online identity that stands out",
   },
   {
      icon: <RxPencil2 />,
      title: "Design",
      description: "Receive stunning, user-friendly interfaces that engage",
   },
   {
      icon: <RxDesktop />,
      title: "Development",
      description: "Gain fast, responsive websites with React and Next.js",
   },
   {
      icon: <RxReader />,
      title: "Copywriting",
      description:
         "Capture your audience with clear & compelling content designed for impact",
   },
   {
      icon: <RxRocket />,
      title: "SEO",
      description:
         "Boost visibility through optimized websites driving traffic & growth effortlessly.",
   },
];

const ServiceSlider = () => {
   return (
      <Swiper
         breakpoints={{
            320: {
               slidesPerView: 1,
               spaceBetween: 15,
            },
            640: {
               slidesPerView: 3,
               spaceBetween: 15,
            },
         }}
         freeMode={true}
         pagination={{
            clickable: true,
         }}
         modules={[FreeMode, Pagination]}
         className="h-[240px] sm:h-[340px]"
      >
         {serviceData.map((item, index) => {
            return (
               <SwiperSlide key={index}>
                  <div className="bg-[rgba(65, 47, 123, 0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300">
                     {/* icon */}
                     <div className="text-4xl text-accent mb-4">
                        {item.icon}
                     </div>
                     {/* title & description */}
                     <div className="mb-8">
                        <div className="mb-2 text-lg">{item.title}</div>
                        <p className="max-w-[350px] leading-normal">
                           {item.description}
                        </p>
                     </div>
                     {/* arrow */}
                     <div className="text-3xl">
                        <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                     </div>
                  </div>
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
};

export default ServiceSlider;
