// data
const workSlides = {
   slides: [
      {
         images: [
            {
               title: "",
               path: "/thumb.png",
               t1: "3D T-Shirt",
               t2: "Designer",
            },
            {
               title: "title",
               path: "/thumb2.png",
               t1: "Mandir",
               t2: "Trust",
            },
            {
               title: "title",
               path: "/thumb3.png",
               t1: "Housai Global",
               t2: "Exim Company",
            },
            {
               title: "title",
               path: "/thumb4.png",
               t1: "Guru Nanak",
               t2: "Dental Clinic",
            },
         ],
      },
   ],
};

//imoort swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper";

//icons
import { BsArrowRepeat, BsArrowRight } from "react-icons/bs";

//next image
import Image from "next/image";

const WorkSlider = () => {
   const router = useRouter();

   const handleImageClick = () => {
      const isMobile = window.innerWidth < 1024;

      toast.success(
         "Please contact me through the contact form to get live project links!",
         {
            duration: 4000,
            position: isMobile ? "bottom-center" : "bottom-right",
            style: {
               background: "rgba(74, 34, 189, 0.9)",
               color: "#fff",
               borderRadius: "10px",
               marginBottom: isMobile ? "80px" : "20px", // Add more space from bottom on mobile
            },
         }
      );
      setTimeout(() => {
         router.push("/contact");
      }, 50);
   };

   return (
      <>
         <Toaster />
         <Swiper
            spaceBetween={10}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="h-[350px] sm:h-[550px]"
         >
            {workSlides.slides.map((slide, index) => {
               return (
                  <SwiperSlide key={index}>
                     <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                        {slide.images.map((image, index) => {
                           return (
                              <div
                                 key={image.path}
                                 className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                                 onClick={handleImageClick}
                              >
                                 <div
                                    className="flex items-center justify-center relative overflow-hidden group"
                                    key={index}
                                 >
                                    {/* images */}
                                    <Image
                                       src={image.path}
                                       width={500}
                                       height={400}
                                       alt=""
                                    />
                                    {/* overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                    {/* title */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 w-full text-center">
                                       <div className="flex items-center justify-center gap-x-2 text-[10px] sm:text-[13px] tracking-[0.2em]">
                                          {/* titlepart 1 */}
                                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100">
                                             {image.t1}
                                          </div>
                                          {/* titlepart 2 */}
                                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                             {image.t2}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </>
   );
};

export default WorkSlider;
