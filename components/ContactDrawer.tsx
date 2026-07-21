"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconX, IconSend, IconCheck } from "@tabler/icons-react";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer = ({ isOpen, onClose }: ContactDrawerProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      // Simulate sending email to backend if no key is configured
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        console.log("Form Submitted (Simulation Mode - No NEXT_PUBLIC_WEB3FORMS_KEY found):", formData);
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Auto close after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.subject}`,
          replyto: formData.email,
          from_name: formData.name,
          "Message Subject": formData.subject, // Sent as a custom key so it displays in the email body details table
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        setErrors({ submit: result.message || "Failed to send message." });
      }
    } catch (error) {
      setErrors({ submit: "An error occurred while sending the message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
          />

          {/* Sliding Contact Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-55 h-screen w-full max-w-md border-l border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950 p-6 shadow-2xl flex flex-col md:p-8 text-neutral-900 dark:text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 dark:border-white/10 pb-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold bg-linear-to-r from-primary to-[#b8d600] bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  Fill out the form below or email me directly at{" "}
                  <a href="mailto:alfathbintangmuhammad@gmail.com" className="text-primary hover:underline font-semibold">
                    alfathbintangmuhammad@gmail.com
                  </a>
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                aria-label="Close panel"
              >
                <IconX size={24} />
              </button>
            </div>

            {/* Content / Form area */}
            <div className="flex-1 overflow-y-auto pr-1">
              {isSuccess ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center px-4"
                >
                  <div className="w-16 h-16 bg-primary/20 text-primary border border-primary rounded-full flex items-center justify-center mb-6">
                    <IconCheck size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 max-w-xs">
                    Thank you for reaching out! I have received your message and will get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5 p-1">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                      className={`w-full rounded-lg border bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-neutral-200 dark:border-white/10 focus:border-transparent focus:ring-primary"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      disabled={isSubmitting}
                      className={`w-full rounded-lg border bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-neutral-200 dark:border-white/10 focus:border-transparent focus:ring-primary"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      disabled={isSubmitting}
                      className={`w-full rounded-lg border bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? "border-red-500 focus:ring-red-500"
                          : "border-neutral-200 dark:border-white/10 focus:border-transparent focus:ring-primary"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hey, I'd love to chat about building a mobile app..."
                      disabled={isSubmitting}
                      className={`w-full rounded-lg border bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition focus:outline-none focus:ring-2 resize-none ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-neutral-200 dark:border-white/10 focus:border-transparent focus:ring-primary"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {errors.submit && (
                    <p className="text-sm text-red-500 text-center font-medium bg-red-500/10 border border-red-500/20 py-2.5 rounded-lg">
                      {errors.submit}
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative flex h-12 items-center justify-center overflow-hidden rounded-full p-px text-sm font-medium focus:outline-none disabled:opacity-50 hover:opacity-95 transition"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E1FF01_0%,#000000_50%,#E1FF01_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-7 backdrop-blur-3xl transition text-white dark:text-black">
                        {isSubmitting ? (
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        ) : (
                          <>
                            Send Message
                            <IconSend size={18} />
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
