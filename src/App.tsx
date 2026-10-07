import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    title: "PROTO-1",
    url: "https://rsponarassu.github.io/rsponarassu.github-io/",
    category: "About · Portfolio",
    description:
      "This is where the journey begins. The first project was my portfolio.",
    image:
      "https://images.unsplash.com/photo-1594092102914-594528bd7ed8?auto=format&fit=crop&w=1600&q=85",
    alt: "Portfolio",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com",
    color: "#ff633e",
  },
  {
    number: "02",
    title: "Vaultline",
    url: "https://vaultline-da7g.onrender.com",
    category: "Password · Strength Analyse · Generate",
    description:
      "Vaultline checks a password against a set of simple, explainable rules and tells you how strong it is, why, and how to improve it — plus an entropy estimate, a rough crack-time estimate, and a strong-password generator.",
    image:
      "https://images.unsplash.com/photo-1713982154438-e411b95917a2?auto=format&fit=crop&w=1600&q=85",
    alt: "Vaultline",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com",
    color: "#82b9e8",
  },
  {
    number: "03",
    title: "Meeting-Mute",
    url: null,
    category: "Online · Web-Extension · Warning",
    description:
      "Meeting-Mute is a web-extension which supresses background noise and shows a flashing red warning when the mic is on.",
    image:
      "https://images.unsplash.com/photo-1579963824410-69e7079bef9d?auto=format&fit=crop&w=1600&q=85",
    alt: "Meeting-Mute",
    credit: "Unsplash",
    creditUrl: "https://unsplash.com",
    color: "#d7ff56",
  },
];

const certifications = [
  {
    title: "Google UX Design Certificate",
    issuer: "Google",
    image: "/certificates/google-ux.svg",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-5 transition-transform duration-300 ${diagonal ? "group-hover:translate-x-1 group-hover:-translate-y-1" : "group-hover:translate-x-1"}`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d={diagonal ? "M5 19 19 5M8 5h11v11" : "M5 12h14m-5-5 5 5-5 5"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const handleMove = (event: PointerEvent) => {
      const position = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      dot.style.transform = position;
      ring.style.transform = position;
      const interactive = (event.target as Element | null)?.closest(
        "a, button, [role='button']",
      );
      ring.classList.toggle("cursor-hover", Boolean(interactive));
      dot.classList.add("cursor-visible");
      ring.classList.add("cursor-visible");
    };
    const handleDown = () => ring.classList.add("cursor-click");
    const handleUp = () => ring.classList.remove("cursor-click");
    const handleLeave = () => {
      dot.classList.remove("cursor-visible");
      ring.classList.remove("cursor-visible");
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="custom-cursor-dot" ref={dotRef} />
      <div aria-hidden="true" className="custom-cursor-ring" ref={ringRef} />
    </>
  );
}

type Certificate = (typeof certifications)[number];

function CertificateViewer({
  certificate,
  onClose,
}: {
  certificate: Certificate;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      aria-label={`${certificate.title} certificate viewer`}
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-10"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="certificate-modal relative w-full max-w-5xl border border-white/15 bg-[#111] p-3 shadow-2xl md:p-5"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ef2b2d]">
              Original certificate
            </p>
            <h3 className="mt-1 text-sm font-semibold md:text-base">{certificate.title}</h3>
          </div>
          <button
            aria-label="Close certificate viewer"
            autoFocus
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 transition hover:border-[#ef2b2d] hover:bg-[#ef2b2d]"
            onClick={onClose}
            type="button"
          >
            <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
              <path
                d="m3 3 10 10M13 3 3 13"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
        <div className="max-h-[75vh] overflow-auto bg-[#e8e3da]">
          <img
            alt={`${certificate.title} issued by ${certificate.issuer}`}
            className="h-auto w-full"
            src={certificate.image}
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <>
      <CustomCursor />
      <main className="overflow-hidden bg-[#090909] text-[#f4eee9] selection:bg-[#e52323] selection:text-white">
        <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 md:px-10 lg:px-14"
          >
            <a
              className="text-[18px] font-bold tracking-[-0.05em]"
              href="#top"
              aria-label="PONARASSU RS, home"
            >
              RSP<span className="text-[#ef2b2d]">.</span>
            </a>
            <div className="flex items-center gap-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/70 sm:gap-9">
              <a className="nav-link" href="#work">
                Work
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a
                className="hidden rounded-full border border-[#ef2b2d] px-4 py-2 text-white transition hover:bg-[#ef2b2d] sm:block"
                href="mailto:rspprof6827@gmail.com"
              >
                Start a project
              </a>
            </div>
          </nav>
        </header>

        <section
          id="top"
          className="hero-grid relative mx-auto flex min-h-[760px] max-w-[1440px] flex-col justify-end px-5 pb-12 pt-32 md:min-h-screen md:px-10 md:pb-14 lg:px-14"
        >
          <div className="absolute right-[8%] top-[17%] hidden size-28 animate-pulse rounded-full bg-[#d81f25] blur-3xl lg:block" />
          <div className="absolute right-[9%] top-[19%] hidden size-16 rounded-full border border-[#ef2b2d] lg:block" />
          <div className="absolute right-[calc(9%+31px)] top-[calc(19%+31px)] hidden size-1 rounded-full bg-white lg:block" />

          <div className="relative">
            <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
              <span className="status-dot inline-block size-2 rounded-full bg-[#ef2b2d]" />
              Independent creative Developer · Currently persuing a Degree
            </p>
            <h1 className="max-w-[1250px] text-[clamp(4.5rem,13vw,12rem)] font-semibold leading-[0.78] tracking-[-0.075em]">
              Ideas made
              <span className="red-outline block pl-[8vw] font-serif font-normal italic tracking-[-0.06em]">
                visible.
              </span>
            </h1>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-8 border-t border-white/15 pt-5 md:flex-row md:items-end">
            <p className="max-w-md text-[17px] leading-[1.45] tracking-[-0.02em] text-white/70 md:text-xl">
              I&apos;m Ponarassu, a multidisciplinary developer creating ideas to working models.
            </p>
            <a
              className="group flex items-center gap-3 self-start rounded-full bg-[#ef2b2d] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] transition hover:bg-white hover:text-black md:self-auto"
              href="#work"
            >
              Featured <Arrow />
            </a>
          </div>
        </section>

        <div className="marquee border-y border-[#ef2b2d]/40 bg-[#b8151b] py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white">
          <div>
            Strategy — Identity — Digital — Art Direction — Experience — Strategy —
            Identity — Digital — Art Direction — Experience —
          </div>
        </div>

        <section id="work" className="bg-[#0e0d0d] px-5 py-24 text-[#f4eee9] md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-[1332px]">
            <div className="mb-16 flex items-end justify-between border-b border-white/25 pb-6 md:mb-24">
              <h2 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Selected <span className="font-serif italic text-[#ef2b2d]">work</span>
              </h2>
              <span className="pb-1 text-xs font-semibold tracking-[0.16em] text-white/55">
                Since 2025
              </span>
            </div>

            <div className="space-y-28 md:space-y-40">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`project-card group grid gap-8 border border-white/10 bg-[#131111] p-4 transition duration-500 hover:border-[#ef2b2d]/70 md:grid-cols-12 md:items-end md:gap-10 md:p-7 ${index % 2 ? "md:[&_.project-image]:order-2" : ""
                    }`}
                >
                  <div className="project-image md:col-span-8">
                    <a className="block" href={project.url ?? `#${project.title.toLowerCase().replace(" ", "-")}`}>
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#201010]">
                        <img
                          alt={project.alt}
                          className="project-photo h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                          loading="lazy"
                          src={project.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#8e0f13]/50 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-20" />
                        <span className="absolute right-3 top-3 rounded-full bg-[#ef2b2d] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                          Launch it !
                        </span>
                      </div>
                    </a>
                    <a
                      className="mt-2 inline-block text-[9px] tracking-wide text-white/35 transition hover:text-white/70"
                      href={project.creditUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Photo: {project.credit}
                    </a>
                  </div>

                  <div className="md:col-span-4 md:pb-7">
                    <div className="mb-8 flex items-center justify-between border-b border-white/20 pb-3 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/55">
                      <span className="text-[#ef2b2d]">{project.number}</span>
                      <span>Featured project</span>
                    </div>
                    <h3 className="text-5xl font-medium leading-none tracking-[-0.06em] md:text-[4rem]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.13em] text-white/55">
                      {project.category}
                    </p>
                    <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-white/75">
                      {project.description}
                    </p>
                    <a
                      className="mt-8 inline-flex items-center gap-3 border-b border-[#ef2b2d] pb-2 text-[11px] font-bold uppercase tracking-[0.14em]"
                      href={project.url ?? `#${project.title.toLowerCase().replace(" ", "-")}`}
                    >
                      Explore project <Arrow diagonal />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-0 border-t border-white/10 bg-[#090909] px-5 py-24 md:px-10 md:py-36 lg:px-14"
        >
          <div className="mx-auto max-w-[1332px]">
            <div className="mb-16 flex items-end justify-between border-b border-white/15 pb-6 md:mb-24">
              <h2 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                About <span className="font-serif italic text-[#ef2b2d]">me</span>
              </h2>
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-white/45 sm:block">
                Developer · Thinker · Maker
              </span>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-8">
                  <div className="portrait-frame relative aspect-[4/5] overflow-hidden bg-[#1a1111]">
                    <img
                      alt="Ponarassu, independent creative Developer"
                      className="h-full w-full object-cover object-center grayscale"
                      loading="lazy"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8f0f14]/60 via-transparent to-transparent" />
                    <span className="absolute bottom-5 left-5 rounded-full bg-[#ef2b2d] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em]">
                      PONARASSU RS
                    </span>
                  </div>
                  <a
                    className="mt-3 inline-block text-[9px] tracking-wide text-white/30 transition hover:text-white/70"
                    href="https://unsplash.com/@jawfox_photography"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Photo: Alexander Jawfox
                  </a>
                  <a
                    className="group mt-7 flex items-center justify-between border-b border-[#ef2b2d] pb-3 text-[11px] font-bold uppercase tracking-[0.14em]"
                    href="mailto:rspprof6827@gmail.com"
                  >
                    Work with me <Arrow diagonal />
                  </a>
                </div>
              </aside>

              <div className="lg:col-span-8">
                <p className="max-w-4xl text-[clamp(2.3rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.055em]">
                  I&apos;m Ponarassu. I turn complex ideas into{" "}
                  <span className="font-serif font-normal italic text-[#ef2b2d]">
                    simple, human
                  </span>{" "}
                  experiences.
                </p>
                <div className="mt-10 grid gap-7 text-[15px] leading-relaxed text-white/60 sm:grid-cols-2">
                  <p>
                    For over years, I&apos;ve helped founders and college clubs
                    bring meaningful products and brands to life—from first sketch
                    to final launch.
                  </p>
                  <p>
                    My practice sits between strategy and craft. I care about the
                    tiny details, the big idea, and making the process feel clear,
                    collaborative, and energising.
                  </p>
                </div>

                <div className="mt-24">
                  <p className="profile-label">01 / Experience</p>
                  <div className="mt-7 border-t border-white/15">
                    {[
                      ["2026—Now", "Technical Member", "Andropedia"],
                      ["2025—Now", "Technical Member", "DiSAI"],
                      ["2026—2019", "Core Member", "Vaazhkai"],
                    ].map(([year, role, company]) => (
                      <div
                        className="grid gap-2 border-b border-white/15 py-6 transition hover:border-[#ef2b2d] sm:grid-cols-[130px_1fr_auto] sm:items-center"
                        key={role}
                      >
                        <span className="text-[10px] font-bold tracking-[0.12em] text-[#ef2b2d]">
                          {year}
                        </span>
                        <h3 className="text-lg font-semibold tracking-[-0.03em]">
                          {role}
                        </h3>
                        <span className="text-xs text-white/45">{company}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-24 grid gap-16 md:grid-cols-2">
                  <div>
                    <p className="profile-label">02 / Education</p>
                    <div className="mt-7 border-l border-[#ef2b2d] pl-5">
                      <p className="text-lg font-semibold">AISSCE</p>
                      <p className="mt-2 text-sm text-white/50">
                        Velammal Vidyalaya Alapakkam · 2025
                      </p>
                    </div>
                    <div className="mt-8 border-l border-white/20 pl-5">
                      <p className="text-lg font-semibold">Bachelor Of Technology</p>
                      <p className="mt-2 text-sm text-white/50">
                        SRMIST Ramapuram · 2029
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="profile-label">03 / Certifications</p>
                    <div className="mt-7 space-y-4">
                      {certifications.map((certification) => (
                        <button
                          className="group flex w-full items-center gap-3 border border-white/10 bg-white/[0.025] p-4 text-left transition hover:border-[#ef2b2d] hover:bg-[#ef2b2d]/10"
                          key={certification.title}
                          onClick={() => setSelectedCertificate(certification)}
                          type="button"
                        >
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#ef2b2d]">
                            <svg
                              aria-hidden="true"
                              className="size-3"
                              fill="none"
                              viewBox="0 0 12 12"
                            >
                              <path
                                d="m2 6 2.5 2.5L10 3"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </span>
                          <span className="flex-1">
                            <span className="block text-sm font-medium">
                              {certification.title}
                            </span>
                            <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-white/35">
                              Click to view certificate
                            </span>
                          </span>
                          <Arrow diagonal />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-24">
                  <p className="profile-label">04 / Skills & tools</p>
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {[
                      "Web Development",
                      "Figma",
                      "Quick learning",
                      "AI Automation",
                      "AI Leveraging",
                      "Python",
                      "MySQL",
                      "Canva",
                    ].map((skill) => (
                      <span
                        className="rounded-full border border-white/15 px-4 py-2.5 text-[11px] font-semibold tracking-wide text-white/70 transition hover:border-[#ef2b2d] hover:bg-[#ef2b2d] hover:text-white"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#a90f15] px-5 pb-8 pt-20 text-white md:px-10 md:pt-28 lg:px-14">
          <div className="mx-auto max-w-[1332px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
              Have something in mind?
            </p>
            <a
              className="group mt-8 flex items-end justify-between border-b-2 border-white pb-4"
              href="mailto:rspprof6827@gmail.com"
            >
              <span className="text-[clamp(3.2rem,10vw,9rem)] font-medium leading-none tracking-[-0.07em]">
                Let&apos;s talk.
              </span>
              <span className="mb-2 hidden rounded-full border border-white p-4 transition group-hover:rotate-45 group-hover:bg-white group-hover:text-[#a90f15] sm:block">
                <Arrow diagonal />
              </span>
            </a>
            <div className="mt-14 flex flex-col gap-6 text-[10px] font-bold uppercase tracking-[0.14em] sm:flex-row sm:items-center sm:justify-between">
              <span>© 2026 PONARASSU RS</span>
              <div className="flex gap-7">
                <a className="hover:underline" href="https://www.linkedin.com/in/ponarassu-rs-21b57536a/?isSelfProfile=true" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
                <a className="hover:underline" href="https://www.instagram.com/ponarassu._.subramanian/" rel="noreferrer" target="_blank">
                  Instagram
                </a>
                <a className="hover:underline" href="mailto:rspprof6827@gmail.com">
                  Email
                </a>
              </div>
              <a className="hover:underline" href="#top">
                Back to top ↑
              </a>
            </div>
          </div>
        </footer>
      </main>
      {selectedCertificate && (
        <CertificateViewer
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </>
  );
}
