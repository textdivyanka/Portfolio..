import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Circle, GraduationCap, ChevronRight, BadgeCheck, ExternalLink, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DATA = {
  name: "DIVYANKA RAJ",
  title: "Computer Science & Engineering",
  email: "hellodivyanka@gmail.com",
  phone: "+91 9142145089",
  github: "http://github.com/divyankaraj20",
  linkedin: "https://www.linkedin.com/in/divyanka-raj%20765a",
  objective:
    "To leverage my strong foundation in web development technologies and data structures & algorithms to develop innovative web applications and basic backend setups. I am passionate about software development and eager to enhance my skills in a dynamic and growth-oriented environment.",
  education: [
    { school: "Bansal Institute of Science & Technology, Bhopal", detail: "B.Tech (2026) – 8.52 CGPA" },
    { school: "XII – Khoshi College, Bihar", detail: "75%" },
    { school: "Rose Bud Academy, Bihar", detail: "80%" },
  ],
  coursework: ["DSA", "OOPs", "DBMS", "Operating System", "Computer Networks", "PowerBI"],
  skills: {
    languages: ["Java", "C", "C++", "SQL"],
    web: ["HTML", "CSS", "JavaScript"],
    tools: ["VS Code", "PowerBI"],
  },
  projects: [
    {
      name: "Self-identifying Mental Health Status",
      stack: ["HTML", "CSS", "JavaScript", "Node.js"],
      summary:
        "Full-stack app with game-like elements that encourages users to engage in mental wellness activities using interactive flows and a simple backend.",
      link: "#",
    },
    {
      name: "Interview Prep (Real-time)",
      stack: ["HTML", "CSS", "JavaScript"],
      summary:
        "Practice platform offering timed mock interviews and simulated interview flows to help candidates prepare effectively.",
      link: "#",
    },
  ],
  certifications: [
    "Microsoft Azure AI – Future Skills Prime",
    "Java (Basic) – HackerRank",
    "Problem Solving (Basic) – HackerRank",
    "PowerBI Case Challenge – E&Y Associates",
    "C and C++ – Parabit Technology",
  ],
};

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex items-center gap-3 mb-6">
      <Sparkles className="w-5 h-5 text-gray-300" />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{title}</h2>
    </div>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-sm leading-none text-gray-200">
    <Circle className="h-2 w-2 text-gray-400" /> {children}
  </span>
);

const LinkIcon = ({ href, children, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-3 py-2 hover:bg-gray-700 transition-colors text-gray-200"
  >
    <Icon className="h-4 w-4 text-gray-300" /> {children}
  </a>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/80 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <a href="#home" className="font-bold tracking-wider text-white">{DATA.name}</a>
          <nav className="hidden sm:flex items-center gap-3">
            {[
              ["About", "about"],
              ["Education", "education"],
              ["Skills", "skills"],
              ["Projects", "projects"],
              ["Certifications", "certs"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm hover:underline underline-offset-4 text-gray-300 hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid sm:grid-cols-5 gap-8 items-center">
            <div className="sm:col-span-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                {DATA.name}
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-gray-400">{DATA.title}</p>
              <p className="mt-5 max-w-2xl text-gray-300">{DATA.objective}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <LinkIcon href={`mailto:${DATA.email}`} icon={Mail}>{DATA.email}</LinkIcon>
                <LinkIcon href={`tel:${DATA.phone.replace(/\s/g, "")}`} icon={Phone}>{DATA.phone}</LinkIcon>
                <LinkIcon href={DATA.github} icon={Github}>GitHub</LinkIcon>
                <LinkIcon href={DATA.linkedin} icon={Linkedin}>LinkedIn</LinkIcon>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ABOUT / COURSEWORK */}
      <Section id="about" title="About & Coursework">
        <div className="grid md:grid-cols-5 gap-6">
          <Card className="md:col-span-3 bg-gray-900 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-base text-white">What I’m Focused On</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 leading-relaxed">
              <p>
                I enjoy building clean, responsive web interfaces and learning scalable backend basics. I’m growing through
                projects that combine interactive UX with solid fundamentals in algorithms and databases.
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 bg-gray-900 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-base text-white">Relevant Coursework</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {DATA.coursework.map((c) => (
                <Pill key={c}>{c}</Pill>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-3 gap-6">
          {DATA.education.map((ed) => (
            <Card key={ed.school} className="hover:shadow-md transition-shadow bg-gray-900 border border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-start gap-3 text-base text-white">
                  <GraduationCap className="h-5 w-5 mt-0.5 text-gray-400" />
                  <span>{ed.school}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">{ed.detail}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Technical Skills">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border border-gray-700">
            <CardHeader className="pb-2"><CardTitle className="text-base text-white">Programming Languages</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {DATA.skills.languages.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border border-gray-700">
            <CardHeader className="pb-2"><CardTitle className="text-base text-white">Web Technologies</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {DATA.skills.web.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border border-gray-700">
            <CardHeader className="pb-2"><CardTitle className="text-base text-white">Tools</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {DATA.skills.tools.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.projects.map((p) => (
            <Card key={p.name} className="hover:shadow-md transition-shadow bg-gray-900 border border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between text-white">
                  <span className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-gray-400" />{p.name}</span>
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-1 hover:underline text-gray-400">
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{p.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs rounded-md bg-gray-800 border border-gray-700 px-2 py-1 text-gray-300">{s}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certs" title="Certifications">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DATA.certifications.map((c) => (
            <div key={c} className="flex items-center gap-3 rounded-xl border border-gray-700 p-3 bg-gray-900 text-gray-300">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-sm">{c}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="space-y-3">
          <a href={`mailto:${DATA.email}`} className="flex items-center gap-3 rounded-xl border border-gray-700 p-3 hover:bg-gray-800 bg-gray-900 text-gray-300">
            <Mail className="h-5 w-5 text-gray-400" /> {DATA.email}
          </a>
          <a href={`tel:${DATA.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl border border-gray-700 p-3 hover:bg-gray-800 bg-gray-900 text-gray-300">
            <Phone className="h-5 w-5 text-gray-400" /> {DATA.phone}
          </a>
          <a href={DATA.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-gray-700 p-3 hover:bg-gray-800 bg-gray-900 text-gray-300">
            <Github className="h-5 w-5 text-gray-400" /> GitHub
          </a>
          <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-gray-700 p-3 hover:bg-gray-800 bg-gray-900 text-gray-300">
            <Linkedin className="h-5 w-5 text-gray-400" /> LinkedIn
          </a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400">© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="inline-flex items-center gap-1 text-gray-400 hover:text-white">Back to top <ChevronRight className="h-4 w-4 rotate-90" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
