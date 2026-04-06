"use client";

import Image from "next/image";
import { Tabs } from "@base-ui/react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QuestionMarkCircleIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { XCircleIcon, SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { PaintBrushIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center h-screen min-h-0 justify-center bg-neutral-50 font-sans dark:bg-neutral-950 overflow-hidden mask-b-from-[calc(100%-96px)] mask-b-to-100%">
        <main className="flex flex-1 w-full max-w-3xl flex-col p-4 md:p-16 md:pb-0 relative pb-0 space-y-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0 }}
            className="rounded-3xl shadow-xl shadow-blue-600/25 dark:shadow-blue-800/25 overflow-hidden corner-shape-squircle mb-6 bg-linear-to-b from-slate-900 to-slate-950 ring ring-slate-500/15"
          >
            <Image
              className="dark:hidden"
              src="/icon-light.jpg"
              alt="Tomokanji light app icon"
              width={48}
              height={48}
              priority
            />
            <Image
              className="dark:block hidden"
              src="/icon-dark.png"
              alt="Tomokanji dark app icon"
              width={48}
              height={48}
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0, delay: 0.1 }}
            className="font-medium text-sm max-w-lg text-neutral-700 dark:text-neutral-300"
          >
            <span className="text-neutral-900 dark:text-neutral-200">Tomokanji</span> – Learn kanji
            every time you pick up your phone.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0, delay: 0.2 }}
            className="text-neutral-500 text-sm max-w-lg dark:text-neutral-400"
          >
            See kanji you&apos;re studying on your iPhone lock screen and home screen.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0, delay: 0.3 }}
            className="text-neutral-500 text-sm max-w-lg dark:text-neutral-400"
          >
            Every time you reach for your phone, you&apos;ll practice your kanji — no app to open,
            no habit to build.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0, delay: 0.4 }}
            className="w-full h-px bg-neutral-100 dark:bg-neutral-900 mb-6 mt-2"
          />
          <HeroTabs />
        </main>
      </div>
      <Link
        href="https://apps.apple.com/app/tomokanji/id000000000"
        className="fixed hover:scale-102 transition-transform duration-500 bottom-4 left-4 right-4 z-20 md:top-8 md:right-8 md:left-auto md:bottom-auto md:rounded-xl rounded-full overflow-hidden bg-neutral-900 shadow-2xl ring ring-neutral-950 inset-ring inset-ring-white/15 p-1 md:p-2 md:pb-1 flex flex-col items-center gap-0.5"
      >
        <div className="h-24 w-24 grow-0 overflow-hidden hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/api/qr" alt="Scan to download Tomokanji" className="w-24 h-24 invert" />
        </div>
        <Image
          width={96}
          height={80}
          src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
          alt="Scan to download Tomokanji"
        />
      </Link>
    </>
  );
}

const tabClasses =
  "flex h-8 flex-1 items-center justify-center border-0 px-2 text-xs font-medium break-keep whitespace-nowrap text-gray-500 dark:text-neutral-500 outline-hidden select-none before:inset-x-0 before:inset-y-1 before:rounded-full before:-outline-offset-1 before:outline-blue-800 hover:text-gray-900 dark:hover:text-neutral-200 focus-visible:relative focus-visible:before:absolute focus-visible:before:outline focus-visible:before:outline-2 data-[active]:text-gray-900 dark:data-[active]:text-neutral-100";

function HeroTabs() {
  const [activeTab, setActiveTab] = useState("lock-screen");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentTimeInTokyo, setCurrentTimeInTokyo] = useState("");
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const tabs = ["lock-screen", "random-kanji", "quiz", "dictionary"];
    cycleRef.current = setInterval(() => {
      setActiveTab((prev) => tabs[(tabs.indexOf(prev) + 1) % tabs.length]);
    }, 3000);
    return () => {
      if (cycleRef.current) clearInterval(cycleRef.current);
    };
  }, []);

  const handleTabChange = (value: string) => {
    if (cycleRef.current) {
      clearInterval(cycleRef.current);
      cycleRef.current = null;
    }
    setActiveTab(value);
  };

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentDate(
        now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      );
      setCurrentTime(
        now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }),
      );
      setCurrentTimeInTokyo(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Tokyo",
        }),
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={handleTabChange}
      render={
        <motion.div
          initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0, delay: 0.5 }}
          className="w-full flex flex-col relative h-full grow flex-1 overflow-hidden mb-0!"
        />
      }
    >
      <Tabs.List className="relative z-0 overflow-x-auto flex gap-1 p-1 rounded-full inset-ring inset-ring-neutral-400/7 bg-neutral-100 dark:bg-neutral-900 dark:inset-ring-neutral-700/50">
        <Tabs.Tab className={tabClasses} value="lock-screen">
          Lock screen widget
        </Tabs.Tab>
        <Tabs.Tab className={tabClasses} value="random-kanji">
          Random kanji widget
        </Tabs.Tab>
        <Tabs.Tab className={tabClasses} value="quiz">
          Quiz widget
        </Tabs.Tab>
        <Tabs.Tab className={tabClasses} value="dictionary">
          Dictionary
        </Tabs.Tab>
        <Tabs.Indicator className="absolute top-1/2 left-0 z-[-1] h-[calc(100%-8px)] ring ring-neutral-400/10 dark:ring-neutral-600/30 shadow-md w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 rounded-full bg-white dark:bg-neutral-700 transition-all duration-400 ease-in-out" />
      </Tabs.List>
      <Image
        src="/iphone-bezels-silver.webp"
        alt="iPhone 17 bezels"
        width={391}
        height={800}
        className="absolute dark:hidden z-3 top-14 left-1/2 -translate-x-1/2"
      />
      <Image
        src="/iphone-bezels-blue.webp"
        alt="iPhone 17 bezels"
        width={391}
        height={800}
        className="absolute hidden z-3 dark:block top-14 left-1/2 -translate-x-1/2"
      />
      <Image
        src="/minimal-japanese-wallpaper.webp"
        alt="Minimal japanese iphone background"
        width={391}
        height={800}
        className="absolute dark:hidden z-1 w-[360] h-192 top-18 left-1/2 -translate-x-1/2 rounded-[56px]"
      />
      <Image
        src="/mount-fuji-dark.webp"
        alt="Photo of mount fuji at night"
        width={391}
        height={800}
        className="absolute hidden dark:block z-1 w-[360] h-192 top-18 left-1/2 -translate-x-1/2 rounded-[56px]"
      />
      <div
        className={
          "absolute z-1 w-[360] bg-slate-800/20 dark:bg-slate-800/60 h-192 top-18 left-1/2 -translate-x-1/2 rounded-[56px]"
        }
      />
      <AnimatePresence mode="popLayout">
        {activeTab === "lock-screen" && (
          <Tabs.Panel
            key="lock-screen"
            className="flex pt-9 z-2 h-full items-start justify-center"
            value="lock-screen"
            keepMounted
            render={
              <motion.div
                initial={{ opacity: 0, x: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -16, filter: "blur(8px)" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0 }}
              />
            }
          >
            <LockScreenTabContent
              currentDate={currentDate}
              currentTime={currentTime}
              currentTimeInTokyo={currentTimeInTokyo}
            />
          </Tabs.Panel>
        )}
        {activeTab === "random-kanji" && (
          <Tabs.Panel
            key="random-kanji"
            className="flex pt-9 z-2 h-full items-start justify-center"
            value="random-kanji"
            keepMounted
            render={
              <motion.div
                initial={{ opacity: 0, x: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -16, filter: "blur(8px)" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0 }}
              />
            }
          >
            <RandomKanjiTabContent />
          </Tabs.Panel>
        )}
        {activeTab === "quiz" && (
          <Tabs.Panel
            key="quiz"
            className="flex pt-9 z-2 h-full items-start justify-center"
            value="quiz"
            keepMounted
            render={
              <motion.div
                initial={{ opacity: 0, x: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -16, filter: "blur(8px)" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0 }}
              />
            }
          >
            <QuizTabContent />
          </Tabs.Panel>
        )}
        {activeTab === "dictionary" && (
          <Tabs.Panel
            key="dictionary"
            className="absolute top-19 inset-x-0 flex items-start justify-center z-2 origin-bottom"
            value="dictionary"
            keepMounted
            render={
              <motion.div
                initial={{ opacity: 0, y: 48, scale: 0.9, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -16, scale: 1, filter: "blur(8px)" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0 }}
              />
            }
          >
            <DictionaryTabContent />
          </Tabs.Panel>
        )}
      </AnimatePresence>
    </Tabs.Root>
  );
}

function LockScreenTabContent({
  currentDate,
  currentTime,
  currentTimeInTokyo,
}: {
  currentDate: string;
  currentTime: string;
  currentTimeInTokyo: string;
}) {
  return (
    <div className="w-[352] flex flex-col items-start pt-16 justify-center h-fit px-8">
      <div className="w-full text-center">
        {currentDate && (
          <div className="font-semibold font-rounded text-xl text-white/40 mix-blend-plus-darker">
            {currentDate}
          </div>
        )}
        {currentTime && (
          <div className="font-semibold font-rounded text-8xl -mt-2 tracking-tight text-white/35 mix-blend-plus-darker">
            {currentTime}
          </div>
        )}
      </div>
      <div className="w-full grid grid-cols-4 gap-4 h-13 mt-2">
        <div className="col-span-1 flex justify-center items-center opacity-55">
          <div className="relative w-14 h-14 flex items-center justify-center mix-blend-plus-lighter">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56" fill="none">
              <path
                d="M 8.08 44.71 A 26 26 0 1 1 47.92 44.71"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="4"
                strokeLinecap="round"
                className="mix-blend-plus-lighter"
              />
              <circle
                cx="19"
                cy="4"
                r="4"
                fill="rgba(255,255,255,0.9)"
                className="mix-blend-plus-lighter"
              />
            </svg>
            <div className="w-13 h-13 rounded-full flex flex-col items-center justify-center">
              <p className="text-2xl text-white/75 -mt-0.5 font-medium">12</p>
              <p className="text-[10px] absolute left-3.5 bottom-0 text-white/45 font-medium">8</p>
              <p className="text-[10px] absolute right-3.5 bottom-0 text-white/45 font-medium">
                18
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center gap-2 px-2 mix-blend-plus-lighter">
          <div className="flex flex-col items-center shrink-0">
            <span className="text-4xl font-medium text-white/80 leading-none">歌</span>
            <span className="text-[9px] text-white/35 font-medium">N4</span>
          </div>
          <div className="flex flex-col font-semibold gap-0.5 min-w-0">
            <p className="text-[11px] text-white/55 mix-blend-plus-lighter font-medium leading-tight line-clamp-1">
              Song, sing
            </p>
            <p className="text-[11px] text-white/75 mix-blend-plus-lighter leading-tight line-clamp-1">
              カ
            </p>
            <p className="text-[11px] text-white/75 mix-blend-plus-lighter leading-tight line-clamp-1">
              うた・うた.う
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center opacity-55">
          <div className="w-13 h-13 rounded-full bg-linear-to-b from-neutral-50/25 to-neutral-50/20 flex flex-col items-center justify-center mix-blend-plus-lighter">
            <p className="text-[11px] text-white/40 font-medium mix-blend-plus-lighter">TOK</p>
            <p className="text-[13px] text-white/45 font-medium mix-blend-plus-lighter -mt-1">
              {currentTimeInTokyo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RandomKanjiTabContent() {
  return (
    <div className="w-84 flex flex-col gap-3 pt-16 px-4">
      {/* Top row: large kanji widget + 2x2 app icons */}
      <div className="grid grid-cols-4 gap-2">
        {/* Large kanji widget */}
        <div className="bg-white dark:bg-neutral-900 rounded-[42px] col-span-2 row-span-2 p-3 flex flex-col corner-shape-squircle justify-between">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-1">
              <span className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 leading-none">
                町
              </span>
              <span className="text-[10px] font-medium text-blue-400 bg-blue-500/10 px-1 py-0 rounded-sm">
                N4
              </span>
            </div>
            <div className="w-6 h-6 rounded-full bg-neutral-200/50 dark:bg-neutral-700/50 flex items-center justify-center shrink-0">
              <RefreshIcon className="size-3.5 text-neutral-500 dark:text-neutral-400" />
            </div>
          </div>
          <div className="flex text-[11px] flex-col gap-0.5">
            <p className="text-neutral-400 dark:text-neutral-500 leading-snug">
              town, village,
              <br />
              block, street
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">チョウ</p>
            <p className="text-neutral-600 dark:text-neutral-300">まち</p>
          </div>
        </div>

        {/* App icons 2x2 — placeholders until icons are ready */}
        <div className="aspect-square col-span-1 row-span-1 rounded-[18px] bg-neutral-100 dark:bg-neutral-900" />
        <div className="aspect-square col-span-1 row-span-1 rounded-[18px] bg-neutral-100 dark:bg-neutral-900" />
        <div className="aspect-square col-span-1 row-span-1 rounded-[18px] bg-neutral-100 dark:bg-neutral-900" />
        <div className="aspect-square col-span-1 row-span-1 rounded-[18px] bg-neutral-100 dark:bg-neutral-900" />
        {/* Bottom row: wide vocabulary widget */}
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-[42px] col-span-4 row-span-2 p-1 flex gap-0 corner-shape-squircle backdrop-blur-sm">
          {/* Left: kanji info */}
          <div className="flex flex-col justify-between w-28 shrink-0 p-2">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-1">
                <span className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 leading-none">
                  町
                </span>
                <span className="text-[10px] font-medium text-blue-400 bg-blue-500/10 px-1 py-0 rounded-sm">
                  N4
                </span>
              </div>
              <div className="w-6 h-6 rounded-full bg-neutral-200/50 dark:bg-neutral-700/50 flex items-center justify-center shrink-0">
                <RefreshIcon className="size-3.5 text-neutral-500 dark:text-neutral-400" />
              </div>
            </div>
            <div className="flex text-[11px] flex-col gap-0.5">
              <p className="text-neutral-400 dark:text-neutral-500 leading-snug">
                town, village,
                <br />
                block, street
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">チョウ</p>
              <p className="text-neutral-600 dark:text-neutral-300">まち</p>
            </div>
          </div>

          {/* Right: vocabulary compound list */}
          <div className="flex flex-col flex-1 bg-white dark:bg-neutral-900 min-w-0 corner-shape-squircle rounded-[36px] shadow-sm ring-0.5 ring-neutral-300/10">
            <div className="p-2 py-1.5 flex items-center justify-between">
              <div>
                <p className="text-[8px] text-neutral-300 dark:text-neutral-600 -mb-1">
                  チョウギカイ
                </p>
                <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100 shrink-0">
                  町議会
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500">
                Town council
              </span>
            </div>
            <div className="h-px w-full bg-neutral-100 dark:bg-neutral-800/50" />
            <div className="p-2 py-1.5 flex items-center justify-between">
              <div className="shrink-0">
                <p className="text-[8px] text-neutral-300 dark:text-neutral-600 -mb-1">
                  もんぜんまち
                </p>
                <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100 shrink-0">
                  門前町
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500 text-right line-clamp-2">
                Town originally built around a temple or shrine
              </span>
            </div>
            <div className="h-px w-full bg-neutral-100 dark:bg-neutral-800/50" />
            <div className="p-2 py-1.5 flex items-center justify-between">
              <div>
                <p className="text-[8px] text-neutral-300 dark:text-neutral-600 -mb-1">まちかど</p>
                <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100 shrink-0">
                  街角
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500">
                Street corner
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizTabContent() {
  return (
    <div className="w-84 flex flex-col gap-3 pt-16 px-4">
      {/* Top row: large kanji widget + 2x2 app icons */}
      <div className="grid grid-cols-4 gap-2">
        {/* Bottom row: wide vocabulary widget */}
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-[42px] col-span-4 row-span-2 p-1 flex gap-0 corner-shape-squircle backdrop-blur-sm">
          {/* Left: kanji info */}
          <div className="flex flex-col justify-between w-24 shrink-0 p-2">
            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start gap-1">
                <span className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 leading-none">
                  年
                </span>
                <div className="flex gap-0.5">
                  <XCircleIcon className="size-3 text-red-600 inset-ring-2 inset-ring-red-600 rounded-full" />
                  {Array.from({ length: 2 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-3 rounded-full border border-neutral-300 dark:border-neutral-600 border-dashed"
                    ></span>
                  ))}
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-neutral-200/50 dark:bg-neutral-700/50 flex items-center justify-center shrink-0">
                <RefreshIcon className="size-3.5 text-neutral-500 dark:text-neutral-400" />
              </div>
            </div>
            <div className="flex text-[11px] flex-col gap-0 blur-xs">
              <p className="text-neutral-400 dark:text-neutral-500 leading-snug">
                town, village,
                <br />
                block, street
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">チョウ</p>
              <p className="text-neutral-600 dark:text-neutral-300">まち</p>
            </div>
          </div>

          {/* Right: vocabulary compound list */}
          <div className="grid text-[11px] font-medium grid-cols-2 gap-1 flex-1 min-w-0">
            <div className="p-2 flex flex-col aspect-7/5 items-center justify-around corner-shape-squircle rounded-[40px] bg-white dark:bg-neutral-900 shadow-sm ring-0.5 ring-neutral-300/10 dark:ring-neutral-600/20">
              <p className=" text-neutral-800 dark:text-neutral-100">ネン</p>
              <div className="h-px w-full bg-neutral-100 dark:bg-neutral-600/50 shrink-0" />
              <p className=" text-neutral-800 dark:text-neutral-100">とし</p>
            </div>

            <div className="p-2 flex flex-col aspect-7/5 items-center justify-around corner-shape-squircle rounded-[40px] bg-white dark:bg-neutral-900 shadow-sm ring-0.5 ring-neutral-300/10 dark:ring-neutral-600/20">
              <p className=" text-neutral-800 dark:text-neutral-100">シン</p>
              <div className="h-px w-full bg-neutral-100 dark:bg-neutral-600/50 shrink-0" />
              <p className=" text-neutral-300 dark:text-neutral-600">〜</p>
            </div>
            <div className="p-2 relative flex flex-col aspect-7/5 items-center justify-around corner-shape-squircle rounded-[40px] bg-white dark:bg-neutral-900 shadow-sm ring-0.5 ring-neutral-300/10 dark:ring-neutral-600/20">
              <p className=" text-neutral-800 dark:text-neutral-100">シュウ, ソウ</p>
              <div className="h-px w-full bg-neutral-100 dark:bg-neutral-600/50 shrink-0" />
              <p className=" text-neutral-800 dark:text-neutral-100">むね</p>
              <XCircleIcon className="size-3 text-red-600 inset-ring-2 inset-ring-red-600 rounded-full absolute right-1.5 top-1.5" />
            </div>
            <div className="p-2 flex flex-col aspect-7/5 items-center justify-center corner-shape-squircle rounded-[40px] bg-white dark:bg-neutral-900 shadow-sm ring-0.5 ring-neutral-300/10 dark:ring-neutral-600/20">
              <QuestionMarkCircleIcon className="size-3.5 text-neutral-300 dark:text-neutral-500" />

              <p className=" text-neutral-300 dark:text-neutral-500 font-normal">Don't know</p>
            </div>
          </div>
        </div>
        {/* App icons 2x2 — placeholders until icons are ready */}
        <div className="aspect-square col-span-1 row-span-1 rounded-[18px] bg-neutral-100 dark:bg-neutral-900" />
        <div className="aspect-square col-span-1 row-span-1 rounded-[18px] bg-neutral-100 dark:bg-neutral-900" />
        <div className="aspect-square col-span-1 row-span-1 rounded-[18px] bg-neutral-100 dark:bg-neutral-900" />
        <div className="aspect-square col-span-1 row-span-1 rounded-[18px] bg-neutral-100 dark:bg-neutral-900" />
      </div>
    </div>
  );
}

function DictionaryTabContent() {
  return (
    <div className="w-[352px] h-192 relative bg-slate-100 dark:bg-neutral-900 overflow-y-auto rounded-t-[52px] pt-14 pb-16 px-4 flex flex-col gap-4 [scrollbar-width:none]">
      {/* Header */}
      <span className="text-[280px] z-0 absolute -top-8 -left-10 font-medium text-transparent bg-linear-to-b from-slate-300/25 dark:from-neutral-600/20 to-slate-300/5 dark:to-neutral-600/5 bg-clip-text leading-none tracking-tight">
        息
      </span>
      <div className="flex items-center justify-between relative z-1">
        <button className="w-8 h-8 rounded-full bg-linear-to-b from-white/70 dark:from-neutral-800/80 to-white/60 dark:to-neutral-800/70 flex items-center justify-center shadow-lg inset-ring inset-ring-white dark:inset-ring-neutral-700/20">
          <ChevronLeftIcon className="size-5 text-neutral-700 dark:text-neutral-300 stroke-2 -ml-0.5" />
        </button>
        <span className="text-base font-bold text-neutral-800 dark:text-neutral-100">息</span>
        <div className="w-8" />
      </div>

      {/* Large kanji + action buttons */}
      <div className="flex relative z-1 items-center justify-between">
        <span className="text-[88px] font-normal text-neutral-900 dark:text-neutral-100 leading-none tracking-tight">
          息
        </span>
        <div className="flex flex-col gap-1 justify-center items-end">
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-neutral-400 dark:text-neutral-500">Draw</span>
            <button className="w-8 h-8 rounded-full bg-linear-to-b from-white/70 dark:from-neutral-800/80 to-white/60 dark:to-neutral-800/70 flex items-center justify-center shadow-lg inset-ring inset-ring-white dark:inset-ring-neutral-700/20">
              <PaintBrushIcon className="size-4 text-neutral-500 dark:text-neutral-400 stroke-2" />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-neutral-400 dark:text-neutral-500">Visibility</span>
            <button className="w-8 h-8 rounded-full bg-linear-to-b from-white/70 dark:from-neutral-800/80 to-white/60 dark:to-neutral-800/70 flex items-center justify-center shadow-lg inset-ring inset-ring-white dark:inset-ring-neutral-700/20">
              <div className="size-3 border border-neutral-500 dark:border-neutral-400 border-dashed rounded-full" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="rounded-2xl z-1 relative bg-linear-to-b from-white/70 dark:from-neutral-800/60 to-white/50 dark:to-neutral-800/40 flex items-center justify-center shadow-xl shadow-neutral-800/5 inset-ring inset-ring-white dark:inset-ring-neutral-700/20">
        <div className="flex-1 p-3 text-center flex flex-col items-center justify-center gap-1">
          <p className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 tracking-widest">
            JLTP
          </p>
          <div className="flex items-center justify-center gap-1 h-fit">
            <span className="text-[10px] font-medium text-blue-500 bg-blue-400/10 px-1 py-0 rounded-sm">
              N3
            </span>
          </div>
        </div>
        <div className="flex-1 p-3 text-center flex flex-col items-center justify-center gap-1">
          <p className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 tracking-widest">
            WANIKANI
          </p>
          <div className="flex items-center justify-center gap-1 h-fit">
            <span className="text-[10px] font-medium text-blue-500 bg-blue-400/10 px-1 py-0 rounded-sm">
              12
            </span>
            <span className="text-[10px] font-medium text-blue-500 bg-blue-400/10 px-1 py-0 rounded-sm">
              苦
            </span>
          </div>
        </div>
        <div className="flex-1 p-3 text-center">
          <p className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 tracking-widest">
            FREQUENCY
          </p>
          <div className="flex items-center justify-center gap-1 h-fit">
            <span className="text-sm font-medium dark:text-neutral-100">882</span>
            <svg className="size-4 -rotate-90">
              <circle
                cx="8"
                cy="8"
                r="6"
                fill="none"
                className="stroke-neutral-200 dark:stroke-neutral-700"
                strokeWidth="2"
              />
              <circle
                cx="8"
                cy="8"
                r="6"
                fill="none"
                className="stroke-blue-500"
                strokeWidth="2"
                pathLength={10}
                strokeDasharray={10}
                strokeDashoffset={3}
              />
            </svg>
          </div>
        </div>
        <div className="flex-1 p-3 text-center">
          <p className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 tracking-widest">
            STROKES
          </p>
          <div className="flex items-center justify-center gap-1 h-fit">
            <span className="text-sm font-medium dark:text-neutral-100">10</span>
            <PaintBrushIcon className="size-4 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Meanings */}
      <div className="">
        <p className="text-[9px] text-neutral-400 dark:text-neutral-500 tracking-widest mb-1.5">
          MEANINGS
        </p>
        <p className="text-sm text-neutral-900 dark:text-neutral-100">
          Breath, respiration, son, interest (on money), nuture, rest, coming to an end
        </p>
      </div>

      {/* On'yomi */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5">
          <p className="text-[9px] text-neutral-400 dark:text-neutral-500 tracking-widest">
            ON&apos;YOMI
          </p>
          <InformationCircleIcon className="size-3 text-neutral-400 dark:text-neutral-500" />
        </div>
        <div className="inline-flex items-center py-1 px-2 gap-2 rounded-full bg-linear-to-b from-white/70 dark:from-neutral-800/60 to-white/50 dark:to-neutral-800/40 justify-center shadow-xl inset-ring inset-ring-white dark:inset-ring-neutral-700/20 shadow-neutral-800/5">
          <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">ソク</span>
          <SpeakerWaveIcon className="size-3.5 text-blue-500" />
        </div>
      </div>

      {/* Kun'yomi */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5">
          <p className="text-[9px] text-neutral-400 dark:text-neutral-500 tracking-widest">
            KUN&apos;YOMI
          </p>
          <InformationCircleIcon className="size-3 text-neutral-400 dark:text-neutral-500" />
        </div>
        <div className="inline-flex items-center py-1 px-2 gap-2 rounded-full bg-linear-to-b from-white/70 dark:from-neutral-800/60 to-white/50 dark:to-neutral-800/40 justify-center shadow-xl inset-ring inset-ring-white dark:inset-ring-neutral-700/20 shadow-neutral-800/5">
          <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">いき</span>
          <SpeakerWaveIcon className="size-3.5 text-blue-500" />
        </div>
      </div>

      {/* Examples */}
    </div>
  );
}

function RefreshIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.5 8a5.5 5.5 0 1 1-1.1-3.3" />
      <polyline points="13.5 2.5 13.5 5.5 10.5 5.5" />
    </svg>
  );
}
