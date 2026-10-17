import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const metadata: Metadata = {
  title: "Privacy Policy | fraqments",
  description: "How fraqments collects, uses, and protects your personal information.",
};

export default function FraqmentsPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black-100 text-neutral-900 dark:text-white font-sans flex flex-col transition-colors duration-300">
      <main className="mx-auto max-w-3xl px-6 py-16 flex-1 w-full">
        {/* Top Header with App Branding and Theme Toggle */}
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3 rounded-lg group">
            <div className="relative size-11 rounded-[11px] overflow-hidden shadow-sm">
              <Image
                src="/fragments-icon-light.png"
                alt="fraqments Icon"
                width={44}
                height={44}
                className="object-cover size-full dark:hidden"
                priority
              />
              <Image
                src="/fragments-icon-dark.png"
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
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: October 2026
        </p>

        <div className="mt-10 space-y-8 border-t border-neutral-200 dark:border-neutral-800 pt-10 leading-relaxed text-neutral-600 dark:text-neutral-300">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Introduction</h2>
            <p>
              This Privacy Policy explains how fraqments (&quot;fraqments&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, and protects your personal information when you use our iOS mobile application and related services (the &quot;Services&quot;). fraqments is a spatial memory capture application that empowers you to preserve moments both through private, on-device personal memories and collaborative real-time sessions (&quot;Shared Moments&quot;).
            </p>
            <p>
              We are committed to maintaining the highest privacy and security standards in accordance with Apple&apos;s App Store Review Guidelines (including Guideline 5.1.1). By accessing or using fraqments, you acknowledge and agree to the practices described in this policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">On-Device Memories vs. Collaborative Cloud Storage</h2>
            <p>
              fraqments is architected with a transparent dual-storage model designed to balance private offline preservation with seamless real-time collaboration:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">Personal Moments (On-Device &amp; Offline-First):</strong> All personal memory spheres, notes, photos, videos, and voice memos are stored and processed locally on your device using Apple SwiftData. Personal moments are never transmitted, backed up, or replicated to remote cloud servers or external databases.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Shared Moments &amp; Rooms (Collaborative Cloud Storage):</strong> When you create or join a collaborative session (&quot;Shared Room&quot;), the fragments you contribute (including photos, videos, audio/voice recordings, and text notes) are securely uploaded and stored on our cloud infrastructure (Supabase) to enable real-time synchronization, instant updates, and access among verified members of that room.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Information We Collect</h2>
            <p>
              We collect only the minimum information necessary to deliver our features and ensure a secure collaborative experience:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">Authentication &amp; Profile Information:</strong> When signing in with Apple, we receive a unique, stable account identifier (Apple User ID) and, depending on your Apple privacy settings, your email address (or Apple&apos;s private relay email) and your name. Within the app, you may provide a public display name and profile picture to identify yourself to room collaborators.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">User-Generated Content:</strong> Photos, videos, audio recordings, and text notes specifically created, uploaded, or shared within collaborative Shared Moments.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Identifiers:</strong> An internal account User ID used exclusively to manage authentication sessions, room memberships, and access controls.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Device Permissions:</strong>
                <ul className="list-[circle] space-y-1.5 pl-6 mt-2">
                  <li>
                    <strong className="text-neutral-900 dark:text-white">Camera:</strong> Used exclusively to capture photos and record videos to attach as memory fragments.
                  </li>
                  <li>
                    <strong className="text-neutral-900 dark:text-white">Microphone:</strong> Used solely to capture video audio and record voice notes within active moment sessions.
                  </li>
                  <li>
                    <strong className="text-neutral-900 dark:text-white">Location (When In Use):</strong> Used strictly to tag geographic coordinates to memory fragments so you can view where memories were captured. Location data is <strong className="text-neutral-900 dark:text-white">never</strong> tracked in the background, never used to build movement histories, and <strong className="text-neutral-900 dark:text-white">never</strong> sold to or shared with third-party data brokers.
                  </li>
                  <li>
                    <strong className="text-neutral-900 dark:text-white">Live Activities &amp; Dynamic Island:</strong> Uses iOS ActivityKit to display ongoing recording session status on your Dynamic Island and Lock Screen. This state is managed locally by iOS and is immediately discarded when the session ends.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">How We Use Information</h2>
            <p>We use the collected information solely for legitimate operational purposes:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>To provide, operate, and maintain application functionality and interactive 3D spatial constellations.</li>
              <li>To enable real-time collaboration, instant sync, and shared media access within Shared Moments.</li>
              <li>To facilitate secure user authentication via Sign in with Apple.</li>
              <li>To display your display name and profile avatar to fellow members of shared rooms you participate in.</li>
              <li>To deliver customer support, diagnose technical bugs, and improve app stability.</li>
              <li>To comply with applicable legal obligations and enforce our terms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Third-Party Service Providers</h2>
            <p>
              We value your trust and do not sell, rent, or monetize your personal data. We work only with reputable infrastructure providers required to operate cloud services:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">Supabase:</strong> We utilize Supabase as our cloud infrastructure provider for secure PostgreSQL database hosting, encrypted media storage, and authentication management. Supabase processes data on our behalf adhering to strict security and privacy standards.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">No Third-Party Advertising or Tracking:</strong> fraqments does not embed any third-party ad networks, advertising SDKs, marketing trackers, or commercial data broker libraries. We do not engage in cross-app tracking.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Legal Disclosures:</strong> We will only disclose information if required to do so by applicable law, court order, subpoena, or to protect the safety and vital interests of our users.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Account Deletion &amp; Data Retention</h2>
            <p>
              You maintain full ownership and control over your personal data at all times:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">In-App Account Deletion:</strong> In compliance with Apple App Store Guideline 5.1.1, you can permanently delete your account directly inside the app at any time. Simply navigate to <strong className="text-neutral-900 dark:text-white">Profile → Delete Account</strong>.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Immediate Cloud Data Purge:</strong> When you execute account deletion, your user credentials, authentication records, profile details, and user-associated data stored in our Supabase cloud database and storage are permanently and irreversibly deleted.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Local Device Data Deletion:</strong> You can delete any personal on-device moment or fragment at any time within the app. Uninstalling the fraqments app permanently erases all locally stored SwiftData records and cached media from your device.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Data Retention:</strong> We retain cloud data associated with Shared Moments only for as long as your account and active rooms exist, or until you choose to delete them.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Security</h2>
            <p>
              We implement industry-standard safeguards to secure your personal data. All cloud communications are encrypted in transit using Transport Layer Security (TLS 1.3/1.2), and files stored in our cloud buckets are encrypted at rest. On-device memories are protected by Apple&apos;s sandboxing and hardware-backed data protection mechanisms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Children&apos;s Privacy</h2>
            <p>
              The Services are not intended for or directed to children under the age of 13 (or the relevant age threshold under local law). We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Your Privacy Rights</h2>
            <p>
              Depending on your country or state of residence (including under the GDPR or CCPA/CPRA), you may have rights regarding your personal information, such as the right to access, rectify, port, or erase your data, or restrict certain processing activities. You can exercise these rights directly within the app (including through our in-app account deletion tool) or by contacting us at the email address below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Changes to this Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or applicable legal requirements. Any material changes will be reflected on this page with an updated &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Contact Us</h2>
            <p>
              If you have any questions, concerns, or inquiries regarding this Privacy Policy or how your data is handled, please reach out to us at:
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
