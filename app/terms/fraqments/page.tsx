import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const metadata: Metadata = {
  title: "Terms of Service | fraqments",
  description:
    "Terms of Service governing the use of fraqments, an iOS spatial memory capture application.",
};

export default function FraqmentsTermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-black-100 text-neutral-900 dark:text-white font-sans flex flex-col transition-colors duration-300">
      <main className="mx-auto max-w-3xl px-6 py-16 flex-1 w-full">
        {/* Top Header with App Branding and Theme Toggle */}
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3 rounded-lg group">
            <div className="relative size-11 rounded-[11px] overflow-hidden shadow-sm">
              <Image
                src="/fragments-icon-light.webp"
                alt="fraqments Icon"
                width={44}
                height={44}
                className="object-cover size-full dark:hidden"
                priority
              />
              <Image
                src="/fragments-icon-dark.webp"
                alt="fraqments Icon"
                width={44}
                height={44}
                className="object-cover size-full hidden dark:block"
                priority
              />
            </div>
            <span className="text-lg font-bold tracking-[0.18em] text-neutral-900 dark:text-white lowercase">
              fraqments
            </span>
          </Link>
          <ThemeToggle />
        </div>

        <h1 className="mt-10 text-3xl font-bold tracking-[-0.03em] sm:text-4xl text-neutral-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: November 2026
        </p>

        <div className="mt-10 space-y-8 border-t border-neutral-200 dark:border-neutral-800 pt-10 leading-relaxed text-neutral-600 dark:text-neutral-300">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              1. Introduction &amp; Acceptance of Terms
            </h2>
            <p>
              Welcome to <strong>fraqments</strong> (&quot;the App&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), an iOS mobile application developed and operated by <strong>Alfathoshi</strong>. fraqments is designed to help you capture, reflect upon, and share everyday life moments through spatial photos, videos, audio memos, and interactive notes.
            </p>
            <p>
              By downloading, installing, accessing, or using fraqments, you agree to be bound by these Terms of Service (&quot;Terms&quot;) and our{" "}
              <Link
                href="/privacy/fraqments"
                className="underline underline-offset-4 text-primary hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              . If you do not agree to these Terms, please do not download, install, or use the App.
            </p>
            <p>
              For any questions regarding these Terms, you can contact us directly at{" "}
              <a
                href="mailto:fraqmentsapp@gmail.com"
                className="underline underline-offset-4 text-primary hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
              >
                fraqmentsapp@gmail.com
              </a>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              2. User Accounts &amp; Operation Modes
            </h2>
            <p>
              fraqments provides two flexible operational modes to give you full control over privacy and collaboration:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">Guest Mode (Local-First):</strong> You can use fraqments without creating an account or authenticating. In Guest Mode, all captured personal fragments, memory spheres, and notes are processed and stored exclusively on your device. No cloud synchronization or backend profile is created.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Authenticated Accounts:</strong> To unlock collaborative shared rooms, multi-user moment sharing, and cross-session synchronization, you can sign in using <em>Sign in with Apple</em> and create a unique signature (username/display name).
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Account Security &amp; Responsibility:</strong> You are responsible for safeguarding your Apple ID credentials and maintaining security over your device. You agree to accept full responsibility for all activities and content published under your account credentials and unique signature.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              3. Subscriptions &amp; In-App Purchases (Fraqments Pro)
            </h2>
            <p>
              fraqments offers both free features and enhanced premium capabilities under a freemium model:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">Free Tier:</strong> Provides access to core spatial memory capture with defined functional limits (such as limits on standalone fragments, active personal moments, and participant capacity or active counts for collaborative rooms).
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Fraqments Pro:</strong> An optional premium auto-renewing subscription tier processed via Apple StoreKit that provides elevated or unlimited access to moment spheres, collaborative rooms, enhanced audio/video quality, and exclusive themes or features.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Billing &amp; Auto-Renewal:</strong> Payment is charged directly to your Apple ID account at confirmation of purchase. Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing cycle. Your account will be charged for renewal within 24 hours prior to the end of the current period.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Managing Subscriptions &amp; Cancellations:</strong> You can manage or cancel your subscription at any time by going to your device&apos;s <strong>Settings &gt; [Your Apple ID] &gt; Subscriptions</strong>. If you cancel, your Pro access remains active until the end of your current paid billing period.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Refunds:</strong> All purchases and refund requests are handled exclusively by Apple in accordance with the Apple Media Services Terms and Conditions. We cannot issue refunds directly.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              4. User Content &amp; Intellectual Property
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">Your Ownership:</strong> You retain complete, unrestricted ownership and all intellectual property rights to the photos, videos, audio memos, text notes, and memory spheres you create within fraqments (&quot;User Content&quot;). We do not claim any ownership over your content.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Local-First Architecture:</strong> Personal moments are saved locally using SwiftData (SQLite) on your device. We do not inspect, monetize, train AI models on, or transmit your private on-device moments to our servers.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Collaborative Shared Rooms:</strong> When you share fragments or join a collaborative room, you grant fraqments a worldwide, non-exclusive, royalty-free license solely to host, transmit, cache, and display that content to authorized participants of that specific shared room.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Backend Infrastructure:</strong> Shared rooms and synchronization leverage secure cloud infrastructure (including Apple CloudKit and Supabase) solely to facilitate real-time collaboration and secure encrypted asset transfer.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              5. Acceptable Use &amp; Prohibited Conduct
            </h2>
            <p>
              To maintain a safe, respectful environment, you agree not to use fraqments to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Upload, store, share, or broadcast any material that is unlawful, defamatory, harassing, threatening, abusive, hateful, sexually explicit, pornographic, or depicting violence or exploitation.
              </li>
              <li>
                Post or distribute content that infringes upon any third party&apos;s copyright, trademark, trade secret, or privacy rights without explicit authorization.
              </li>
              <li>
                Attempt to reverse engineer, decompile, disassemble, or extract source code from the App or its underlying protocols.
              </li>
              <li>
                Bypass, tamper with, or probe room invitation codes, access permissions, authentication tokens, rate limits, or server security mechanisms.
              </li>
              <li>
                Use automated scrapers, bots, or unauthorized scripts to extract data or generate spam rooms.
              </li>
            </ul>
            <p>
              Violation of these rules may result in immediate suspension or termination of your account, removal of shared rooms, and revocation of access to collaborative features.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              6. Account Deletion &amp; Data Retention
            </h2>
            <p>
              You maintain full autonomy over your data at all times:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">Permanent Account Deletion:</strong> You can permanently delete your account directly inside the App by navigating to <strong>Profile / Settings &gt; Delete Account</strong>.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Immediate Purge:</strong> Deleting your account immediately and irrevocably erases your cloud user profile, unlinks your Apple User ID, permanently purges any shared rooms you host along with associated cloud-hosted media from our backend servers (Supabase / CloudKit), and wipes your local cache.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Local-Only Data:</strong> Deleting the iOS application from your device will erase all local SwiftData database files and un-synced personal fragments.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              7. Disclaimers &amp; Limitation of Liability
            </h2>
            <p>
              fraqments IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE DEVELOPER (ALFATHOSTHI) BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, MEDIA, PROFITS, OR GOODWILL RESULTING FROM:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Your access to, use of, or inability to access or use the App;</li>
              <li>Device damage, loss, operating system upgrades, or corruption of local storage;</li>
              <li>Unauthorized access, alteration, or loss of your shared transmissions or content;</li>
              <li>Actions or content submitted by other room participants.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              8. Contact Information, Updates &amp; Governing Law
            </h2>
            <p>
              <strong className="text-neutral-900 dark:text-white">Changes to Terms:</strong> We reserve the right to revise or update these Terms periodically. If an update involves material changes, we will notify you by updating the &quot;Last updated&quot; date at the top of this page or providing in-app notices. Continued use of fraqments after modifications constitutes acceptance of the revised Terms.
            </p>
            <p>
              <strong className="text-neutral-900 dark:text-white">Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law principles.
            </p>
            <p>
              <strong className="text-neutral-900 dark:text-white">Contact Us:</strong> If you have any inquiries, notices, or feedback regarding these Terms, please reach out to:
            </p>
            <p>
              <a
                href="mailto:fraqmentsapp@gmail.com"
                className="underline underline-offset-4 text-primary hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
              >
                fraqmentsapp@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-6">
          <Link
            href="/"
            className="text-sm text-neutral-500 dark:text-neutral-400 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-white font-medium"
          >
            ← Back to home
          </Link>
        </div>
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © 2026 fraqments. Spatial memory &amp; moments for iOS.
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/privacy/fraqments"
              className="text-neutral-500 dark:text-neutral-400 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms/fraqments"
              className="text-neutral-500 dark:text-neutral-400 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-white font-medium"
            >
              Terms of service
            </Link>
            <a
              href="mailto:fraqmentsapp@gmail.com"
              className="text-neutral-500 dark:text-neutral-400 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
