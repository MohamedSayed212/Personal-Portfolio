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

function Contact({ t }) {
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
        setStatus(t.form.success);
        setIsSending(false);
        formRef.current.reset();
      })
      .catch(() => {
        setStatus(t.form.error);
        setIsSending(false);
      });
  };

  return (
    <SectionAnimation
      id="contact"
      className="xs:px-5 sm:py-5 md:mt-[10px] md:mb-[20px]"
    >
      {/* ================= CONTAINER ================= */}
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 md:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-4 max-w-2xl text-start sm:mb-6">
          <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:px-5">
            {t.badge}
          </span>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-5">
            {/* WHATSAPP CARD — fastest path, shown before everything else */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-gray-400">{t.whatsappLabel}</p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={WHATSAPP_ARIA}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-soft px-4 py-3 text-sm font-bold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:text-base"
              >
                <FaWhatsapp size={20} aria-hidden="true" className="shrink-0" />
                {t.whatsappCta}
              </a>

              {/* Phone numbers are always read left-to-right, even in Arabic. */}
              <a
                href={WHATSAPP_TEL}
                dir="ltr"
                className="mt-3 flex items-center gap-3 rounded text-base font-semibold text-white hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rtl:justify-end"
              >
                <FaPhone className="text-gray-400" aria-hidden="true" />
                {WHATSAPP_DISPLAY}
              </a>

              <p className="mt-2 text-xs text-gray-500">{t.whatsappNote}</p>
            </div>

            {/* EMAIL CARD */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-gray-400">{t.emailLabel}</p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                dir="ltr"
                className="mt-3 flex items-center gap-3 break-all text-base font-semibold text-white hover:text-gray-300 rtl:justify-end"
              >
                <FaEnvelope className="text-gray-400" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* LOCATION CARD */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-gray-400">{t.locationLabel}</p>

              <p className="mt-3 flex items-center gap-3 text-base font-semibold text-white">
                <FaLocationDot className="text-gray-400" aria-hidden="true" />
                {t.locationValue}
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
                {t.github}
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white transition hover:-translate-y-[1px] hover:bg-white/10"
              >
                <FaLinkedin aria-hidden="true" />
                {t.linkedin}
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
              placeholder={t.form.name}
              required
              className={FIELD_CLASS}
            />

            {/* EMAIL */}
            <input
              type="email"
              name="user_email"
              placeholder={t.form.email}
              required
              className={FIELD_CLASS}
            />

            {/* REASON — one form serves both audiences instead of splitting the
                site into separate "hire me" and "recruit me" flows.
                NOTE: the EmailJS template needs a {{reason}} variable added for
                this value to appear in the delivered email. */}
            <select
              name="reason"
              required
              defaultValue=""
              aria-label={t.form.reasonLabel}
              className={`${FIELD_CLASS} appearance-none`}
            >
              <option value="" disabled>
                {t.form.reasonLabel}
              </option>
              <option value="job">{t.form.reasonJob}</option>
              <option value="freelance">{t.form.reasonFreelance}</option>
              <option value="other">{t.form.reasonOther}</option>
            </select>

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="5"
              placeholder={t.form.message}
              required
              className="min-h-[140px] w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-gray-500 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-xl bg-gradient-to-r from-accent to-accent-soft px-6 py-3 font-bold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:opacity-60"
            >
              {isSending ? t.form.sending : t.form.send}
            </button>

            {/* STATUS */}
            {status && (
              <p className="text-center text-sm text-gray-300">{status}</p>
            )}
          </form>
        </div>
      </div>
    </SectionAnimation>
  );
}

export default Contact;
