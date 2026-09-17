import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Factory, MapPin, Printer, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/studioData';

export const WorkDetailPage: React.FC = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-28 px-4 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#081c2d]/10 bg-white p-8 shadow-sm">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1f7a63]">Work</p>
          <h1 className="mt-3 font-serif text-4xl text-[#081c2d]">Project not found</h1>
          <p className="mt-4 text-[#081c2d]/70">
            The selected project could not be found. Return to the portfolio to explore ShelterBrand’s branding and print work.
          </p>
          <Link
            to="/work"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#081c2d] px-6 py-3 text-xs font-medium uppercase tracking-wider text-[#f5f7fa]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-28">
      <section className="px-4 pt-8 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <Link to="/work" className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.24em] text-[#1f7a63] hover:text-[#081c2d]">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to portfolio
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#1f7a63] font-semibold">
                Case Study / {project.category}
              </p>
              <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#081c2d] leading-[0.95] letter-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#081c2d]/75 max-w-2xl">
                {project.client} · {project.industry} · {project.year}
              </p>
            </div>

            <div className="rounded-3xl border border-[#081c2d]/10 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#081c2d]/60">
                <MapPin className="h-3.5 w-3.5 text-[#1f7a63]" />
                Nairobi, Kenya
              </div>
              <div className="mt-4 space-y-3 text-sm text-[#081c2d]/75">
                <p><span className="font-semibold text-[#081c2d]">Services:</span> {project.services.join(', ')}</p>
                <p><span className="font-semibold text-[#081c2d]">Production:</span> {project.printSpecifications.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 pt-10 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-[#081c2d]/10 bg-white shadow-[0_18px_40px_rgba(8,28,45,0.06)]">
          <img
            src={project.image}
            alt={`${project.title} ${project.category} project for ${project.client} in Nairobi`}
            className="h-[320px] w-full object-cover sm:h-[440px]"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-3xl border border-[#081c2d]/10 bg-[#f5f7fa] p-6 sm:p-8">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1f7a63]">Overview</p>
              <p className="mt-4 text-lg leading-relaxed text-[#081c2d]">{project.description}</p>

              <div className="mt-8 rounded-2xl bg-white p-5 border border-[#081c2d]/10">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#081c2d]/60">Challenge</p>
                <p className="mt-3 text-sm leading-relaxed text-[#081c2d]/75">{project.challenge}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#081c2d]/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#1f7a63]">
                <Factory className="h-3.5 w-3.5" />
                Scope
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.disciplines.map((discipline) => (
                  <span
                    key={`${project.id}-${discipline}`}
                    className="rounded-full bg-[#081c2d]/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.08em] text-[#081c2d]/70"
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#081c2d]/10 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#1f7a63]">
                <Printer className="h-3.5 w-3.5" />
                Production details
              </div>
              <ul className="mt-5 space-y-3">
                {project.printSpecifications.map((spec) => (
                  <li key={spec} className="flex items-start gap-3 text-sm leading-relaxed text-[#081c2d]/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1f7a63]" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#081c2d]/10 bg-[#081c2d] p-6 sm:p-8 text-[#f5f7fa]">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#2dd4bf]">
                <Sparkles className="h-3.5 w-3.5" />
                Result
              </div>
              <p className="mt-5 text-lg leading-relaxed text-[#f5f7fa]">{project.result}</p>
              <p className="mt-6 text-sm leading-relaxed text-[#f5f7fa]/75">{project.impact}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-[#081c2d]/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#081c2d]/55">Interested in a similar project?</p>
              <p className="mt-1 text-sm text-[#081c2d]/70">Discuss your branding, signage, packaging or print requirement with ShelterBrand.</p>
            </div>
            <Link
              to="/contact"
              state={{ projectTitle: project.title, service: project.category }}
              className="inline-flex items-center gap-2 rounded-full bg-[#081c2d] px-6 py-3 text-xs font-medium uppercase tracking-wider text-[#f5f7fa] transition-colors hover:bg-[#1f7a63]"
            >
              <span>Inquire</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
