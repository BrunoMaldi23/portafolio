import { useState } from "react";
import profileImg from "./assets/perfil.jpg";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaVuejs,
  FaDocker,
} from "react-icons/fa";

import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

import { SiTailwindcss, SiSupabase } from "react-icons/si";

const navLinks = [
  { label: "Inicio", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Proceso", href: "#process" },
  { label: "Contacto", href: "#contact" },
];

const technologies = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "GitHub", icon: FaGithub, color: "text-zinc-900 dark:text-white" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
  { name: "Vue", icon: FaVuejs, color: "text-green-500" },
  { name: "Docker", icon: FaDocker, color: "text-sky-500" },
  { name: "Python", icon: FaPython, color: "text-blue-600" },
];

const projects = [
  {
    number: "01",
    title: "Cotizador Web",
    type: "Automatización comercial",
    description:
      "Aplicación web para generar cotizaciones de forma rápida y ordenada, optimizando el cálculo de productos, precios y datos comerciales desde una interfaz simple.",
    stack: ["React", "JavaScript", "Tailwind", "Automatización"],
    url: "https://rokko-3d.vercel.app/",
  },
  {
    number: "02",
    title: "Radio Online",
    type: "Streaming web",
    description:
      "Proyecto de radio web con reproducción online, interfaz responsive y estructura pensada para transmitir contenido digital de forma accesible desde navegador.",
    stack: ["HTML", "CSS", "JavaScript", "Streaming"],
    url: "https://radio-labranza-fm.vercel.app/",
  },
  {
    number: "03",
    title: "Geo Traslado",
    type: "Logística y geolocalización",
    description:
      "Solución digital orientada a la gestión de traslados, rutas y seguimiento de servicios mediante una experiencia web clara, funcional y enfocada en operación.",
    stack: ["React", "FastAPI", "Mapas", "Optimización"],
    url: "#",
  },
  {
    number: "04",
    title: "SaaS de Gestión de Proyectos",
    type: "Plataforma SaaS",
    description:
      "Plataforma web para administrar proyectos, tareas, clientes y flujos de trabajo en equipo, conectando una landing comercial con un sistema de gestión interno.",
    stack: ["React", "SaaS", "Dashboard", "Productividad"],
    url: "https://workpilot-app.netlify.app/",
  },
];

const process = [
  {
    number: "01",
    title: "Detectar",
    text: "Entiendo el problema, el usuario y el objetivo antes de escribir una línea de código.",
  },
  {
    number: "02",
    title: "Diseñar",
    text: "Ordeno la experiencia, los flujos principales y la estructura visual de la solución.",
  },
  {
    number: "03",
    title: "Construir",
    text: "Desarrollo interfaces limpias, responsivas y reutilizables con foco en funcionalidad.",
  },
  {
    number: "04",
    title: "Mejorar",
    text: "Itero detalles de diseño, rendimiento, usabilidad y consistencia para elevar el resultado.",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pageClass = darkMode
    ? "dark min-h-screen bg-[#0A0F1A] text-[#E8EEF9] transition-colors duration-500"
    : "min-h-screen bg-[#F7F3EA] text-[#172033] transition-colors duration-500";

  const mutedText = darkMode ? "text-[#93A4BC]" : "text-[#647184]";

  const cardClass = darkMode
    ? "border border-[#1E293B] bg-[#0F172A]/75"
    : "border border-[#E7DDCD]/70 bg-[#FFFDF8]/75 shadow-sm";

  return (
    <main className={pageClass}>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={
            darkMode
              ? "absolute right-0 top-10 h-[26rem] w-[26rem] rounded-full bg-cyan-400/10 blur-[140px]"
              : "absolute right-0 top-16 h-96 w-96 rounded-full bg-teal-400/20 blur-[120px]"
          }
        />

        <div
          className={
            darkMode
              ? "absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-[110px]"
              : "absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-300/25 blur-[100px]"
          }
        />
      </div>

      <header
        className={
          darkMode
            ? "fixed left-1/2 top-3 z-50 w-[94%] max-w-6xl -translate-x-1/2 rounded-2xl border border-[#1E293B] bg-[#0F172A]/85 px-4 py-3 backdrop-blur-xl sm:top-4 sm:w-[92%] sm:px-5"
            : "fixed left-1/2 top-3 z-50 w-[94%] max-w-6xl -translate-x-1/2 rounded-2xl border border-[#E7DDCD]/80 bg-[#FFFDF8]/85 px-4 py-3 shadow-sm backdrop-blur-xl sm:top-4 sm:w-[92%] sm:px-5"
        }
      >
        <nav className="relative flex items-center justify-between gap-3">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="flex min-w-0 flex-col leading-none"
          >
            <span className="truncate text-[14px] font-extrabold tracking-tight sm:text-[16px]">
              Bruno Díaz S
              <span className="text-teal-700 dark:text-cyan-400">.</span>
            </span>

            <span
              className={
                darkMode
                  ? "mt-1 hidden text-[11px] font-medium text-[#93A4BC] sm:block"
                  : "mt-1 hidden text-[11px] font-medium text-[#647184] sm:block"
              }
            >
              Frontend · Web · Automatización
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-bold lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="opacity-70 transition hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={
                darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
              }
              className={
                darkMode
                  ? "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#243244] bg-[#111C2F] text-cyan-300 transition hover:scale-105 hover:bg-[#162339] sm:h-11 sm:w-11"
                  : "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#DCCFBA] bg-white/70 text-teal-700 transition hover:scale-105 hover:bg-white sm:h-11 sm:w-11"
              }
            >
              {darkMode ? (
                <FaSun className="text-base sm:text-lg" />
              ) : (
                <FaMoon className="text-base sm:text-lg" />
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              className={
                darkMode
                  ? "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#243244] bg-[#111C2F] text-[#E8EEF9] transition hover:scale-105 hover:bg-[#162339] lg:hidden"
                  : "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#DCCFBA] bg-white/70 text-[#172033] transition hover:scale-105 hover:bg-white lg:hidden"
              }
            >
              {menuOpen ? (
                <FaXmark className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </button>
          </div>

          {menuOpen && (
            <div
              className={
                darkMode
                  ? "absolute left-0 right-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-2xl border border-[#1E293B] bg-[#0F172A]/95 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden"
                  : "absolute left-0 right-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-2xl border border-[#E7DDCD]/80 bg-[#FFFDF8]/95 p-2 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden"
              }
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    darkMode
                      ? "flex rounded-xl px-4 py-3 text-sm font-bold text-[#E8EEF9] transition hover:bg-white/5"
                      : "flex rounded-xl px-4 py-3 text-sm font-bold text-[#172033] transition hover:bg-[#F7F3EA]"
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      <section
        id="about"
        className="relative overflow-hidden px-5 pt-28 sm:px-6"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 pb-14 pt-8 sm:gap-12 sm:pt-12 md:grid-cols-12 md:gap-10 md:pb-16 md:pt-20">
          <div className="order-2 md:order-1 md:col-span-7">
            <div
              className={
                darkMode
                  ? "mb-5 inline-flex rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-bold text-cyan-300 shadow-sm backdrop-blur sm:mb-6"
                  : "mb-5 inline-flex rounded-full border border-teal-700/15 bg-white/50 px-4 py-2 text-xs font-bold text-teal-800 shadow-sm backdrop-blur sm:mb-6"
              }
            >
              Web Developer · Ethical Hacking · IoT
            </div>

            <p className="mb-3 text-base font-bold tracking-tight text-teal-700 dark:text-cyan-400 sm:mb-4 md:text-lg">
              Hola, soy Bruno.
            </p>

            <h1 className="max-w-3xl text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#172033] dark:text-[#E8EEF9] min-[390px]:text-[2.7rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.7rem]">
              Construyo el futuro,
              <br />
              una línea a la vez.
            </h1>

            <p
              className={`mt-5 max-w-2xl text-[15px] leading-7 sm:mt-6 sm:text-base sm:leading-8 md:text-lg ${mutedText}`}
            >
              Construyo aplicaciones web por el día, exploro{" "}
              <strong className="font-bold text-[#172033] dark:text-[#E8EEF9]">
                hacking ético
              </strong>
              ,{" "}
              <strong className="font-bold text-[#172033] dark:text-[#E8EEF9]">
                IoT
              </strong>{" "}
              y{" "}
              <strong className="font-bold text-[#172033] dark:text-[#E8EEF9]">
                automatización
              </strong>{" "}
              por las noches. Ingeniería en Informática de por medio.
            </p>

            <p className="mt-4 max-w-xl text-base font-bold leading-7 text-teal-700 dark:text-cyan-400 sm:mt-5 md:text-lg">
              Si se puede romper, lo voy a intentar.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-teal-700 px-6 py-3 text-center text-sm font-bold text-white shadow-[0_18px_38px_rgba(15,118,110,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-teal-800 dark:bg-cyan-400 dark:text-[#08111F] dark:hover:bg-cyan-300"
              >
                Ver proyectos
              </a>

              <a
                href="#contact"
                className={
                  darkMode
                    ? "rounded-2xl border border-[#2B3A4C] bg-white/5 px-6 py-3 text-center text-sm font-bold text-[#C6D1E3] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
                    : "rounded-2xl border border-[#E7DDCD]/80 bg-white/40 px-6 py-3 text-center text-sm font-bold text-[#37455A] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-teal-700"
                }
              >
                Hablemos
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:col-span-5">
            <div className="relative grid h-[17rem] w-[17rem] place-items-center sm:h-[20rem] sm:w-[20rem] md:h-[23rem] md:w-[23rem]">
              <div
                className={
                  darkMode
                    ? "absolute inset-8 rounded-full bg-cyan-400/15 blur-[80px]"
                    : "absolute inset-8 rounded-full bg-teal-400/20 blur-[80px]"
                }
              />

              <div className="profile-ring absolute inset-5 rounded-full p-[2px]" />

              <img
                src={profileImg}
                alt="Foto de perfil de Bruno"
                className={
                  darkMode
                    ? "relative h-52 w-52 rounded-full border-4 border-[#1E293B] object-cover object-center shadow-[0_30px_80px_rgba(34,211,238,0.14)] sm:h-64 sm:w-64 md:h-72 md:w-72"
                    : "relative h-52 w-52 rounded-full border-4 border-white/70 object-cover object-center shadow-[0_30px_80px_rgba(15,118,110,0.16)] sm:h-64 sm:w-64 md:h-72 md:w-72"
                }
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl pb-14 md:pb-[4.5rem]">
          <div
            className={
              darkMode
                ? "border-t border-[#1E293B] pt-6"
                : "border-t border-[#E7DDCD]/70 pt-6"
            }
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <p
                className={`text-[11px] font-black uppercase tracking-[0.24em] ${mutedText}`}
              >
                Tecnologías
              </p>

              <span
                className={
                  darkMode
                    ? "hidden h-px flex-1 bg-gradient-to-r from-[#1E293B] to-transparent sm:block"
                    : "hidden h-px flex-1 bg-gradient-to-r from-[#E7DDCD] to-transparent sm:block"
                }
              />
            </div>

            <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className={
                      darkMode
                        ? "group flex h-16 items-center gap-3 rounded-2xl border border-[#1E293B] bg-[#111B2D]/75 px-4 text-sm font-bold text-[#E8EEF9] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-[#162133]"
                        : "group flex h-16 items-center gap-3 rounded-2xl border border-[#E7DDCD]/70 bg-[#FFFDF8]/75 px-4 text-sm font-bold text-[#172033] shadow-[0_10px_28px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-[#FFFDF8]"
                    }
                  >
                    <span
                      className={
                        darkMode
                          ? "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0A111F]"
                          : "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F1E8DA]"
                      }
                    >
                      <Icon className={`text-2xl ${tech.color}`} />
                    </span>

                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end md:gap-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-teal-700 dark:text-cyan-400">
              Proyectos
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Aplicaciones, productos y soluciones digitales.
            </h2>
          </div>

          <p className={`max-w-sm text-sm leading-7 sm:text-base ${mutedText}`}>
            Proyectos pensados desde la utilidad: automatización, operación,
            gestión y experiencias web claras.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group rounded-[1.75rem] p-5 transition duration-300 hover:-translate-y-2 sm:rounded-[2rem] sm:p-6 ${cardClass}`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <span className="text-4xl font-black text-teal-700/20 dark:text-cyan-400/20 sm:text-5xl">
                  {project.number}
                </span>

                <span className="rounded-full border border-teal-700/15 px-3 py-1 text-[11px] font-black text-teal-700 dark:border-cyan-400/20 dark:text-cyan-400 sm:text-xs">
                  {project.type}
                </span>
              </div>

              <h3 className="text-xl font-black sm:text-2xl">
                {project.title}
              </h3>

              <p className={`mt-4 text-sm leading-7 sm:text-base ${mutedText}`}>
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className={
                      darkMode
                        ? "rounded-full border border-[#1E293B] bg-[#0A111F]/80 px-3 py-1 text-xs sm:text-sm"
                        : "rounded-full border border-[#E7DDCD] bg-[#F7F3EA]/80 px-3 py-1 text-xs sm:text-sm"
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    darkMode
                      ? "inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-[#08111F] transition hover:-translate-y-1 hover:bg-cyan-300"
                      : "inline-flex items-center gap-2 rounded-2xl bg-teal-700 px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(15,118,110,0.20)] transition hover:-translate-y-1 hover:bg-teal-800"
                  }
                >
                  Visitar
                  <FaArrowUpRightFromSquare className="text-xs" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process"
        className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end md:gap-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-teal-700 dark:text-cyan-400">
              Proceso
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Del problema a una solución usable.
            </h2>
          </div>

          <p className={`max-w-sm text-sm leading-7 sm:text-base ${mutedText}`}>
            Trabajo con una lógica simple: entender, diseñar, construir y
            mejorar. Sin perder de vista al usuario final.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => (
            <article
              key={item.number}
              className={
                darkMode
                  ? "group relative overflow-hidden rounded-[1.75rem] border border-[#1E293B] bg-[#0F172A]/80 p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/35 hover:bg-[#132036] sm:rounded-[2rem] sm:p-6"
                  : "group relative overflow-hidden rounded-[1.75rem] border border-[#E7DDCD]/70 bg-[#FFFDF8]/75 p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-[0_18px_40px_rgba(15,118,110,0.10)] sm:rounded-[2rem] sm:p-6"
              }
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-teal-500/10 blur-2xl dark:bg-cyan-400/10" />

              <span className="text-sm font-black uppercase tracking-[0.25em] text-teal-700 dark:text-cyan-400">
                {item.number}
              </span>

              <h3 className="mt-6 text-xl font-black tracking-tight sm:mt-8 sm:text-2xl">
                {item.title}
              </h3>

              <p className={`mt-4 text-sm leading-7 ${mutedText}`}>
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div
          className={
            darkMode
              ? "overflow-hidden rounded-[2rem] border border-[#1E293B] bg-[#0F172A]/85 p-6 sm:rounded-[2.5rem] sm:p-8 md:p-14"
              : "overflow-hidden rounded-[2rem] border border-[#E7DDCD]/70 bg-[#FFFDF8]/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[2.5rem] sm:p-8 md:p-14"
          }
        >
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-teal-700 dark:text-cyan-400">
                Contacto
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:mt-5 md:text-5xl">
                ¿Tienes una idea? Construyamos algo útil.
              </h2>

              <p
                className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 ${mutedText}`}
              >
                Disponible para colaborar en proyectos web, prototipos,
                automatizaciones, dashboards o soluciones digitales con foco en
                usuarios reales.
              </p>
            </div>

            <div
              className={
                darkMode
                  ? "rounded-[1.75rem] border border-[#1E293B] bg-[#0A111F]/85 p-4 sm:rounded-[2rem] sm:p-5"
                  : "rounded-[1.75rem] border border-[#E7DDCD]/70 bg-[#F7F3EA]/80 p-4 sm:rounded-[2rem] sm:p-5"
              }
            >
              <a
                href="mailto:correo@ejemplo.com"
                className={
                  darkMode
                    ? "flex items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-6 py-4 text-center text-sm font-black text-[#08111F] transition hover:-translate-y-1 hover:bg-cyan-300 sm:text-base"
                    : "flex items-center justify-center gap-3 rounded-2xl bg-teal-700 px-6 py-4 text-center text-sm font-black text-white shadow-[0_18px_38px_rgba(15,118,110,0.22)] transition hover:-translate-y-1 hover:bg-teal-800 sm:text-base"
                }
              >
                <FaEnvelope />
                Enviar correo
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className={
                  darkMode
                    ? "mt-4 flex items-center justify-center gap-3 rounded-2xl border border-[#1E293B] px-6 py-4 text-center text-sm font-black text-[#E8EEF9] transition hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/5 sm:text-base"
                    : "mt-4 flex items-center justify-center gap-3 rounded-2xl border border-[#E7DDCD] bg-white/40 px-6 py-4 text-center text-sm font-black text-[#172033] transition hover:-translate-y-1 hover:bg-white sm:text-base"
                }
              >
                <FaGithub />
                Ver GitHub
              </a>

              <p className={`mt-5 text-center text-xs sm:text-sm ${mutedText}`}>
                Respondo proyectos, ideas y colaboraciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer
        className={
          darkMode
            ? "relative border-t border-[#1E293B] px-5 py-8 text-center text-xs text-[#93A4BC] sm:px-6 sm:text-sm"
            : "relative border-t border-[#E7DDCD] px-5 py-8 text-center text-xs text-[#647184] sm:px-6 sm:text-sm"
        }
      >
        © 2026 Bruno Díaz S — Portfolio desarrollado con React y Tailwind CSS.
      </footer>
    </main>
  );
}

export default App;
