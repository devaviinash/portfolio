//links
import Link from "next/link";

//icons
import {
   RiLinkedinLine,
   RiGithubLine,
   RiInstagramLine,
   RiFacebookLine,
   RiTwitterLine,
} from "react-icons/ri";
const Socials = () => {
   return (
      <div className="flex items-center gap-x-5 text-lg">
         <Link
            href={"https://www.instagram.com/aanjali_1397/"}
            className="hover:text-accent transition-all duration-300"
         >
            <RiInstagramLine />
         </Link>
         <Link
            href={""}
            className="hover:text-accent transition-all duration-300"
         >
            <RiFacebookLine />
         </Link>
         <Link
            href={""}
            className="hover:text-accent transition-all duration-300"
         >
            <RiLinkedinLine />
         </Link>
         <Link
            href={"https://github.com/Anjalirana341"}
            className="hover:text-accent transition-all duration-300"
         >
            <RiGithubLine />
         </Link>
         <Link
            href={""}
            className="hover:text-accent transition-all duration-300"
         >
            <RiTwitterLine />
         </Link>
      </div>
   );
};

export default Socials;
