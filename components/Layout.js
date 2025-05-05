import { Sora } from "@next/font/google";

//font settings
const sora = Sora({
   subsets: ["latin"],
   variable: "--font-sora",
   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

//components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

const Layout = ({ children }) => {
   return (
      <div
         className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative lg:px-0`}
      >
         <TopLeftImg />
         <Nav />
         <Header />
         {children}
         {/* Large screen footer */}
         <div className="hidden sm:block fixed bottom-4 left-0 right-0 text-center text-xs text-white/30 pointer-events-none select-none">
            {new Date().getFullYear()} — Built by Avinash Chavan
         </div>
         {/* Small screen footer */}
         <div className="sm:hidden fixed bottom-[80px] left-0 right-0 text-center text-xs text-white/30 pointer-events-none select-none py-2">
            {new Date().getFullYear()} — Built by Avinash Chavan
         </div>
      </div>
   );
};

export default Layout;
