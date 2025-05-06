// next image
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import { useState } from "react";

const Header = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   return (
      <header className="absolute z-30 w-full flex items-start px-4 md:px-16 xl:px-0 xl:h-[90px]">
         <div className="container mx-auto">
            <div className="flex flex-row justify-between items-center py-8 md:py-8">
               {/* logo */}
               <Link href={"/"}>
                  <Image
                     src={"/brand1.png"}
                     width={160}
                     height={75}
                     alt="logo"
                     className="md:w-[220px] md:h-[75px]"
                     priority={true}
                  />
               </Link>

               {/* hamburger menu for mobile */}
               <button
                  className="lg:hidden z-50 p-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               >
                  <div
                     className={`w-6 h-0.5 bg-white transition-all duration-300 mb-1 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                  ></div>
                  <div
                     className={`w-6 h-0.5 bg-white transition-all duration-300 mb-1 ${mobileMenuOpen ? "opacity-0" : ""}`}
                  ></div>
                  <div
                     className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                  ></div>
               </button>

               {/* desktop socials */}
               <div className="hidden lg:block">
                  <Socials />
               </div>

               {/* mobile menu overlay */}
               <div
                  className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-500 ease-in-out backdrop-blur-md bg-gradient-to-b from-indigo-950/90 to-black/50 ${
                     mobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                  }`}
               >
                  <div className="flex flex-col items-center justify-center h-full px-6">
                     {/* avatar circle */}
                     <div className="flex flex-col items-center justify-center mb-8">
                        <div className="relative w-44 h-44 rounded-full ring-2 ring-red-500 shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-105">
                           <Image
                              src="/mobile-avatar.jpg"
                              alt="avatar"
                              layout="fill"
                              className="object-cover"
                           />
                        </div>
                        {/* name display */}
                        <div className="text-center mt-6 font-[Outfit]">
                           <h2 className="text-3xl font-medium tracking-wide text-white opacity-90 uppercase">
                              Avinash Chavan
                           </h2>
                           <div className="mx-auto mt-3 w-16 h-1 bg-red-600 rounded-full"></div>
                        </div>
                     </div>
                     <div className="mb-10 scale-125">
                        <Socials />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
