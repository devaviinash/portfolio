//components
import Circles from "../../components/Circles";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

const Contact = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "phone") {
         // Only allow numbers, spaces, and basic phone number characters
         const formattedValue = value.replace(/[^\d\s+()-]/g, "");
         setFormData((prev) => ({
            ...prev,
            [name]: formattedValue,
         }));
      } else {
         setFormData((prev) => ({
            ...prev,
            [name]: value,
         }));
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      // Validate phone number length
      if (formData.phone.replace(/[^\d]/g, "").length < 10) {
         toast.error("Please enter a valid phone number (at least 10 digits)", {
            duration: 4000,
            position:
               window.innerWidth < 1024 ? "bottom-center" : "bottom-right",
            style: {
               background: "#ef4444",
               color: "#fff",
               borderRadius: "10px",
               marginBottom: window.innerWidth < 1024 ? "80px" : "20px",
            },
         });
         return;
      }

      setIsSubmitting(true);

      const loadingToast = toast.loading("Sending your message...", {
         position: window.innerWidth < 1024 ? "bottom-center" : "bottom-right",
         style: {
            background: "rgba(74, 34, 189, 0.9)",
            color: "#fff",
            borderRadius: "10px",
            marginBottom: window.innerWidth < 1024 ? "80px" : "20px",
         },
      });

      try {
         const response = await fetch("/api/send", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         const data = await response.json();
         if (response.ok) {
            toast.success(
               "Message sent successfully! I will get back to you soon.",
               {
                  duration: 4000,
                  position:
                     window.innerWidth < 1024
                        ? "bottom-center"
                        : "bottom-right",
                  style: {
                     background: "rgba(74, 34, 189, 0.9)",
                     color: "#fff",
                     borderRadius: "10px",
                     marginBottom: window.innerWidth < 1024 ? "80px" : "20px",
                  },
               }
            );
            setFormData({
               name: "",
               email: "",
               phone: "",
               subject: "",
               message: "",
            });
         } else {
            toast.error("Failed to send message. Please try again.", {
               duration: 4000,
               position:
                  window.innerWidth < 1024 ? "bottom-center" : "bottom-right",
               style: {
                  background: "#ef4444",
                  color: "#fff",
                  borderRadius: "10px",
                  marginBottom: window.innerWidth < 1024 ? "80px" : "20px",
               },
            });
         }
      } catch (error) {
         toast.error("Failed to send message. Please try again.", {
            duration: 4000,
            position:
               window.innerWidth < 1024 ? "bottom-center" : "bottom-right",
            style: {
               background: "#ef4444",
               color: "#fff",
               borderRadius: "10px",
               marginBottom: window.innerWidth < 1024 ? "80px" : "20px",
            },
         });
      } finally {
         toast.dismiss(loadingToast);
         setIsSubmitting(false);
      }
   };

   return (
      <div className="h-full flex bg-primary/30">
         <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
            <div className="flex flex-col gap-y-2 w-full max-w-[700px]">
               <h2 className="h2 text-center mb-2">
                  Lets <span className="text-accent">connect.</span>
               </h2>
               <form
                  onSubmit={handleSubmit}
                  className="flex-1 flex flex-col gap-6 w-full mx-auto"
               >
                  <div className="flex gap-x-6 w-full">
                     <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="input"
                        required
                     />
                     <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="input"
                        required
                     />
                  </div>
                  <div className="flex gap-x-6 w-full">
                     <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        pattern="[0-9\s+()-]{10,}"
                        title="Please enter a valid phone number"
                        className="input"
                        required
                     />
                  </div>
                  <textarea
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="Message"
                     className="textarea"
                     required
                  ></textarea>
                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                  >
                     <span className="group-hover:-translate-y-[150%] group:hover:opacity-0 transition-all duration-500">
                        {isSubmitting ? "Sending..." : "Lets Talk"}
                     </span>
                     <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;
