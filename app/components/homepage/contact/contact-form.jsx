"use client";

import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ email: false, required: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError((prev) => ({ ...prev, required: true }));
      setIsLoading(false);
      toast.error("Please fill in all required fields!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== "string" || !emailRegex.test(email)) {
      setError((prev) => ({ ...prev, email: true }));
      setIsLoading(false);
      toast.error("Please provide a valid email address!");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((response) => response.json());

      if (res.success) {
        toast.success("Message sent successfully!");
        e.target.reset();
      } else {
        toast.error("Something went wrong! Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
      setError({ email: false, required: false });
    }
  };

  const checkRequired = (e) => {
    if (e.target.value) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const checkEmail = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError((prev) => ({ ...prev, email: !emailRegex.test(email) }));
  };

  return (
    <div>
      <p className="section-kicker mb-4">Let&apos;s Build Something</p>
      <div className="panel-card max-w-3xl p-4 lg:p-6">
        <p className="text-sm leading-7 text-slate-300">
          {
            "I am currently open to new projects and would love to hear about any opportunities you have in mind. Feel free to reach out to me at any time. I'm always available to discuss how I can contribute to your next venture."
          }
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium uppercase tracking-[0.12em] text-slate-300"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-3 py-2 text-slate-100 outline-0 transition-all duration-300 focus:border-sky-300"
              type="text"
              maxLength="100"
              required={true}
              placeholder="Your Name"
              onBlur={checkRequired}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium uppercase tracking-[0.12em] text-slate-300"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-3 py-2 text-slate-100 outline-0 transition-all duration-300 focus:border-sky-300"
              type="email"
              maxLength="100"
              required={true}
              placeholder="Your Email"
              onBlur={(e) => {
                checkRequired(e);
                checkEmail(e);
              }}
            />
            {error.email && (
              <p className="text-sm text-red-400">Please provide a valid email!</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium uppercase tracking-[0.12em] text-slate-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-3 py-2 text-slate-100 outline-0 transition-all duration-300 focus:border-sky-300"
              maxLength="500"
              required={true}
              placeholder="Your Message"
              rows="4"
              onBlur={checkRequired}
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            {error.required && (
              <p className="text-sm text-red-400">All fields are required!</p>
            )}

            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg border border-teal-300/40 bg-teal-300/10 px-6 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.13em] text-teal-200 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-300/20 md:px-10 md:text-sm"
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
