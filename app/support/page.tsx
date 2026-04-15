import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Tomokanji",
  description: "Get help with Tomokanji, the kanji widget app for iPhone.",
};

export default function Support() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans">
      <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <Link
          href="/"
          className="inline-block mb-8 rounded-xl shadow-xl shadow-blue-600/25 dark:shadow-blue-800/25 overflow-hidden bg-linear-to-b from-slate-900 to-slate-950 ring ring-slate-500/15"
        >
          <Image
            className="dark:hidden"
            src="/icon-light.jpg"
            alt="Tomokanji"
            width={48}
            height={48}
            priority
          />
          <Image
            className="dark:block hidden"
            src="/icon-dark.png"
            alt="Tomokanji"
            width={48}
            height={48}
            priority
          />
        </Link>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Support
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          Tomokanji — Learn kanji on your lock screen
        </p>

        <section className="mb-10">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            Contact Us
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-2">
            Have a question, found a bug, or want to share feedback? We&apos;d love to hear from
            you.
          </p>
          <a
            href="mailto:hello@sekei.ca"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            hello@sekei.ca
          </a>
        </section>

        <section className="mb-10">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                How do I add a Tomokanji widget to my lock screen?
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Long-press your lock screen, tap Customize, then tap the area below the clock to add
                a widget. Select Tomokanji from the widget list.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                The widget isn&apos;t updating. What should I do?
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                iOS controls how often widgets refresh. Try opening the app once to trigger an
                update. If the issue persists, removing and re-adding the widget usually resolves
                it.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                Does Tomokanji collect any personal data?
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                No. Tomokanji does not collect, store, or share any personal information. See our{" "}
                <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Privacy Policy
                </a>{" "}
                for details.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
