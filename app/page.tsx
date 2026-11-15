import { profile, featured, professional, skills, education, achievements, type SkillItem } from "@/lib/data";
import Journey from "@/components/Journey";
import Screenshot from "@/components/Screenshot";
import ContactForm from "@/components/ContactForm";
import Tags from "@/components/Tags";
import Reveal from "@/components/Reveal";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import Typewriter from "@/components/Typewriter";
import { GitHub, LinkedIn, Mail, Download } from "@/components/Icons";
import { SiAnthropic, SiBitbucket, SiBootstrap, SiCakephp, SiCss, SiDocker, SiExpress, SiGit, SiGithub, SiGooglegemini, SiHtml5, SiJavascript, SiJquery, SiMariadb, SiMui, SiMysql, SiNodedotjs, SiNextdotjs, SiPhp, SiReact, SiTailwindcss } from "react-icons/si";
import type { IconType } from "react-icons";

const H2 = ({ children, small }: { children: React.ReactNode; small?: boolean }) => (
  <h2 className={`mb-8 flex items-center gap-3 font-display font-bold tracking-tight text-balance ${small ? "text-2xl" : "text-3xl sm:text-5xl"}`}>
    <span className={`${small ? "h-6" : "h-8 sm:h-10"} w-1.5 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent2`} />{children}
  </h2>
);
const Sec = ({ id, children }: { id: string; children: React.ReactNode }) => <section id={id} className="pt-20 sm:pt-28">{children}</section>;
const btn = "inline-flex items-center gap-2 rounded-full border-2 px-5 py-3 font-semibold transition hover:-translate-y-0.5";
const ico = "grid h-11 w-11 place-items-center rounded-full border border-line bg-surface transition hover:-translate-y-1 hover:border-accent hover:text-accent";

const NAV = [["home","Home"],["journey","Journey"],["featured","Projects"],["work","Professional"],["skills","Skills"],["contact","Contact"]];

const skillIcons: Record<string, IconType> = {
  php: SiPhp,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss,
  jquery: SiJquery,
  cakephp: SiCakephp,
  react: SiReact,
  nextdotjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  tailwindcss: SiTailwindcss,
  bootstrap: SiBootstrap,
  mui: SiMui,
  mysql: SiMysql,
  mariadb: SiMariadb,
  git: SiGit,
  github: SiGithub,
  bitbucket: SiBitbucket,
  docker: SiDocker,
  anthropic: SiAnthropic,
  googlegemini: SiGooglegemini,
};

function SkillPill({ item }: { item: SkillItem }) {
  const Icon = item.icon ? skillIcons[item.icon] : null;

  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/80 px-2.5 py-1 text-sm text-ink shadow-sm transition hover:border-accent/60 hover:text-accent">
      {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden="true" /> : <span className="inline-block h-2 w-2 rounded-full bg-accent/80" aria-hidden="true" />}
      <span>{item.name}</span>
    </li>
  );
}

function Socials() {
  const links = [
    { href: profile.github, label: "GitHub", I: GitHub },
    { href: profile.linkedin, label: "LinkedIn", I: LinkedIn },
    { href: `mailto:${profile.email}`, label: "Email", I: Mail },
  ].filter((l) => l.href);
  return (
    <div className="flex gap-3">
      {links.map(({ href, label, I }) => (
        <a key={label} href={href} aria-label={label} title={label} className={ico} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}><I /></a>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <a href="#main" className="sr-only z-20 rounded-full bg-accent px-4 py-2 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <nav className="sticky top-0 z-10 border-b border-line bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#home" className="whitespace-nowrap font-display text-lg font-semibold text-ink transition hover:text-accent">{profile.name}</a>
          <div className="flex items-center gap-3 whitespace-nowrap text-[.95rem] text-mute sm:gap-5">
            {NAV.map(([h, t]) =>
              <a key={h} href={`#${h}`} className="hidden hover:text-ink sm:inline">{t}</a>)}
            <a href={profile.cv} download className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 font-semibold text-on-accent transition hover:-translate-y-0.5"><Download className="h-4 w-4" />CV</a>
            <ThemeToggle />
            <MobileMenu links={NAV} />
          </div>
        </div>
      </nav>

      <header id="home" className="relative overflow-hidden">
        <div className="orb -left-24 top-10 h-80 w-80 bg-accent" />
        <div className="orb right-0 top-40 h-72 w-72 bg-accent2 [animation-delay:-6s]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:pt-24 md:grid-cols-[1.5fr_1fr]">
          <div className="hero-in">
            <p style={{ "--i": 0 } as React.CSSProperties} className="mb-3 inline-block rounded-full border border-line bg-surface px-4 py-1 text-sm text-mute">Hello, I'm based in the {profile.location}</p>
            <h1 style={{ "--i": 1 } as React.CSSProperties} className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-7xl"><span className="grad">{profile.title}</span></h1>
            <p style={{ "--i": 2 } as React.CSSProperties} className="mt-4 h-9 font-display text-xl text-mute sm:text-2xl"><Typewriter words={profile.roles} /></p>
            <p style={{ "--i": 3 } as React.CSSProperties} className="mt-4 max-w-prose text-pretty text-lg text-mute">{profile.summary}</p>
            <div style={{ "--i": 4 } as React.CSSProperties} className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#featured" className={`${btn} border-accent bg-accent text-on-accent`}>See my projects</a>
              <a href={profile.cv} download className={`${btn} border-ink`}><Download className="h-5 w-5" />Download CV</a>
            </div>
            <div style={{ "--i": 5 } as React.CSSProperties} className="mt-6"><Socials /></div>
          </div>
          <div className="grid grid-cols-3 gap-3 md:grid-cols-1 md:gap-4">
            {profile.stats.map(([n, t], i) => (
              <div key={t} style={{ animation: `pop .6s ${0.5 + i * 0.15}s both, float ${5 + i}s ${i}s ease-in-out infinite` }}
                className="rounded-2xl border border-line bg-surface/90 p-3 shadow-lg backdrop-blur sm:p-5 md:even:ml-8">
                <div className="grad font-display text-3xl font-bold sm:text-5xl">{n}</div><div className="text-xs text-mute sm:text-base">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-5">
        <Sec id="journey"><Reveal><H2>My career journey</H2></Reveal><Reveal d={1}><Journey /></Reveal></Sec>

        <Sec id="featured">
          <Reveal><H2>Featured projects</H2></Reveal>
          <div className="grid gap-8">
            {featured.map((p) => (
              <Reveal key={p.name}>
                <article className="lift overflow-hidden rounded-2xl border border-line bg-surface">
                  <Screenshot shot={p.shot} />
                  <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="md:col-span-2 lg:col-span-1">
                      <h3 className="font-display text-3xl font-bold text-balance">{p.name}</h3>
                      <p className="mt-1 font-semibold text-accent">{p.role}</p>
                      <p className="mt-4 text-pretty text-mute">{p.intro}</p>
                      <Tags items={p.stack} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-display text-lg font-bold">What I did</h4>
                      <ul className="grid gap-2 text-[.98rem] leading-relaxed">{p.did.map((d) => <li key={d} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{d}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-display text-lg font-bold">Features</h4>
                      <ul className="grid gap-2 text-[.98rem] leading-relaxed">{p.features.map((d) => <li key={d} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />{d}</li>)}</ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-mute">Client logos and personal details are blurred for privacy.</p>
        </Sec>

        <Sec id="work">
          <Reveal><H2>Professional projects</H2></Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {professional.map((p, i) => (
              <Reveal key={p.name} d={i % 2} className="h-full">
                <div className="lift h-full rounded-l-sm rounded-r-2xl border border-line border-l-4 border-l-accent bg-surface px-5 py-5">
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="text-mute">{p.text}</p><Tags items={p.stack} />
                </div>
              </Reveal>
            ))}
          </div>
        </Sec>

        <Sec id="skills">
          <Reveal><H2>Technical skills</H2></Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} d={i % 3} className="h-full">
                <div className="lift h-full rounded-2xl border border-line bg-surface p-5">
                  <h3 className="font-display text-lg font-bold">{s.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((item) => <SkillPill key={`${s.group}-${item.name}`} item={item} />)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Sec>

        <Sec id="about">
          <div className="grid gap-10 md:grid-cols-2">
            {[["Achievements", achievements], ["Education", education]].map(([h, list], i) => (
              <Reveal key={h as string} d={i}>
                <H2 small>{h as string}</H2>
                <ul className="grid gap-3">
                  {(list as { title: string; sub: string }[]).map((a) => (
                    <li key={a.title} className="lift rounded-2xl border border-line bg-surface px-5 py-4"><b className="font-display text-lg">{a.title}</b><br /><span className="text-mute">{a.sub}</span></li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Sec>

        <Sec id="contact">
          <Reveal><H2>Let’s work together</H2></Reveal>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <Reveal d={1}><ContactForm /></Reveal>
            <Reveal d={2}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <p className="mb-4 text-lg">Have a project, role or question? Send a message or find me here.</p>
                <Socials />
                <a href={profile.cv} download className={`${btn} mt-5 border-accent bg-accent text-on-accent`}><Download className="h-5 w-5" />Download my CV</a>
              </div>
            </Reveal>
          </div>
        </Sec>
      </main>
      <footer className="mt-24 border-t border-line py-8"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-mute sm:flex-row"><span>© {new Date().getFullYear()} {profile.name}</span><Socials /></div></footer>
    </>
  );
}
