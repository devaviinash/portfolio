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
                  className="lg:hidden z-50 p-1"
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
                  className={`fixed inset-0 bg-black/90 z-40 lg:hidden transition-all duration-300 ${
                     mobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                  }`}
               >
                  <div className="flex flex-col items-center justify-center h-full">
                     <div className="mb-8 scale-150">
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
