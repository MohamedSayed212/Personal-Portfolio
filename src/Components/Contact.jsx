"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SectionAnimation from "./SectionAnimation";
import Container from "./Container";
import {
  WHATSAPP_URL,
  WHATSAPP_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_ARIA,
} from "../constants/contact";

const CONTACT_EMAIL = "mohamedsayed.dev01@gmail.com";
const GITHUB_URL = "https://github.com/MohamedSayed212";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohamed-sayed-dev/";

const EMAILJS_SERVICE_ID = "service_s34g4ue";
const EMAILJS_TEMPLATE_ID = "template_f4idfxp";
const EMAILJS_PUBLIC_KEY = "YJwhF4O0_KFjgmmxV";

const FIELD_CLASS =
  "w-full rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-gray-500 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40";

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
    <SectionAnimation
      id="contact"
      className="sm:py-5 md:mb-[20px] md:mt-[10px]"
    >
      {/* ================= CONTAINER ================= */}
      <Container>
        {/* ================= HEADER ================= */}
        <div className="mb-4 max-w-2xl text-start sm:mb-6">
          <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:px-5">
            Contact
          </span>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-5">
            {/* WHATSAPP CARD */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-gray-400">WhatsApp</p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={WHATSAPP_ARIA}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-[#0e1116] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:text-base"
              >
                <FaWhatsapp size={20} aria-hidden="true" className="shrink-0" />
                Message on WhatsApp
              </a>

              <a
                href={WHATSAPP_TEL}
                className="mt-3 flex items-center gap-3 rounded text-base font-semibold text-white hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <FaPhone
                  className="-scale-x-100 text-gray-400"
                  aria-hidden="true"
                />
                {WHATSAPP_DISPLAY}
              </a>

              <p className="mt-2 text-xs text-gray-500">Fastest way to reach me</p>
            </div>

            {/* EMAIL CARD */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-gray-400">Email</p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 flex items-center gap-3 break-all text-base font-semibold text-white hover:text-gray-300"
              >
                <FaEnvelope className="text-gray-400" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* LOCATION CARD */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-gray-400">Location</p>

              <p className="mt-3 flex items-center gap-3 text-base font-semibold text-white">
                <FaLocationDot className="text-gray-400" aria-hidden="true" />
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
                <FaGithub aria-hidden="true" />
                GitHub
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white transition hover:-translate-y-[1px] hover:bg-white/10"
              >
                <FaLinkedin aria-hidden="true" />
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
              className={FIELD_CLASS}
            />

            {/* EMAIL */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className={FIELD_CLASS}
            />

            {/* REASON */}
            <select
              name="reason"
              required
              defaultValue=""
              aria-label="What’s this about?"
              className={`${FIELD_CLASS} appearance-none`}
            >
              <option value="" disabled>
                What’s this about?
              </option>
              <option value="job">Job opportunity</option>
              <option value="freelance">Freelance project</option>
              <option value="other">Something else</option>
            </select>

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="min-h-[140px] w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-gray-500 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-xl bg-accent px-6 py-3 font-semibold text-[#0e1116] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS */}
            {status && (
              <p className="text-center text-sm text-gray-300">{status}</p>
            )}
          </form>
        </div>
      </Container>
    </SectionAnimation>
  );
}

export default Contact;

