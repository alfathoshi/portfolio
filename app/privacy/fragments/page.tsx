import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const metadata: Metadata = {
  title: "Privacy Policy | Fragments",
  description: "How Fragments collects, uses, and protects your personal information.",
};

export default function FragmentsPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black-100 text-neutral-900 dark:text-white font-sans flex flex-col transition-colors duration-300">
      <main className="mx-auto max-w-3xl px-6 py-16 flex-1 w-full">
        {/* Top Header with App Branding and Theme Toggle */}
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3 rounded-lg group">
            <div className="relative size-11 rounded-[11px] overflow-hidden shadow-sm">
              <Image
                src="/fragments-icon-light.png"
                alt="Fragments Icon"
                width={44}
                height={44}
                className="object-cover size-full dark:hidden"
                priority
              />
              <Image
                src="/fragments-icon-dark.png"
                alt="Fragments Icon"
                width={44}
                height={44}
                className="object-cover size-full hidden dark:block"
                priority
              />
            </div>
            <span className="text-lg font-bold tracking-[0.18em] text-neutral-900 dark:text-white uppercase">
              Fragments
            </span>
          </Link>
          <ThemeToggle />
        </div>

        <h1 className="mt-10 text-3xl font-bold tracking-[-0.03em] sm:text-4xl text-neutral-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: September 19, 2026
        </p>

        <div className="mt-10 space-y-8 border-t border-neutral-200 dark:border-neutral-800 pt-10 leading-relaxed text-neutral-600 dark:text-neutral-300">
          <section className="space-y-3">
            <p>
              This Privacy Policy explains how Fragments (&quot;Fragments&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, and shares information about you when you use our mobile application and related services (the &quot;Services&quot;). By using the Services, you agree to the practices described here.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">On-device &amp; spatial memories</h2>
            <p>
              Fragments is an offline-first spatial memory app designed to protect your personal moments. Your memories, media, and records are treated with the highest level of privacy:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">Stored exclusively on your device.</strong> All sphere nodes, moment folders, photos, videos, and voice memos are persisted locally via Apple SwiftData on your own device storage.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">No external servers or cloud uploads.</strong> Fragments does not transmit, back up, or replicate your personal memories to any remote servers, databases, or third-party cloud infrastructure.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Full user ownership.</strong> Deleting a memory node, note, photo, or moment in the app immediately deletes it from your device. Uninstalling the app permanently erases all associated data.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Device permissions and data we access</h2>
            <p>
              To deliver spatial memory capture and interactive features, Fragments requests specific device permissions only when required:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">Camera.</strong> Used exclusively to allow you to take photos and videos to attach to your memory fragments.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Microphone.</strong> Used solely when recording voice notes or capturing videos with audio within your active moment sessions.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Location (When In Use).</strong> Used only to tag geographic coordinates to captured fragments so you can view where memories took place. We do not track your location in the background or construct movement histories.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Live Activities &amp; Dynamic Island.</strong> Uses iOS ActivityKit to present live recording session indicators on your Dynamic Island and Lock Screen. This state is managed purely by local system APIs and is discarded when the session ends.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">How we use information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide, maintain, and improve the app features and interactive spatial constellations.</li>
              <li>Render 3D memory nodes, widgets, and timeline interactions on your device.</li>
              <li>Respond to inquiries, questions, and customer support requests.</li>
              <li>Detect, prevent, and address technical bugs, crashes, and performance issues.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">How we share information</h2>
            <p>We do not sell your personal information. We do not share your personal memories, photos, or voice notes with anyone. We share information only in the following minimal circumstances:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>When explicitly shared by you via the native iOS system share sheet.</li>
              <li>When required by law, subpoena, or to protect our rights and users.</li>
              <li>In connection with a merger, acquisition, or sale of assets, with prior notice to affected users.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Third-party tracking &amp; advertising</h2>
            <p>
              Fragments does not contain third-party advertising, trackers, or marketing analytics SDKs (e.g., Google Analytics, Meta Pixel). We do not track your activity across apps or websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Data retention</h2>
            <p>
              We retain your personal data locally on your device for as long as you keep the app installed. You retain complete control to delete any individual piece of content or all data at any time directly through the app.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Your rights</h2>
            <p>
              Depending on where you live, you may have the right to access, export, correct, or delete your personal information, or to object to or restrict certain processing. Since all data is stored on-device, you can exercise most rights directly through iOS Settings and in-app controls. For questions, contact us at the address below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Security</h2>
            <p>
              We utilize Apple&apos;s standard on-device sandboxing and data protection mechanisms to secure your information. No method of electronic storage is completely impenetrable, but on-device storage ensures that your private data is not exposed to remote web vulnerabilities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Children&apos;s privacy</h2>
            <p>
              The Services are not directed to children under 13 (or the age required by local law), and we do not knowingly collect their personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be posted on this page with a new &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Contact us</h2>
            <p>
              Questions about this Privacy Policy? Contact us at{" "}
              <a
                href="mailto:alfathbintangmuhammad@gmail.com"
                className="underline underline-offset-4 text-primary hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
              >
                alfathbintangmuhammad@gmail.com
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
            © 2026 Fragments. Spatial memory &amp; moments for iOS.
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/privacy/fragments"
              className="text-neutral-500 dark:text-neutral-400 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              Privacy policy
            </Link>
            <a
              href="mailto:alfathbintangmuhammad@gmail.com"
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
