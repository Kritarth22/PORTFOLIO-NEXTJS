"use client";

import React, { useState } from "react";
import { Terminal, FileCode, Layers, Download } from "lucide-react";

export default function About() {
  const [activeIdeFile, setActiveIdeFile] = useState<
    "profile.ts" | "skills.json"
  >("profile.ts");

  return (
    <section
      id="about"
      className="py-16 md:py-24 border-t border-zinc-900 relative z-10"
    >
      <div className="flex flex-col gap-4 mb-10">
        <span className="font-mono text-xs text-violet-400 tracking-widest uppercase">
          01. ABOUT ME
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          My Creative Workspace
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Column: Interactive IDE Editor */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 shadow-2xl flex-grow overflow-hidden flex flex-col">
            {/* Editor Header Bar */}
            <div className="h-11 bg-zinc-950 px-4 flex items-center justify-between border-b border-zinc-900 select-none">
              {/* Windows dots */}
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              {/* File Path Title */}
              <span className="font-mono text-xs text-zinc-500 flex items-center gap-1.5">
                <Terminal size={12} /> workspace &gt; src &gt; {activeIdeFile}
              </span>
              {/* Empty spacer */}
              <div className="w-10"></div>
            </div>

            {/* Tabs selection bar */}
            <div className="bg-zinc-900/50 flex border-b border-zinc-900">
              <button
                onClick={() => setActiveIdeFile("profile.ts")}
                className={`px-4 py-2 border-r border-zinc-900 font-mono text-xs flex items-center gap-2 select-none transition-colors ${
                  activeIdeFile === "profile.ts"
                    ? "bg-zinc-950 text-violet-400 font-semibold border-t-2 border-t-violet-500"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <FileCode size={12} className="text-blue-400" /> profile.ts
              </button>
              <button
                onClick={() => setActiveIdeFile("skills.json")}
                className={`px-4 py-2 border-r border-zinc-900 font-mono text-xs flex items-center gap-2 select-none transition-colors ${
                  activeIdeFile === "skills.json"
                    ? "bg-zinc-950 text-cyan-400 font-semibold border-t-2 border-t-cyan-500"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Layers size={12} className="text-amber-400" /> skills.json
              </button>
            </div>

            {/* Code viewport area */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-zinc-950 text-zinc-300 flex-grow no-scrollbar select-text min-h-[220px]">
              <pre className="whitespace-pre">
                {activeIdeFile === "profile.ts" ? (
                  <code>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-zinc-400">=</span>{" "}
                    <span className="text-zinc-200">{"{"}</span>
                    {"\n"} name:{" "}
                    <span className="text-emerald-300">"Kritarth Joshi"</span>,
                    {"\n"} role:{" "}
                    <span className="text-emerald-300">
                      "Full-Stack Developer"
                    </span>
                    ,{"\n"} location:{" "}
                    <span className="text-emerald-300">"India"</span>,{"\n"}{" "}
                    experience:{" "}
                    <span className="text-emerald-300">
                      "Full Stack Developer Intern at AXY Inc."
                    </span>
                    ,{"\n"} passion:{" "}
                    <span className="text-emerald-300">
                      "Building scalable and user-friendly web applications"
                    </span>
                    ,{"\n"} philosophy:{" "}
                    <span className="text-emerald-300">
                      "Solve real-world problems through clean code"
                    </span>
                    ,{"\n"} status:{" "}
                    <span className="text-emerald-300">
                      "Open to full-time opportunities"
                    </span>
                    {"\n"}
                    <span className="text-zinc-200">{"};"}</span>
                  </code>
                ) : (
                  <code>
                    <span className="text-zinc-500">{"{"}</span>
                    {"\n"} <span className="text-cyan-400">"frontend"</span>:{" "}
                    <span className="text-zinc-400">[</span>
                    {"\n"}{" "}
                    <span className="text-emerald-300">
                      "React.js", "Next.js"
                    </span>
                    , <span className="text-emerald-300">"TypeScript"</span>,
                    {"\n"}{" "}
                    <span className="text-emerald-300">"TailwindCSS"</span>,{" "}
                    <span className="text-emerald-300">
                      "HTML", "CSS", "JavaScript"
                    </span>
                    {"\n"} <span className="text-zinc-400">]</span>,{"\n"}{" "}
                    <span className="text-cyan-400">"backend"</span>:{" "}
                    <span className="text-zinc-400">[</span>
                    {"\n"} <span className="text-emerald-300">"Node.js"</span>,{" "}
                    <span className="text-emerald-300">"PostgreSQL"</span>,{" "}
                    <span className="text-emerald-300">
                      "Prisma ORM", "SQL", "Firebase"
                    </span>
                    {"\n"} <span className="text-zinc-400">]</span>,{"\n"}{" "}
                    <span className="text-cyan-400">"devops_tools"</span>:{" "}
                    <span className="text-zinc-400">[</span>
                    {"\n"}{" "}
                    <span className="text-emerald-300">
                      "Beekeeper", "Typesense"
                    </span>
                    , <span className="text-emerald-300">"VS Code"</span>,{" "}
                    <span className="text-emerald-300">"Figma"</span>,{"\n"}{" "}
                    <span className="text-emerald-300">
                      "Git & GitHub Actions"
                    </span>
                    {"\n"} <span className="text-zinc-400">]</span>
                    {"\n"}
                    <span className="text-zinc-500">{"}"}</span>
                  </code>
                )}
              </pre>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Stats */}
        <div className="lg:col-span-6 flex flex-col justify-center gap-6">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Building scalable and modern web applications.
          </h3>

          <div className="flex flex-col gap-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            <p>
              I'm a full-stack developer passionate about building responsive
              and user-friendly web applications using modern technologies like
              React, Next.js, Node.js, and TypeScript.
            </p>
            <p>
              I enjoy solving real-world problems, creating clean UI
              experiences, and developing scalable backend systems with strong
              focus on performance and maintainability.
            </p>
            <p>
              Apart from development, I actively practice DSA, explore new
              technologies, and work on projects that improve my problem-solving
              and teamwork skills.
            </p>
          </div>

          {/* CV Download / Info Buttons */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="#contact"
              className="px-5 py-3 rounded-full text-xs font-mono font-bold bg-white text-black hover:bg-violet-400 hover:text-black transition-colors"
            >
              Work With Me
            </a>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?export=download&id=1mduYs_vAldykRNR_f_NkmKYwXvuf1ToS",
                  "_blank",
                )
              }
              className="px-5 py-3 rounded-full text-xs font-mono font-bold border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 flex items-center gap-2 transition-colors"
            >
              <Download size={16} /> Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// old drive link for resume download
// https://drive.google.com/file/d/1hatK5JcDEki8KlAXMc4Q4ups-AfGtA3g/view?usp=drive_link


// new drive link for resume download
// https://drive.google.com/file/d/1mduYs_vAldykRNR_f_NkmKYwXvuf1ToS/view?usp=sharing