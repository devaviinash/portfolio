import "../styles/globals.css";

//components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

//router
import { useRouter } from "next/router";

//frmer motion
import { AnimatePresence, motion } from "framer-motion";

//toast notifications
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
   const router = useRouter();
   return (
      <Layout>
         <Toaster />
         <AnimatePresence mode="wait">
            <motion.div key={router.route} className="h-full">
               <Transition />
               <Component {...pageProps} />
            </motion.div>
         </AnimatePresence>
      </Layout>
   );
}

export default MyApp;
