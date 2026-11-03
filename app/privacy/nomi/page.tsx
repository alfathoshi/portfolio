import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const metadata: Metadata = {
  title: "Privacy Policy | Nomi",
  description:
    "Privacy Policy for Nomi — An interactive, educational body-safety and personal boundary awareness iOS application for young children.",
};

export default function NomiPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black-100 text-neutral-900 dark:text-white font-sans flex flex-col transition-colors duration-300">
      <main className="mx-auto max-w-3xl px-6 py-16 flex-1 w-full">
        {/* Top Header with App Branding and Theme Toggle */}
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3 rounded-lg group">
            <div className="relative size-11 rounded-[11px] overflow-hidden shadow-sm border border-neutral-200/60 dark:border-white/10">
              <Image
                src="/AppIcon/nomi-light.webp"
                alt="Nomi Icon"
                width={44}
                height={44}
                className="object-cover size-full dark:hidden"
                priority
              />
              <Image
                src="/AppIcon/nomi-dark.webp"
                alt="Nomi Icon"
                width={44}
                height={44}
                className="object-cover size-full hidden dark:block"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                Nomi
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                Kids &amp; Family Privacy
              </span>
            </div>
          </Link>
          <ThemeToggle />
        </div>

        <h1 className="mt-10 text-3xl font-bold tracking-[-0.03em] sm:text-4xl text-neutral-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: October 2026
        </p>

        {/* Highlights banner */}
        <div className="mt-6 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <span className="text-xl">🛡️</span>
            <div>
              <h2 className="text-sm font-semibold text-emerald-950 dark:text-emerald-200">
                100% On-Device &amp; Child-Safe
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-emerald-900/80 dark:text-emerald-200/80 leading-relaxed">
                Nomi operates completely offline without tracking, analytics, ads, or external cloud accounts. We do not collect, transmit, sell, or share any personal information from children or parents.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-8 border-t border-neutral-200 dark:border-neutral-800 pt-10 leading-relaxed text-neutral-600 dark:text-neutral-300">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              1. Introduction &amp; Commitment to Children&apos;s Privacy
            </h2>
            <p>
              Welcome to <strong>Nomi</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). Nomi is an interactive, educational iOS mobile application created specifically for children (ages 4–8) and their parents or guardians. Our mission is to teach body safety, personal boundaries, and safe-touch awareness through age-appropriate interactive storybooks, educational flip-cards, tactile word sorting, and scenario decision quizzes.
            </p>
            <p>
              We firmly believe that children&apos;s digital experiences should be completely safe, private, and free from commercial surveillance. We have built Nomi with a strict <strong>privacy-by-design, zero-data-collection</strong> architecture that complies with Apple&apos;s App Store Review Guidelines (Section 1.3 Kids Category &amp; Section 5.1 Privacy), the Children&apos;s Online Privacy Protection Act (COPPA), and the General Data Protection Regulation for Kids (GDPR-K).
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              2. Information We Do NOT Collect
            </h2>
            <p>
              Nomi does <strong>not</strong> collect, harvest, transmit, or share any personal data or usage metrics with external servers. Specifically:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">No Personal Identifiers:</strong> We do not collect real names, email addresses, phone numbers, home addresses, government IDs, or Apple IDs.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">No Cloud Accounts or Logins:</strong> The app does not feature registration, user accounts, remote authentication, or cloud sync.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">No Tracking or Advertising Identifiers:</strong> We do not read or access the Identifier for Advertisers (IDFA) or Vendor ID (IDFV) for cross-app tracking.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">No Third-Party Analytics:</strong> We do not integrate behavior-tracking SDKs, crash report collectors (such as Firebase, Sentry, or Bugsnag), or marketing pixels.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">No Commercial Ads:</strong> There are zero third-party advertisements, banners, interstitials, or promotional popups.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">No In-App Purchases (IAP) or Financial Transactions:</strong> Nomi contains no digital purchases, subscriptions, or credit card handling.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">No Sensitive Hardware Permissions:</strong> Nomi does not request or access GPS location, camera, microphone, photo library, contacts, or health data. Audio effects and voiceovers are played strictly locally via Apple&apos;s native AVFoundation without recording capabilities.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              3. Information Stored Locally on Your Device
            </h2>
            <p>
              To make learning engaging and continuous across sessions, Nomi saves minimal gameplay state <strong>exclusively on your physical device</strong>:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">Child Profile Customization:</strong> An optional local nickname, selected age bracket, and selected friendly avatar chosen by the child or parent.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Learning Progress:</strong> Completed storybook chapters, flip-card reviews, word-sorting milestones, and scenario quiz responses.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Parent Zone PIN:</strong> A securely hashed numeric passcode configured by the parent to lock the Parent Dashboard.
              </li>
            </ul>
            <p>
              This information is stored utilizing Apple&apos;s sandboxed local frameworks (<strong>SwiftData</strong>, <strong>UserDefaults</strong>, and secure local <strong>Keychain</strong>). This data is completely isolated within the iOS app sandbox, is never accessible to other apps, and <strong>never leaves your device</strong>.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              4. Parental Controls &amp; Parent Zone
            </h2>
            <p>
              In accordance with Apple&apos;s strict Kids Category guidelines, Nomi features a <strong>PIN-protected Parental Gate (&quot;Parent Zone&quot;)</strong>.
            </p>
            <p>
              The Parent Zone allows caregivers to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Review the child&apos;s local learning progress, quiz comprehension, and safety topic coverage.</li>
              <li>Access pedagogical conversation starters and guidance for having open, shame-free body safety talks at home.</li>
              <li>Manage app settings or initiate a one-tap complete reset of all local progress and profile data.</li>
            </ul>
            <p>
              Young children cannot bypass this gate without entering the custom 4-digit PIN configured by the parent. No external links, web browsers, or communication features are accessible to children within the app.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              5. Third-Party Services &amp; Tracking
            </h2>
            <p>
              We explicitly state that <strong>Nomi includes zero third-party code libraries designed for tracking, advertising, or data collection</strong>.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>No third-party SDKs (no Facebook SDK, Google Analytics, Firebase, Unity Ads, etc.).</li>
              <li>No cookies, web beacons, or tracking pixels.</li>
              <li>No transmission of device fingerprints, IP addresses, or network metadata to third parties.</li>
            </ul>
            <p>
              Your child&apos;s interaction with Nomi is completely private between your child, you, and your Apple device.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              6. COPPA &amp; GDPR Compliance Statement
            </h2>
            <p>
              Because Nomi is designed for young children, we adhere strictly to leading worldwide children&apos;s data protection standards:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">Children&apos;s Online Privacy Protection Act (COPPA):</strong> We do not knowingly collect, use, or disclose personal information from children under the age of 13. Since zero personal data is transmitted over the Internet, parental consent forms or data harvesting procedures are completely unnecessary.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">General Data Protection Regulation for Kids (GDPR-K):</strong> In compliance with European Union standards for minors, we uphold the principle of maximum data minimization. No profiling, behavioral tracking, automated decision-making, or cloud storage of children&apos;s data occurs.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Apple Kids Category Guidelines (Section 1.3 &amp; 5.1):</strong> The app contains no third-party analytics or advertising, features an adult-only parental gate for settings, and collects zero behavioral metrics.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              7. Data Retention &amp; Deletion
            </h2>
            <p>
              You maintain total, unconditional control over all data stored by Nomi:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-neutral-900 dark:text-white">In-App Reset:</strong> Parents can instantly wipe all learning history, quiz answers, and child profile customization from within the PIN-protected Parent Zone by tapping &quot;Reset All Data&quot;.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Uninstalling the App:</strong> Because all data is stored strictly within the iOS local application sandbox, deleting or uninstalling Nomi from your device immediately and permanently purges 100% of local SwiftData records, preferences, and Keychain tokens. Nothing remains on our side because nothing was ever sent to our servers.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may occasionally update this Privacy Policy to reflect app improvements or regulatory updates. Any revisions will always maintain our unwavering commitment to zero external data collection for children. If updates occur, the &quot;Last updated&quot; date at the top of this document will be revised accordingly.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              9. Contact Information
            </h2>
            <p>
              If you have any questions, feedback, or concerns regarding Nomi or this Privacy Policy, please contact our team directly:
            </p>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-4 text-sm space-y-1.5">
              <p>
                <strong className="text-neutral-900 dark:text-white">Developer / Team:</strong> Nomi Team (Apple Developer Academy @ BINUS)
              </p>
              <p>
                <strong className="text-neutral-900 dark:text-white">Support &amp; Privacy Contact:</strong>{" "}
                <a
                  href="mailto:alfathoshi@gmail.com"
                  className="underline underline-offset-4 text-primary hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
                >
                  alfathoshi@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-neutral-900 dark:text-white">App Category:</strong> Kids (Ages 4–8) / Education
              </p>
            </div>
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
            © 2026 Nomi. Educational body safety &amp; child protection for iOS.
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/privacy/nomi"
              className="text-neutral-500 dark:text-neutral-400 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              Privacy policy
            </Link>
            <a
              href="mailto:alfathoshi@gmail.com"
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
