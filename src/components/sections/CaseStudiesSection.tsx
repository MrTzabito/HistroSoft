import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { CASE_STUDIES } from '../../data/caseStudies';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="casos" className="py-20 md:py-28 bg-[color:var(--surface-sunken)] border-b-2 border-[color:var(--border-subtle)]">
      <Container>
        {/* Split Section Header */}
        <SectionHeader
          title="Resultados cuantificados en producción."
          description="Sistemas reales operando en empresas con métricas de impacto comprobables tras su despliegue."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CASE_STUDIES.map((study, index) => (
            <div
              key={study.id}
              data-reveal
              style={{ '--reveal-delay': `${index * 100}ms` } as React.CSSProperties}
              className="flex flex-col rounded-[22px] bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] p-6 md:p-8 card-interactive"
            >
              {/* Industry Tag */}
              <div className="mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[color:var(--accent)] bg-[color:var(--accent-subtle)] px-3 py-1.5 rounded-full border border-[color:var(--accent)]/30 inline-block whitespace-nowrap overflow-hidden text-ellipsis">
                  {study.clientIndustry}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-display font-bold text-lg md:text-xl text-[color:var(--text-primary)] tracking-tight mb-4 leading-snug">
                {study.headline}
              </h3>

              {/* Challenge & Solution */}
              <div className="space-y-3 mb-6 text-xs text-[color:var(--text-muted)] leading-relaxed">
                <p>
                  <strong className="text-[color:var(--text-secondary)]">Desafío:</strong> {study.challenge}
                </p>
                <p>
                  <strong className="text-[color:var(--text-secondary)]">Solución:</strong> {study.solution}
                </p>
              </div>

              {/* Quantitative Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-[color:var(--border-subtle)] mb-6 text-center">
                {study.results.map((res, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-mono font-bold text-lg text-[color:var(--accent)] tracking-tight">
                      {res.metric}
                    </div>
                    <div className="text-[10px] text-[color:var(--text-faint)] leading-tight">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Attributable Quote */}
              <div className="mt-auto space-y-3 bg-[color:var(--surface-sunken)] p-4 rounded-[12px] border border-[color:var(--border-subtle)]">
                <p className="text-xs italic text-[color:var(--text-secondary)] leading-relaxed">
                  "{study.clientQuote.quote}"
                </p>
                <div className="pt-1 text-[11px] text-[color:var(--text-faint)]">
                  <span className="font-semibold text-[color:var(--text-primary)] block">
                    {study.clientQuote.author}
                  </span>
                  <span>{study.clientQuote.role}, {study.clientQuote.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
