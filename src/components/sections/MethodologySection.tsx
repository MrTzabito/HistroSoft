import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { METHODOLOGY_STAGES } from '../../data/methodology';
import { FileText, CheckCircle2 } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  return (
    <section id="metodologia" className="py-20 md:py-28 border-b border-[#2B2B30]">
      <Container>
        {/* Split Section Header */}
        <SectionHeader
          number="02"
          eyebrow="Metodología"
          title="Cuatro etapas, un responsable."
          description="Sin desvíos en el cronograma ni sobrecostos imprevistos. Cada fase termina con un artefacto de ingeniería validado por tu equipo."
        />

        {/* 4 Stages Vertical Grid with 12-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-6">
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-28 space-y-4 pr-6">
              <span className="text-xs uppercase font-mono tracking-wider text-[#8C877E] block">
                Control de proyecto
              </span>
              <p className="text-xs text-[#B5B0A6] leading-relaxed">
                Asignamos un Líder Técnico único durante todo el ciclo de vida, con reuniones semanales de sincronización técnica de 30 minutos.
              </p>
              <div className="pt-2 text-xs font-mono text-[#8FD694]">
                100% entregas en fecha
              </div>
            </div>
          </div>

          <div className="md:col-span-9 space-y-6">
            {METHODOLOGY_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="p-6 md:p-8 rounded-[22px] bg-[#17171A] border border-[#2B2B30] card-interactive"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#2B2B30]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#17130A] bg-[#F5B82E] px-2.5 py-0.5 rounded-full">
                      Etapa {stage.step}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#F2EEE6] tracking-tight">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#8C877E] bg-[#121214] px-3 py-1 rounded-full border border-[#2B2B30] self-start sm:self-auto">
                    {stage.duration}
                  </span>
                </div>

                <p className="text-sm text-[#B5B0A6] mb-6 leading-relaxed">
                  {stage.description}
                </p>

                {/* Key Milestones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {stage.keyMilestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#D8D3C9] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B82E] shrink-0 mt-0.5" />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverable Document */}
                <div className="pt-4 border-t border-[#2B2B30]/60 flex items-center gap-2.5 text-xs text-[#8C877E]">
                  <FileText className="w-4 h-4 text-[#7CC4FF] shrink-0" />
                  <span className="font-medium text-[#F2EEE6]">Documento de salida:</span>
                  <span className="font-mono text-[#B5B0A6]">{stage.deliverableDocument}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
