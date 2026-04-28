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
      {/* ================= SECTION ================= */}
      <section
        id="contact"
        className=" xs:px-5 sm:py-10 md:mt-[20px] md:mb-[20px] "
      >
        {/* ================= CONTAINER ================= */}
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 md:px-8">
          {/* ================= HEADER ================= */}
          <div className="mb-10 max-w-2xl  sm:mb-12 text-left">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white sm:px-5">
              Contact
            </span>

            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Let’s work together
            </h2>

            <p className="mt-4 text-base text-gray-400 sm:text-lg">
              Have a project in mind or just want to connect? I’m open to remote
              opportunities.
            </p>
          </div>

          {/* ================= MAIN GRID ================= */}
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            {/* ================= LEFT SIDE ================= */}
            <div className="space-y-5">
              {/* EMAIL CARD */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Email</p>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-3 flex items-center gap-3 text-base font-semibold text-white hover:text-gray-300"
                >
                  <FaEnvelope className="text-gray-400" />
                  {CONTACT_EMAIL}
                </a>
              </div>

              {/* LOCATION CARD */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Location</p>

                <p className="mt-3 flex items-center gap-3 text-base font-semibold text-white">
                  <FaLocationDot className="text-gray-400" />
                  Cairo, Egypt | Remote Ready
                </p>
              </div>

              {/* ================= SOCIAL BUTTONS  ================= */}

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white transition hover:-translate-y-[1px] hover:bg-white/10"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white transition hover:-translate-y-[1px] hover:bg-white/10"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* ================= FORM ================= */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-2 sm:p-4"
            >
              {/* NAME */}
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-1 focus:ring-white/20"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-1 focus:ring-white/20"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="min-h-[140px] w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-1 focus:ring-white/20"
              />

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {/* STATUS */}
              {status && (
                <p className="text-center text-sm text-gray-300">{status}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </SectionAnimation>
  );
}

export default Contact;
