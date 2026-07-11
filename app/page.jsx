'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Award, BookOpen, BrainCircuit, Code2, GithubIcon, GraduationCap, Mail, Microscope, Music, Sparkles, Users } from 'lucide-react'

const profile = {
  name: 'Chandrasekar Pasumarthi',
  headline: 'AI Researcher | Machine Learning | Computer Science',
  mission: 'Building intelligent systems for meaningful impact across healthcare, education, and scientific discovery.',
  email: 'ca.pasumarthi@gmail.com',
  github: 'https://github.com/Adhithpasu/',
  linkedin: 'https://www.linkedin.com/in/chandrasekar-adhithya-pasumarthi/',
  resume: '/resume.pdf'
}

const research = [
  {
    title: 'Vision Transformers vs. CNNs',
    tag: 'Published Research · JCSTS',
    description: 'Systematic analysis comparing Vision Transformers and convolutional neural networks across image classification tasks.',
    link: 'https://al-kindipublisher.com/index.php/jcsts/article/view/11991'
  },
  {
    title: 'Student Stress Classification',
    tag: 'Published Research · JCSTS',
    description: 'Machine learning model for student stress-level classification with personalized recommendation outputs.',
    link: 'https://al-kindipublisher.com/index.php/jcsts/article/view/12517'
  },
  {
    title: 'ACM ChemoCraft',
    tag: 'Biomedical AI Research',
    description: 'Performed medical image preprocessing, reducing noise and converting DWI to DTI scans to support AI-driven oncology research.',
    link: '#EDIT_THIS_PROJECT_LINK'
  }
]

const projects = [
  {
    title: 'AI Email Automation Agent',
    description: 'Built an AI-powered Gmail automation agent using FastAPI, Gmail API, Auth0 Token Vault, and scheduled workflows.',
    link: 'https://github.com/Adhithpasu/AI-Powered-Email-Automation-Openclaw'
  },
  {
    title: 'Machine Learning Portfolio',
    description: 'Projects spanning computer vision, neural networks, data analysis, and applied AI research.',
    link: 'https://github.com/Adhithpasu/ML-and-AI-Projects'
  },
  {
    title: 'Photography + AI Gallery',
    description: 'A creative section for photography, future image tagging, and computer vision experiments.',
    link: '#photography'
  }
]

const timeline = [
  ['2026', 'UT High School Research Academy', 'Research experience at UT Austin.'],
  ['2026', 'UT Austin Data Science Research Academy', 'Explored data science and research methods.'],
  ['2025–2026', 'Asklena AI Internship', 'Worked on AI/software projects and data-driven systems.'],
  ['2025–2026', 'ACM Research', 'Biomedical AI and medical imaging research.']
]

const awards = [
  'Battle of the Brains — 1st Place Winner',
  'UIL Computer Science — Regional Achievement',
  'Lumiere High Honors Award',
  'AP Scholar with Distinction',
  'National Recognition Program Awardee',
  'RCM Flute Level 6 Certification'
]

const activities = [
  ['AI/CS Leadership', 'Led workshops, mentored students, and promoted collaboration in AI and programming.', Code2],
  ['Community Service', 'American Red Cross volunteer for 3.5 years and City of Frisco volunteer for 1 year.', Users],
  ['Music', 'Completed Royal Conservatory of Music flute certification through Level 6.', Music]
]

const journey = [
  {
    year: "Elementary School",
    title: "First Curiosity",
    image: "/journey/elementary.jpg",
    text: "I began exploring how technology worked through simple games, puzzles, and early coding curiosity."
  },
  {
    year: "Middle School",
    title: "Building Foundations",
    image: "/journey/middle-school.jpg",
    text: "I started learning programming, robotics, and problem-solving, realizing I could build instead of just use technology."
  },
  {
    year: "Freshman Year",
    title: "Discovering CS",
    image: "/journey/freshman.jpg",
    text: "I began taking computer science seriously, strengthening my coding skills and exploring AI concepts."
  },
  {
    year: "Sophomore Year",
    title: "Entering Research",
    image: "/journey/sophomore.jpg",
    text: "I started applying machine learning to real problems and became interested in research-driven technology."
  },
  {
    year: "Junior Year",
    title: "Research & Impact",
    image: "/journey/junior.jpg",
    text: "Through publications, ACM research, and AI projects, I learned how technology can support healthcare and education."
  },
  {
    year: "Senior Year",
    title: "Looking Ahead",
    image: "/journey/senior.jpg",
    text: "I am continuing to grow as an AI researcher and developer while preparing to contribute meaningfully in college."
  }
];

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">{eyebrow}</p>
        <h2 className="mb-8 text-3xl font-bold md:text-5xl">{title}</h2>
        {children}
      </motion.div>
    </section>
  )
}

function LinkButton({ href, children }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan/70 hover:bg-cyan/10">
      {children} <ArrowUpRight size={16} />
    </a>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <div className="fixed inset-0 -z-10 grid-bg opacity-70" />
      <div className="fixed left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan/20 blur-3xl" />
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-bold tracking-tight">CP<span className="text-cyan">.</span></a>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#research" className="hover:text-cyan">Research</a>
            <a href="#projects" className="hover:text-cyan">Projects</a>
            <a href="#experience" className="hover:text-cyan">Experience</a>
            <a href="#journey" className="hover:text-cyan">Journey</a>
            <a href="#awards" className="hover:text-cyan">Awards</a>
            <a href="#contact" className="hover:text-cyan">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="mx-auto flex min-h-[88vh] max-w-6xl items-center px-6 py-24">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm text-cyan">
              <Sparkles size={16} /> Building Intelligent Systems for Meaningful Impact
            </div>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Hi, I’m <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 md:text-2xl">{profile.headline}</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">{profile.mission}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <LinkButton href={profile.resume}>Resume</LinkButton>
              <LinkButton href="#research">View Research</LinkButton>
              <LinkButton href={profile.github}>GitHub</LinkButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" eyebrow="About" title="AI, research, and community.">
        <div className="card p-8 text-lg leading-8 text-slate-300">
          I am a high school student focused on artificial intelligence, machine learning, computer science, and biomedical AI. My work spans published AI research, medical imaging research, AI internships, and student leadership. Beyond technical work, I care about building communities where people feel heard, supported, and connected.
        </div>
      </Section>

      <Section id="research" eyebrow="Research" title="Published and applied research.">
        <div className="grid gap-6 md:grid-cols-3">
          {research.map((item) => (
            <a key={item.title} href={item.link} className="card group p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <Microscope className="mb-5 text-cyan" />
              <p className="text-sm text-blue">{item.tag}</p>
              <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
              <p className="mt-4 text-slate-400">{item.description}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">Learn more <ArrowUpRight size={15} /></p>
            </a>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Technical projects and experiments.">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((item) => (
            <a key={item.title} href={item.link} className="card p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <BrainCircuit className="mb-5 text-violet" />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-4 text-slate-400">{item.description}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Research and learning timeline.">
        <div className="space-y-5">
          {timeline.map(([year, title, desc]) => (
            <div key={title} className="card flex flex-col gap-4 p-6 md:flex-row md:items-center">
              <div className="w-28 rounded-full bg-cyan/10 px-4 py-2 text-center text-sm font-bold text-cyan">{year}</div>
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-slate-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="awards" eyebrow="Awards" title="Recognition and honors.">
        <div className="grid gap-4 md:grid-cols-2">
          {awards.map((award) => (
            <div key={award} className="card flex items-center gap-4 p-5">
              <Award className="text-cyan" />
              <p className="font-medium text-slate-200">{award}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="leadership" eyebrow="Leadership" title="Beyond academics.">
        <div className="grid gap-6 md:grid-cols-3">
          {activities.map(([title, desc, Icon]) => (
            <div key={title} className="card p-6">
              <Icon className="mb-5 text-cyan" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-4 text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="photography" eyebrow="Photography" title="Creative perspective.">
        <div className="card p-8">
          <p className="text-lg leading-8 text-slate-300">This section can showcase original photography and future computer vision experiments such as image tagging, search, or AI-assisted categorization.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {['Nature', 'Architecture', 'Night Sky'].map((label) => (
              <div key={label} className="flex h-44 items-end rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/20 via-blue/10 to-violet/20 p-5">
                <span className="font-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

  <Section id="journey" className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <p className="text-sm uppercase tracking-[0.3em] text-indigo-400 mb-3">
      My Journey
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Growing Through Technology
    </h2>

    <p className="text-slate-400 max-w-3xl mb-14">
      A visual timeline of how my curiosity for technology evolved through
      school — from early exploration to AI research, publications, and
      real-world projects.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {journey.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-indigo-500 transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-56 w-full object-cover"
          />

          <div className="p-6">
            <p className="text-sm text-indigo-400 mb-2">{item.year}</p>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-6">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>

      <Section id="contact" eyebrow="Contact" title="Let’s connect.">
        <div className="card p-8">
          <p className="mb-6 text-lg text-slate-300">Interested in AI research, machine learning, biomedical AI, or student-led innovation? Reach out below.</p>
          <div className="flex flex-wrap gap-4">
            <LinkButton href={`mailto:${profile.email}`}><Mail size={16} /> Email</LinkButton>
            <LinkButton href={profile.github}><GithubIcon size={16} /> GitHub</LinkButton>
            <LinkButton href={profile.linkedin}><GraduationCap size={16} /> LinkedIn</LinkButton>
            <LinkButton href={profile.resume}><BookOpen size={16} /> Resume</LinkButton>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS, and Framer Motion.
      </footer>
    </main>
  )
}
