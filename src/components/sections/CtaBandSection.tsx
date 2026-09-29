import React from 'react';
import { Container } from '../layout/Container';
import { ArrowRight, PhoneCall } from 'lucide-react';

export interface CtaBandSectionProps {
  onOpenAgenda: () => void;
}

export const CtaBandSection: React.FC<CtaBandSectionProps> = ({ onOpenAgenda }) => {
  return (
    <section className="py-16 md:py-20 bg-[#0D0D0F]">
      <Container>
        {/* Full-bleed style CTA Panel in Brand Gold (#F5B82E) with dark ink text (#17130A) */}
        <div className="rounded-[22px] bg-[#F5B82E] text-[#17130A] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[12px] font-mono font-bold uppercase tracking-[0.18em] text-[#17130A]/80 block">
                Diagnóstico técnico sin costo
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#17130A] tracking-tight leading-[1.05] text-balance">
                Cuéntanos sobre tu próximo sistema o integración.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#17130A]/90 max-w-2xl leading-relaxed">
                Revisamos tus requerimientos, flujos actuales y viabilidad de integración en una videollamada de 20 minutos con un ingeniero de software.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
              <button
                onClick={onOpenAgenda}
                className="inline-flex items-center justify-center gap-2 h-[48px] px-8 rounded-full bg-[#17130A] text-[#F2EEE6] font-semibold text-sm hover:bg-[#26262B] transition-all duration-150 cursor-pointer shadow-md active:translate-y-px"
              >
                <PhoneCall className="w-4 h-4 text-[#F5B82E]" />
                <span>Agenda una llamada</span>
              </button>
              <span className="text-xs text-[#17130A]/80 font-mono text-center lg:text-right">
                Respuesta en menos de 24 horas hábiles
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
