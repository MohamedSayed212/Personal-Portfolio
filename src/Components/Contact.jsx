import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SectionAnimation from "./SectionAnimation";

const CONTACT_EMAIL = "mohamedsayed.dev01@gmail.com";
const GITHUB_URL = "https://github.com/MohamedSayed212";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohamed-sayed-dev/";

const EMAILJS_SERVICE_ID = "service_s34g4ue";
const EMAILJS_TEMPLATE_ID = "template_f4idfxp";
const EMAILJS_PUBLIC_KEY = "YJwhF4O0_KFjgmmxV";

function Contact() {
  const formRef = useRef(null);

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Send form data to your Gmail using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("Message sent successfully ✅");
        setIsSending(false);
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again ❌");
        setIsSending(false);
      });
  };

  return (
    <SectionAnimation>
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white sm:px-5">
              Contact
            </span>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Let’s work together
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              Have a project in mind or just want to connect? Feel free to reach
              out. I’m open to remote opportunities and collaborations.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            {/* LEFT SIDE: Contact info */}
            <div className="space-y-5 sm:space-y-6">
              {/* Email card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <p className="text-sm text-gray-400">Email</p>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-3 flex items-center gap-3 break-all text-base font-semibold text-white transition hover:text-gray-300 sm:text-lg"
                >
                  <FaEnvelope className="shrink-0 text-gray-400" />
                  {CONTACT_EMAIL}
                </a>
              </div>

              {/* Location card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <p className="text-sm text-gray-400">Location</p>

                <p className="mt-3 flex items-center gap-3 text-base font-semibold text-white sm:text-lg">
                  <FaLocationDot className="shrink-0 text-gray-400" />
                  Cairo, Egypt | Open to Remote Opportunities
                </p>
              </div>

              {/* Social links */}
              <div className="grid gap-3 xs:grid-cols-2 lg:max-w-[360px]">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-gray-300 transition hover:-translate-y-[2px] hover:bg-white/10 hover:text-white sm:p-5 sm:text-base"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-gray-300 transition hover:-translate-y-[2px] hover:bg-white/10 hover:text-white sm:p-5 sm:text-base"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Contact form */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              {/* Name input */}
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-white/30 focus:ring-1 focus:ring-white/20 sm:py-4"
              />

              {/* Email input */}
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-white/30 focus:ring-1 focus:ring-white/20 sm:py-4"
              />

              {/* Message input */}
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="min-h-[150px] w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-white/30 focus:ring-1 focus:ring-white/20"
              />

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.01] hover:opacity-90 disabled:cursor-not-allowed disabled:scale-100 disabled:opacity-60 sm:py-4"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {/* Status message */}
              {status && (
                <p className="text-center text-sm font-medium text-gray-300">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </SectionAnimation>
  );
}

export default Contact;
