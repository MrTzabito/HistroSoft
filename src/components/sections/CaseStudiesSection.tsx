import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { CASE_STUDIES } from '../../data/caseStudies';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="casos" className="py-20 md:py-28 border-b border-[#2B2B30]">
      <Container>
        {/* Split Section Header */}
        <SectionHeader
          eyebrow="Casos de estudio"
          title="Resultados cuantificados en producción."
          description="Sistemas reales operando en empresas con métricas de impacto comprobables tras su despliegue."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="flex flex-col rounded-[22px] bg-[#17171A] border border-[#2B2B30] p-6 md:p-8 card-interactive"
            >
              {/* Industry Tag */}
              <div className="mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#F5B82E] bg-[#2A2316] px-2.5 py-1 rounded-full border border-[#F5B82E]/30">
                  {study.clientIndustry}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-display font-bold text-lg md:text-xl text-[#F2EEE6] tracking-tight mb-4 leading-snug">
                {study.headline}
              </h3>

              {/* Challenge & Solution */}
              <div className="space-y-3 mb-6 text-xs text-[#B5B0A6] leading-relaxed">
                <p>
                  <strong className="text-[#D8D3C9]">Desafío:</strong> {study.challenge}
                </p>
                <p>
                  <strong className="text-[#D8D3C9]">Solución:</strong> {study.solution}
                </p>
              </div>

              {/* Quantitative Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-[#2B2B30] mb-6 text-center">
                {study.results.map((res, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-mono font-bold text-lg text-[#F5B82E] tracking-tight">
                      {res.metric}
                    </div>
                    <div className="text-[10px] text-[#8C877E] leading-tight">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Attributable Quote */}
              <div className="mt-auto space-y-3 bg-[#121214] p-4 rounded-[12px] border border-[#2B2B30]">
                <p className="text-xs italic text-[#D8D3C9] leading-relaxed">
                  "{study.clientQuote.quote}"
                </p>
                <div className="pt-1 text-[11px] text-[#8C877E]">
                  <span className="font-semibold text-[#F2EEE6] block">
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
