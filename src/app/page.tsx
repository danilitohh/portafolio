"use client";

import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import SkillCard from "@/components/SkillCard";
import ContactButtons from "@/components/ContactButtons";
import Carousel from "@/components/Carousel";

const navItems = [
  { href: "#sobre-mi", label: "Perfil" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#formacion", label: "Formación" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

const experiences = [
  {
    title: "Delineante Arquitectónico Freelance",
    company: "Independiente",
    period: "2025 – Actualidad",
    description: [
      "Remodelación de viviendas y organización de planos.",
      "Levantamientos As-Built y modelado de 2D a 3D.",
      "Generación de modelos BIM, documentación técnica y detalles constructivos.",
    ],
    technologies: [
      "As-Built",
      "Modelado BIM",
      "Planimetría",
      "Documentación técnica",
      "Detalles constructivos",
      "Remodelación residencial",
    ],
  },
  {
    title: "Delineante / Visualizador Arquitectónico",
    company: "Total Civil Construction (TCCE)",
    period: "2025 (2 meses)",
    description: [
      "Visualización arquitectónica en tiempo real con Unreal Engine.",
      "Modelado 3D para proyectos de ingeniería.",
      "Desarrollo de entornos simulados para representación del proyecto.",
    ],
    technologies: [
      "Unreal Engine",
      "Visualización en tiempo real",
      "Modelado 3D",
      "Entornos simulados",
      "Representación de proyecto",
    ],
  },
  {
    title: "Modelador BIM",
    company: "Interventorías y Consultorías S.A.S",
    period: "Marzo/2024 – Noviembre/2024",
    description: [
      "Modelado BIM arquitectónico e ingenieril.",
      "Coordinación interdisciplinaria y documentación técnica.",
      "Optimización de procesos y detección de interferencias.",
    ],
    technologies: [
      "Revit",
      "Navisworks",
      "Coordinación BIM",
      "Clash Detection",
      "Documentación técnica",
      "Procesos constructivos",
    ],
  },
  {
    title: "Modelador BIM",
    company: "Postobón S.A.",
    period: "Junio/2023 – Enero/2024",
    description: [
      "Desarrollo de diseños arquitectónicos y modelos BIM.",
      "Documentación técnica y coordinación interdisciplinaria.",
      "Optimización de la eficiencia del proyecto.",
    ],
    technologies: [
      "Revit",
      "AutoCAD",
      "Modelado BIM",
      "Coordinación interdisciplinaria",
      "Documentación técnica",
      "Visualización 3D",
    ],
  },
  {
    title: "Dibujante Arquitectónico",
    company: "Jardín Botánico de Medellín",
    period: "Febrero/2019 – Junio/2019",
    description: [
      "Desarrollo de planos y diseños arquitectónicos y urbanísticos con enfoque sostenible.",
      "Representaciones gráficas detalladas para comunicación técnica.",
      "Elaboración de reportes técnicos.",
    ],
    technologies: [
      "AutoCAD",
      "Diseño urbano",
      "Representación gráfica",
      "Enfoque sostenible",
      "Reportes técnicos",
    ],
  },
];

const skills = [
  {
    category: "BIM / CAD",
    skills: [
      { name: "Revit", level: 100 },
      { name: "Navisworks", level: 80 },
      { name: "Civil 3D", level: 60 },
      { name: "AutoCAD", level: 80 },
    ],
  },
  {
    category: "Modelado 3D",
    skills: [
      { name: "SketchUp", level: 100 },
      { name: "Inventor", level: 60 },
    ],
  },
  {
    category: "Render / Visualización",
    skills: [
      { name: "Enscape", level: 100 },
      { name: "Lumion", level: 80 },
      { name: "V-Ray", level: 60 },
      { name: "Unreal Engine", level: 60 },
    ],
  },
  {
    category: "Diseño / Producción",
    skills: [
      { name: "Illustrator", level: 60 },
      { name: "Photoshop", level: 60 },
      { name: "Office Suite", level: 60 },
    ],
  },
];

const education = [
  {
    title: "Tecnólogo en Delineante de Arquitectura e Ingeniería",
    institution: "Institución Universitaria Colegio Mayor de Antioquia",
    year: "2023",
  },
  {
    title: "Técnico en Dibujo Arquitectónico",
    institution: "SENA (Servicio Nacional de Aprendizaje)",
    year: "2018",
  },
  {
    title: "Técnico en Publicidad y Diseño Gráfico",
    institution: "Cedenorte",
    year: "2018",
  },
];

const competencies = [
  "Coordinación BIM",
  "Lectura e interpretación de planos",
  "Modelado paramétrico",
  "Resolución de interferencias",
];

const languages = ["Español nativo", "Inglés básico (en formación)"];

const quickLinks = [
  { href: "mailto:sr.cardona20@gmail.com", label: "sr.cardona20@gmail.com" },
  { href: "tel:+573013680010", label: "+57 301 368 00 10" },
  {
    href: "https://www.linkedin.com/in/santiago-ram%C3%ADrez-cardona",
    label: "LinkedIn",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <nav className="fixed z-50 w-full bg-white/80 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="font-helvetica text-2xl font-bold text-gray-900">
                Portafolio / Santiago Ramírez
              </h1>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  if (menu) {
                    menu.classList.toggle("hidden");
                  }
                }}
              >
                <span className="sr-only">Abrir menú principal</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="relative h-screen overflow-hidden">
        <Carousel />
      </div>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 font-helvetica text-5xl font-bold text-gray-900 md:text-6xl">
              Santiago Ramírez
            </h2>
            <h3 className="font-helvetica text-2xl text-gray-600 md:text-3xl">
              Delineante Arquitectónico | Modelador BIM | Visualizador 3D
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Medellín, Antioquia
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {quickLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="sobre-mi"
        className="py-20"
        style={{ backgroundColor: "rgb(237,246,249)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-helvetica text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Perfil Profesional
            </h2>
          </div>
          <div
            className="prose prose-lg mx-auto text-gray-800"
            style={{
              fontSize: "1.25rem",
              lineHeight: "2rem",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            <p className="mb-6 font-medium">
              Delineante con enfoque en BIM, modelado y procesos
              constructivos, apasionado por la arquitectura, el arte y la
              tecnología.
            </p>
            <p className="mb-6 font-medium">
              Perfil autodidacta, creativo y orientado a la mejora continua,
              con experiencia en documentación técnica, levantamientos As-Built,
              coordinación BIM y representación arquitectónica.
            </p>
            <p className="font-medium">
              Mi interés está en seguir desarrollándome como arquitecto
              integral, aportando precisión técnica, criterio visual y orden en
              cada etapa del proyecto.
            </p>
          </div>
        </div>
      </section>

      <section id="experiencia" className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-helvetica text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Experiencia Laboral
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Recorrido reciente en delineación, BIM y visualización
              arquitectónica
            </p>
          </div>
          <div className="mt-12 space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="formacion"
        className="py-20"
        style={{ backgroundColor: "rgb(247, 250, 252)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-helvetica text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Formación
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Base técnica en arquitectura, dibujo y producción visual
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {education.map((item) => (
              <article
                key={`${item.title}-${item.year}`}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "rgb(29, 134, 118)" }}
                >
                  {item.year}
                </p>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.institution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="habilidades"
        className="py-20"
        style={{ backgroundColor: "rgb(237, 246, 249)", color: "#111" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-helvetica text-4xl font-extrabold text-black sm:text-5xl">
              Habilidades y Competencias
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              Herramientas, fortalezas técnicas e idiomas
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <SkillCard {...skills[0]} />
              <SkillCard {...skills[1]} />
            </div>
            <div className="space-y-8">
              <SkillCard {...skills[2]} />
              <SkillCard {...skills[3]} />
            </div>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Competencias Clave
              </h3>
              <ul className="space-y-3">
                {competencies.map((item) => (
                  <li key={item} className="flex items-start text-gray-700">
                    <span
                      className="mt-2 mr-3 h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: "rgb(0, 109, 119)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Idiomas
              </h3>
              <ul className="space-y-3">
                {languages.map((item) => (
                  <li key={item} className="flex items-start text-gray-700">
                    <span
                      className="mt-2 mr-3 h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: "rgb(0, 109, 119)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-helvetica text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contacto
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Medellín, Antioquia. Disponible para proyectos de modelado BIM,
              delineación y visualización arquitectónica.
            </p>
          </div>
          <ContactButtons />
        </div>
      </section>
    </main>
  );
}
