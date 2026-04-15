import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Tomokanji",
  description:
    "Tomokanji privacy policy. We do not collect, store, or share any personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans">
      <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          Last Updated: April 15, 2026
        </p>

        <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed">
          Thank you for choosing to be part of our community at{" "}
          <strong className="text-neutral-900 dark:text-neutral-100">Tomokanji</strong> ("App",
          "we", "us", or "our"). We are committed to protecting your personal information and your
          right to privacy. This Privacy Policy outlines how we handle any information you provide
          when using our App.
        </p>

        <section className="mb-8">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            1. Information We Do Not Collect
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
            We want to assure you that{" "}
            <strong className="text-neutral-900 dark:text-neutral-100">Tomokanji</strong> does{" "}
            <strong className="text-neutral-900 dark:text-neutral-100">not</strong> collect, store,
            or share any personal information about you. This includes, but is not limited to:
          </p>
          <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-2 leading-relaxed">
              <span className="text-neutral-400 dark:text-neutral-500 shrink-0">•</span>
              <span>
                <strong className="text-neutral-900 dark:text-neutral-100">
                  Personal Identifiable Information (PII):
                </strong>{" "}
                Such as your name, email address, phone number, or address.
              </span>
            </li>
            <li className="flex gap-2 leading-relaxed">
              <span className="text-neutral-400 dark:text-neutral-500 shrink-0">•</span>
              <span>
                <strong className="text-neutral-900 dark:text-neutral-100">Usage Data:</strong>{" "}
                Information on how you use the App.
              </span>
            </li>
            <li className="flex gap-2 leading-relaxed">
              <span className="text-neutral-400 dark:text-neutral-500 shrink-0">•</span>
              <span>
                <strong className="text-neutral-900 dark:text-neutral-100">
                  Device Information:
                </strong>{" "}
                Details about the device you use to access the App, including hardware model,
                operating system, and version.
              </span>
            </li>
            <li className="flex gap-2 leading-relaxed">
              <span className="text-neutral-400 dark:text-neutral-500 shrink-0">•</span>
              <span>
                <strong className="text-neutral-900 dark:text-neutral-100">Location Data:</strong>{" "}
                Your precise or approximate location.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            2. Third-Party Services
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Our App does not integrate with or utilize any third-party services that collect user
            data. We ensure that no external partners have access to your information because we do
            not collect any data from you in the first place.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <strong className="text-neutral-900 dark:text-neutral-100">Tomokanji</strong> does not
            use cookies or any other tracking technologies to monitor your activity within the App.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            4. Children&apos;s Privacy
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Our App is not intended for use by children under the age of 13. We do not knowingly
            collect personal information from children. If you become aware that a child has
            provided us with personal information, please contact us, and we will take steps to
            remove such information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            5. Changes to This Privacy Policy
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy within the App Store. You are advised to review this
            Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            6. Contact Us
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or our data practices,
            please contact us at:
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            <strong className="text-neutral-900 dark:text-neutral-100">Email:</strong>{" "}
            <a
              href="mailto:hello@sekei.ca"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              hello@sekei.ca
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
