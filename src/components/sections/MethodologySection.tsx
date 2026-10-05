import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { METHODOLOGY_STAGES } from '../../data/methodology';
import { FileText, CheckCircle2 } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  return (
    <section id="metodologia" className="py-20 md:py-28 border-b border-[color:var(--border-subtle)]">
      <Container>
        {/* Split Section Header */}
        <SectionHeader
          title="Cuatro etapas, un responsable."
          description="Sin desvíos en el cronograma ni sobrecostos imprevistos. Cada fase termina con un artefacto de ingeniería validado por tu equipo."
        />

        {/* 4 Stages Vertical Grid with 12-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-6">
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-28 space-y-4 pr-6">
              <span className="text-xs uppercase font-mono tracking-wider text-[color:var(--text-faint)] block">
                Control de proyecto
              </span>
              <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">
                Asignamos un Líder Técnico único durante todo el ciclo de vida, con reuniones semanales de sincronización técnica de 30 minutos.
              </p>
              <div className="pt-2 text-xs font-mono text-[color:var(--green)]">
                100% entregas en fecha
              </div>
            </div>
          </div>

          <div className="md:col-span-9 space-y-6">
            {METHODOLOGY_STAGES.map((stage) => (
              <div
                key={stage.step}
                data-reveal
                className="p-6 md:p-8 rounded-[22px] bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] card-interactive"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[color:var(--border-subtle)]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[color:var(--accent-fg)] bg-[color:var(--accent)] px-2.5 py-0.5 rounded-full">
                      Etapa {stage.step}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[color:var(--text-primary)] tracking-tight">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[color:var(--text-faint)] bg-[color:var(--surface-sunken)] px-3 py-1 rounded-full border border-[color:var(--border-subtle)] self-start sm:self-auto">
                    {stage.duration}
                  </span>
                </div>

                <p className="text-sm text-[color:var(--text-muted)] mb-6 leading-relaxed">
                  {stage.description}
                </p>

                {/* Key Milestones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {stage.keyMilestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[color:var(--text-secondary)] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[color:var(--accent)] shrink-0 mt-0.5" />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverable Document */}
                <div className="pt-4 border-t border-[color:var(--border-subtle)]/60 flex items-center gap-2.5 text-xs text-[color:var(--text-faint)]">
                  <FileText className="w-4 h-4 text-[color:var(--blue)] shrink-0" />
                  <span className="font-medium text-[color:var(--text-primary)]">Documento de salida:</span>
                  <span className="font-mono text-[color:var(--text-muted)]">{stage.deliverableDocument}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
