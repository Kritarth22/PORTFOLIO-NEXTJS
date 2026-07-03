"use client";

import React, { useState } from "react";
import { ExternalLink, FileCode, Send } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface Project {
  id: number;
  title: string;
  category: "frontend" | "fullstack" | "design";
  description: string;
  tags: string[];
  gradient: string;
  liveUrl: string;
  githubUrl: string;
  mockType:
    | "dashboard"
    | "chat"
    | "editor"
    | "analytics"
    | "sudoku"
    | "music"
    | "ecom"
    | "amazon";
}

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "ConnectCo",
    category: "fullstack",
    description:
      "Collaboratively developed a full-stack blogging platform that allows users to create, edit, and manage blog posts with a responsive and user-friendly interface.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
    gradient: "from-violet-500 via-indigo-700 to-slate-950",
    liveUrl: "#",
    githubUrl: "https://github.com/zeelghori27012004/ConnectCo",
    mockType: "dashboard",
  },
  {
    id: 2,
    title: "SonicSphere",
    category: "fullstack",
    description:
      "Designed and implemented a PostgreSQL database schema for an audio streaming platform using ER modeling, normalization, and SQL queries for efficient data management.",
    tags: ["PostgreSQL", "DBMS", "ER Diagram", "Normalization", "SQL"],
    gradient: "from-cyan-400 via-sky-600 to-blue-950",
    liveUrl: "#",
    githubUrl: "https://github.com/Kritarth22/SONICSPHERE_AUDIOSTREAMING_APP",
    mockType: "music",
  },
  {
    id: 3,
    title: "To-Do List",
    category: "frontend",
    description:
      "It allows users to add, edit, and delete tasks, with persistent storage using the browser's localStorage — so your tasks stay saved even after refreshing or closing the tab.",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    gradient: "from-emerald-400 via-green-600 to-teal-950",
    liveUrl: "#",
    githubUrl: "https://github.com/Kritarth22/TO-DO-List",
    mockType: "editor",
  },
  {
    id: 4,
    title: "NEXCHAT",
    category: "fullstack",
    description:
      "A real-time chat application built with Next.js and Stream Chat, featuring user authentication with NextAuth.js and a modern UI.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stream Chat", "NextAuth.js", "TailwindCSS"],
    gradient: "from-sky-500 via-cyan-600 to-slate-950",
    liveUrl: "#",
    githubUrl: "https://github.com/Kritarth22/NEXCHAT",
    mockType: "chat",
  },
  {
    id: 5,
    title: "Cartify-Figma UI design",
    category: "design",
    description:
      "Cartify is a modern and user-friendly e-commerce app prototype designed in Figma. The app allows users to browse and shop for clothing, shoes, and watches.",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    gradient: "from-amber-500 via-orange-600 to-rose-950",
    liveUrl: "#",
    githubUrl: "https://github.com/Kritarth22/Cartify---Figma-UI-design",
    mockType: "ecom",
  },
  {
    id: 6,
    title: "Sudoku",
    category: "frontend",
    description:
      "A browser-based Sudoku game developed using HTML, CSS, and JavaScript with features like solving, resetting, and solution validation.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "from-pink-500 via-rose-700 to-purple-950",
    liveUrl: "#",
    githubUrl: "https://github.com/Kritarth22/SUDOKU",
    mockType: "sudoku",
  },
  {
    id: 7,
    title: "Amazon-UI-Clone",
    category: "design",
    description:
      "This is a simple Amazon Clone built using HTML and CSS to replicate the look and feel of the Amazon homepage. It is a frontend-only project that focuses on layout, styling, and responsiveness.",
    tags: ["HTML", "CSS"],
    gradient: "from-fuchsia-600 via-purple-800 to-zinc-950",
    liveUrl: "#",
    githubUrl: "https://github.com/Kritarth22/Amazon-UI-Clone",
    mockType: "amazon",
  },
];

export default function Projects() {
  const [projectFilter, setProjectFilter] = useState<
    "all" | "frontend" | "fullstack" | "design"
  >("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    projectFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === projectFilter);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-t border-zinc-900 relative z-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs text-pink-400 tracking-widest uppercase">
            04. PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {[
            { id: "all", label: "All Work" },
            { id: "frontend", label: "Frontend" },
            { id: "fullstack", label: "Fullstack" },
            { id: "design", label: "Design" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setProjectFilter(filter.id as any)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                projectFilter === filter.id
                  ? "bg-white text-black border-transparent shadow-[0_0_15px_rgba(255,255,255,0.3)] font-semibold"
                  : "border-zinc-800 text-zinc-400 bg-zinc-900/20 hover:text-white hover:border-zinc-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className="rounded-2xl border border-zinc-850 bg-zinc-950/40 shadow-xl overflow-hidden flex flex-col justify-between group glass-panel-hover"
          >
            {/* Visual Header / Premium Layout Mockup */}
            <div
              className={`relative h-48 w-full bg-gradient-to-tr ${project.gradient} p-4 flex flex-col justify-between overflow-hidden shadow-inner`}
            >
              {/* Backdrop glass decoration */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

              {/* Subtle diagonal glow mesh */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

              {/* Card top banner controls */}
              <div className="flex justify-between items-center z-10">
                <span className="px-2.5 py-1 rounded bg-black/40 backdrop-blur-md border border-white/15 text-[9px] font-mono text-white tracking-widest uppercase">
                  {project.category}
                </span>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/30"></span>
                  <span className="w-2 h-2 rounded-full bg-white/30"></span>
                  <span className="w-2 h-2 rounded-full bg-white/30"></span>
                </div>
              </div>

              {/* Interactive mock application UI wrapper */}
              <div className="flex-1 w-full mt-4 rounded-lg bg-zinc-950/80 border border-white/5 backdrop-blur-sm shadow-2xl relative overflow-hidden flex flex-col justify-between p-2.5 transform group-hover:scale-[1.03] transition-transform duration-300 select-none">
                {/* Mock Dashboard Layout */}
                {project.mockType === "dashboard" && (
                  <div className="flex flex-col gap-1.5 w-full h-full">
                    <div className="flex items-center gap-1.5 border-b border-zinc-800 pb-1.5">
                      <span className="w-2 h-2 rounded bg-violet-400"></span>
                      <div className="h-2 w-16 bg-zinc-800 rounded"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 flex-1 items-end mt-1">
                      <div className="h-full bg-gradient-to-t from-violet-600 to-indigo-500 rounded relative group-hover:shadow-[0_0_10px_rgba(139,92,246,0.4)]">
                        <span className="absolute bottom-1 left-1 font-mono text-[7px] text-white">
                          82%
                        </span>
                      </div>
                      <div className="h-[60%] bg-gradient-to-t from-cyan-500 to-blue-500 rounded relative">
                        <span className="absolute bottom-1 left-1 font-mono text-[7px] text-white">
                          45%
                        </span>
                      </div>
                      <div className="h-[80%] bg-gradient-to-t from-pink-500 to-rose-500 rounded relative">
                        <span className="absolute bottom-1 left-1 font-mono text-[7px] text-white">
                          68%
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mock Chat Interface Layout */}
                {project.mockType === "chat" && (
                  <div className="flex flex-col justify-between w-full h-full gap-1">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-1 font-mono text-[7px] text-zinc-500">
                      <span>NEXCHAT</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    </div>
                    <div className="flex flex-col gap-1 my-1">
                      <div className="bg-zinc-900 border border-zinc-800 rounded px-1.5 py-1 text-[7px] max-w-[80%] self-start text-zinc-400 leading-normal">
                        Hey, how u doin'?
                      </div>
                      <div className="bg-violet-600 text-white rounded px-1.5 py-1 text-[7px] max-w-[80%] self-end leading-normal">
                        Trying to do better!!✌️
                      </div>
                    </div>
                    <div className="h-3 w-full bg-zinc-900 rounded border border-zinc-800 flex items-center justify-between px-1.5">
                      <span className="text-[6px] text-zinc-600">
                        Type a message...
                      </span>
                      <Send size={6} className="text-zinc-500" />
                    </div>
                  </div>
                )}

                {/* Mock Code Editor Interface Layout */}
                {project.mockType === "editor" && (
                  <div className="flex flex-col w-full h-full">
                    <div className="flex items-center gap-1 border-b border-zinc-800 pb-1 font-mono text-[7px] text-zinc-500">
                      <FileCode size={8} className="text-emerald-400" />{" "}
                      index.js
                    </div>
                    <div className="flex-1 font-mono text-[6px] text-zinc-500 mt-1 leading-normal">
                      <span className="text-pink-500">import</span> React <span className="text-pink-500">from</span> <span className="text-emerald-400">"react"</span>;
                      <br />
                      <span className="text-blue-400">const</span>{" app = () => {"}
                      <br />
                      &nbsp;&nbsp;<span className="text-pink-500">return</span>{" <"}<span className="text-violet-400">div</span>{">Live CMS Preview</"}<span className="text-violet-400">div</span>{">;"}
                      <br />
                      {"}"};
                    </div>
                  </div>
                )}

                {/* Mock Analytics Interface Layout */}
                {project.mockType === "analytics" && (
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-1">
                      <span className="font-mono text-[7px] text-cyan-400">
                        PORTFOLIO TRACKER
                      </span>
                      {/* <span className="font-mono text-[8px] text-white font-bold">
                        $42,910.00
                      </span> */}
                    </div>
                    <div className="flex-grow flex items-center justify-center relative mt-1">
                      {/* Circle radial mesh indicator */}
                      <div className="w-10 h-10 rounded-full border border-cyan-500/20 border-t-cyan-400 animate-spin flex items-center justify-center">
                        <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-[6px] text-zinc-400 font-bold">
                          ETH
                        </div>
                      </div>
                      <div className="absolute right-1 text-[7px] text-emerald-400 font-mono flex items-center gap-0.5">
                        ▲ +12.4%
                      </div>
                    </div>
                  </div>
                )}

                {/* Mock Sudoku Board Layout */}
                {project.mockType === "sudoku" && (
                  <div className="flex flex-col justify-between w-full h-full gap-1">
                    <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1 font-mono text-[7px] text-zinc-500">
                      <span>SUDOKU CORE</span>
                      <span className="text-[6.5px] font-bold text-pink-400">SOLVER: ACTIVE</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center py-1">
                      <div className="grid grid-cols-4 gap-0.5 w-[75px] h-[75px] bg-zinc-900 p-0.5 rounded border border-zinc-800">
                        {[
                          { v: "4", active: false, fixed: true },
                          { v: "2", active: false, fixed: true },
                          { v: "", active: false, fixed: false },
                          { v: "1", active: false, fixed: true },
                          
                          { v: "", active: false, fixed: false },
                          { v: "1", active: true, fixed: false },
                          { v: "4", active: false, fixed: true },
                          { v: "", active: false, fixed: false },
                          
                          { v: "2", active: false, fixed: true },
                          { v: "", active: false, fixed: false },
                          { v: "1", active: false, fixed: true },
                          { v: "4", active: false, fixed: true },
                          
                          { v: "1", active: false, fixed: true },
                          { v: "4", active: false, fixed: true },
                          { v: "2", active: false, fixed: true },
                          { v: "", active: false, fixed: false },
                        ].map((cell, idx) => (
                          <div
                            key={idx}
                            className={`w-[16px] h-[16px] flex items-center justify-center rounded-[2px] font-mono text-[8px] font-bold transition-all duration-300 ${
                              cell.active
                                ? "bg-pink-500 text-white shadow-[0_0_8px_rgba(236,72,153,0.6)] animate-pulse"
                                : cell.fixed
                                ? "bg-zinc-850 text-zinc-400 border border-zinc-800"
                                : "bg-zinc-950 border border-zinc-850 border-dashed text-pink-400"
                            }`}
                          >
                            {cell.v}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center font-mono text-[6px] text-zinc-500">
                      <span>Speed: 0.1ms</span>
                      <span className="text-emerald-400">✓ Validated</span>
                    </div>
                  </div>
                )}

                {/* Mock Audio Player Layout */}
                {project.mockType === "music" && (
                  <div className="flex flex-col justify-between w-full h-full gap-1">
                    <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1 font-mono text-[7px] text-zinc-500">
                      <span>SONICSPHERE MEDIA</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    </div>
                    <div className="flex items-center gap-2.5 my-1 flex-1">
                      {/* Vinyl record disc spinning */}
                      <div className="relative w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center animate-spin [animation-duration:8s] shadow-lg shadow-black/40">
                        <div className="absolute inset-1 rounded-full border border-dashed border-zinc-700/50"></div>
                        {/* Album Art Gradient Center */}
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-950"></div>
                        </div>
                      </div>
                      {/* Track Info */}
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <span className="font-bold text-[8px] text-white truncate leading-tight">
                          Ordinary
                        </span>
                        <span className="font-mono text-[6.5px] text-zinc-400 truncate mt-0.5">
                          Alex Warren
                        </span>
                        {/* Progress bar */}
                        <div className="w-full bg-zinc-800 rounded-full h-1 mt-1.5 relative overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[65%] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-1">
                      <span className="font-mono text-[6px] text-zinc-500">02:14 / 03:45</span>
                      <div className="flex gap-2 items-center text-zinc-400 font-bold">
                        <span className="text-[6.5px] cursor-pointer hover:text-white transition-colors">⏮</span>
                        <span className="text-[8px] bg-cyan-500 text-black w-3.5 h-3.5 rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-400 transition-colors shadow shadow-cyan-500/20 font-bold">▶</span>
                        <span className="text-[6.5px] cursor-pointer hover:text-white transition-colors">⏭</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mock E-commerce Cartify Layout */}
                {project.mockType === "ecom" && (
                  <div className="flex flex-col justify-between w-full h-full gap-1">
                    <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1 font-mono text-[7px] text-zinc-500">
                      <span>CARTIFY PROTOTYPE</span>
                      <div className="flex items-center gap-1 font-mono text-[7px]">
                        <span>🛒</span>
                        <span className="bg-amber-500 text-black font-bold px-1 rounded-full text-[6px]">3</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center my-1 flex-1">
                      {/* Product Image representation */}
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center p-1.5 shadow-md shadow-orange-500/10">
                        <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center relative bg-black/15">
                          <div className="w-4 h-4 rounded-full border border-white/70 flex items-center justify-center">
                            <span className="text-[5px] text-white font-mono font-bold">XII</span>
                          </div>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-amber-300 rounded-sm"></div>
                        </div>
                      </div>
                      {/* Product details */}
                      <div className="flex-grow flex flex-col justify-center gap-0.5">
                        <span className="font-bold text-[8px] text-white leading-tight">Casual Sneakers</span>
                        <span className="font-mono text-[7px] text-amber-400 font-bold">$25.00</span>
                        <span className="text-[6px] text-amber-500">★★★★★ <span className="text-zinc-500 font-mono">(48)</span></span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-0.5">
                      <span className="font-mono text-[6px] text-zinc-500">Figma Layer: Active</span>
                      <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold font-sans text-[7.5px] px-2 py-0.5 rounded shadow shadow-orange-500/20 active:scale-95 transition-all hover:brightness-110 cursor-pointer">
                        Checkout
                      </button>
                    </div>
                  </div>
                )}

                {/* Mock Amazon Storefront Layout */}
                {project.mockType === "amazon" && (
                  <div className="flex flex-col justify-between w-full h-full gap-1">
                    {/* Signature Amazon Dark Blue/Yellow Header */}
                    <div className="bg-[#131921] -mx-2.5 -mt-2.5 px-2.5 py-1 flex items-center justify-between border-b border-[#febd69]/30">
                      <div className="flex items-center gap-1">
                        <span className="font-black text-[9px] text-white tracking-tight flex items-baseline">
                          amz<span className="text-[#febd69] font-bold font-sans text-[7px]">.clone</span>
                        </span>
                      </div>
                      <div className="flex-1 mx-2 h-3.5 bg-white rounded flex items-center justify-between px-1 border border-transparent">
                        <span className="text-[6px] text-zinc-700 truncate">Search items...</span>
                        <span className="text-[#131921] font-bold text-[6px] cursor-pointer">🔍</span>
                      </div>
                    </div>
                    {/* Storefront Grid Content */}
                    <div className="flex-1 grid grid-cols-2 gap-1 py-1">
                      <div className="bg-zinc-900/60 border border-zinc-800 rounded p-1 flex flex-col justify-between">
                        <span className="font-bold text-[7px] text-white leading-none">Smart Hubs</span>
                        <div className="h-4.5 w-full rounded bg-gradient-to-br from-fuchsia-500/20 to-purple-800/20 border border-purple-500/10 mt-0.5 relative overflow-hidden flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-purple-500/40 border border-purple-400"></div>
                        </div>
                        <span className="text-[5.5px] text-[#febd69] mt-0.5 block hover:underline cursor-pointer">Shop deals</span>
                      </div>
                      <div className="bg-zinc-900/60 border border-zinc-800 rounded p-1 flex flex-col justify-between">
                        <span className="font-bold text-[7px] text-white leading-none">Active Wear</span>
                        <div className="h-4.5 w-full rounded bg-gradient-to-br from-yellow-500/20 to-amber-700/20 border border-yellow-500/10 mt-0.5 relative overflow-hidden flex items-center justify-center">
                          <div className="w-2.5 h-2 rounded bg-amber-400/30 border border-amber-300"></div>
                        </div>
                        <span className="text-[5.5px] text-[#febd69] mt-0.5 block hover:underline cursor-pointer">Shop now</span>
                      </div>
                    </div>
                    {/* Bottom micro footer bar */}
                    <div className="flex justify-between items-center font-mono text-[5.5px] text-zinc-500 pt-0.5 border-t border-zinc-900">
                      <span>Amazon Web UI Clone</span>
                      <span className="text-emerald-400">100% Styled</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Article Info Section */}
            <div className="p-6 flex-grow flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech stack badge list */}
              <div className="flex flex-wrap gap-1.5 my-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-850 font-mono text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links and action row */}
              <div className="flex items-center justify-between border-t border-zinc-900 pt-4 mt-1">
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-white transition-colors"
                >
                  <GithubIcon size={14} /> Repository
                </a>
                {/* <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-1 text-xs font-mono text-white hover:text-violet-400 transition-colors"
                >
                  Live Demo <ExternalLink size={14} />
                </a> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
