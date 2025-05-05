//next image
import Image from "next/image";

const Avatar = () => {
   return (
      <div className="hidden xl:flex xl:max-w-none">
         <Image
            src={"/avatar0.png"}
            width={737}
            height={678}
            alt=""
            className="translate=-z-0 w-full h-full custom-avatar-glow"
         />
      </div>
   );
};

export default Avatar;
