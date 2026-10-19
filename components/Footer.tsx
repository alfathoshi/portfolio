"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { socialMedia } from "@/data";
import { ContactDrawer } from "./ContactDrawer";
import {
  LiquidGlassCard,
  LiquidGlassPill,
  LiquidGlassButton,
} from "./ui/liquid-glass";

const Footer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <footer className="w-full pt-8 pb-12" id="contact">
      <LiquidGlassCard
        intensity="medium"
        className="p-8 sm:p-12 md:p-14 flex flex-col items-center text-center relative overflow-hidden"
      >
        {/* Subtle ambient glow inside CTA card */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-56 w-[70%] rounded-full bg-linear-to-t from-[#0071e3]/15 via-sky-400/5 to-transparent dark:from-[#0a84ff]/20 blur-3xl"
        />

        <LiquidGlassPill className="mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#0a84ff]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
            What&apos;s Next
          </span>
        </LiquidGlassPill>

        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] max-w-2xl leading-[1.1]">
          Ready to build your next mobile product?
        </h2>

        <p className="text-sm sm:text-base text-[#6e6e73] dark:text-[#98989d] mt-4 max-w-md leading-relaxed">
          Reach out today to discuss iOS engineering, mobile app architecture,
          or product collaboration.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <LiquidGlassButton
            variant="primary"
            onClick={() => setIsDrawerOpen(true)}
            className="px-6 py-3 text-sm"
          >
            <span>Let&apos;s Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </LiquidGlassButton>

          <a href="mailto:alfathbintangmuhammad@gmail.com">
            <LiquidGlassButton variant="glass" className="px-5 py-3 text-sm">
              <Mail className="w-4 h-4 text-[#0071e3] dark:text-[#0a84ff]" />
              <span>Email Directly</span>
            </LiquidGlassButton>
          </a>
        </div>
      </LiquidGlassCard>

      <ContactDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <div className="flex mt-8 flex-col sm:flex-row gap-4 justify-between items-center px-2">
        <p className="text-xs sm:text-sm text-[#6e6e73] dark:text-[#86868b]">
          Copyright © {new Date().getFullYear()} Muhammad Bintang Al-Fath. All
          rights reserved.
        </p>

        <div className="flex items-center gap-2.5">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Social Media"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 dark:bg-[#1c1c1e]/75 backdrop-blur-xl border border-black/[0.07] dark:border-white/[0.12] hover:scale-105 transition-all"
            >
              <div
                className="w-4 h-4 bg-[#1d1d1f] dark:bg-[#f5f5f7]"
                style={{
                  WebkitMaskImage: `url(${profile.img})`,
                  maskImage: `url(${profile.img})`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
