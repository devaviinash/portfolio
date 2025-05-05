//links
import Link from "next/link";

//icons
import {
   RiLinkedinLine,
   RiGithubLine,
   RiInstagramLine,
   RiFacebookLine,
   RiTwitterLine,
   RiWhatsappLine,
   RiMailAddFill,
   RiMailFill,
   RiTwitterXLine,
} from "react-icons/ri";
const Socials = () => {
   return (
      <div className="flex items-center gap-x-5 text-lg">
         <Link
            href={"https://www.instagram.com/aviii_1122"}
            className="hover:text-accent transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
         >
            <RiInstagramLine />
         </Link>
         <Link
            href={"https://github.com/devaviinash"}
            className="hover:text-accent transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
         >
            <RiGithubLine />
         </Link>
         <Link
            href={"https://x.com/AviinashChavan"}
            className="hover:text-accent transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
         >
            <RiTwitterXLine />
         </Link>
         <Link
            href={"mailto:avinashchavan0436@gmail.com"}
            className="hover:text-accent transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
         >
            <RiMailFill />
         </Link>
      </div>
   );
};

export default Socials;
