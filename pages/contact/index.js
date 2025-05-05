//components
import Circles from "../../components/Circles";
import { useState } from "react";

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
      subject: "",
      message: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState("");

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus("");

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
            setSubmitStatus("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
         } else {
            setSubmitStatus("Failed to send message. Please try again.");
         }
      } catch (error) {
         setSubmitStatus("Failed to send message. Please try again.");
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div className="hfull flex bg-primary/30">
         <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
            <div className="flex flex-col w-full max-w-[700px]">
               <h2 className="h2 text-center mb-2">
                  Lets <span className="text-accent">connect.</span>
               </h2>
               {submitStatus && (
                  <p
                     className={`text-center mb-4 ${submitStatus.includes("success") ? "text-green-500" : "text-red-500"}`}
                  >
                     {submitStatus}
                  </p>
               )}
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
                        placeholder="name"
                        className="input"
                        required
                     />
                     <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email"
                        className="input"
                        required
                     />
                  </div>
                  <input
                     type="text"
                     name="subject"
                     value={formData.subject}
                     onChange={handleChange}
                     placeholder="subject"
                     className="input"
                     required
                  />
                  <textarea
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="message"
                     className="textarea"
                     required
                  ></textarea>
                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                  >
                     <span className="group-hover:-translate-y-[120%] group:hover:opacity-0 transition-all duration-500">
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
