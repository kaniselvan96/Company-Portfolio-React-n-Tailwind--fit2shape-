import React, { useEffect } from "react";
import {
  getInTouch,
  subTitleContacts,
  sendMessage,
  name,
  email,
  contactNumber,
  message,
} from "../Data";
import AOS from "aos";
import ContactImg from "../images/img_contact.png";
import emailjs from "@emailjs/browser";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_75xvbbu",
        "template_c1hehdh",
        e.target,
        "dHfh0v24pwwC3DVJg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="antialiased bg-white">
      <div
        data-aos="fade-up"
        className="flex w-full min-h-screen justify-center items-center"
      >
        <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-6 dark:bg-gray-800 w-full max-w-[1100px] p-8 rounded-xl shadow-lg text-white">
          <div className="flex flex-col space-y-10 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">{getInTouch}</h1>
              <p className="pt-2 text-cyan-100 text-sm">{subTitleContacts}</p>
            </div>

            <div className="flex flex-col gap-1  ">
              <div className="hidden md:block order-last justify-center h-[400px] w-[400px] m-auto">
                <img src={ContactImg} alt="contactImg" />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100"
            className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-150"
          >
            <form
              action=""
              className="flex flex-col space-y-4"
              onSubmit={sendEmail}
            >
              <div>
                <label className="text-sm">{name}</label>
                <input
                  type="text"
                  placeholder={name}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  name="name"
                />
              </div>
              <div>
                <label className="text-sm">{email}</label>
                <input
                  type="email"
                  placeholder={email}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  name="email"
                />
              </div>
              <div>
                <label className="text-sm">{contactNumber}</label>
                <input
                  type="tel"
                  placeholder={contactNumber}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  name="contact"
                />
              </div>
              <div>
                <label className="text-sm">{message}</label>
                <textarea
                  placeholder={message}
                  rows="4"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  name="message"
                />
              </div>
              <button className="inline-block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 self-end  hover:bg-orange-600 bg-orange-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                {sendMessage}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
