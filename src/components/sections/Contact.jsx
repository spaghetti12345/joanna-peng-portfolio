import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-xs mb-1">contact</h3>
        <h2 className="koulen-font text-4xl">LET'S CONNECT!</h2>
        
        <div className="flex gap-5">
          <button className="text-[10px] bg-white rounded-lg py-1 px-5 mt-5">
            Email
          </button>

          <button className="text-[10px] bg-white rounded-lg py-1 px-5 mt-5">
            LinkedIn
          </button>

          <button className="text-[10px] bg-white rounded-lg py-1 px-5 mt-5">
            Github
          </button>

          <button className="text-[10px] bg-white rounded-lg py-1 px-5 mt-5">
            Resume
          </button> 

        </div>
    

      </div>

    </section>
  );
};
