import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle2, Zap, Shield } from 'lucide-react';

export interface HeroSectionProps {
  onOpenAgenda: () => void;
  onExploreProducts: () => void;
  onExploreConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAgenda,
  onExploreProducts,
  onExploreConsultation,
}) => {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 border-b border-[#2B2B30] overflow-hidden">
      {/* Ambient Animated Glow in Background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#F5B82E]/10 rounded-full blur-[130px] pointer-events-none animate-ambient-glow" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-[#7CC4FF]/5 rounded-full blur-[120px] pointer-events-none animate-ambient-glow [animation-delay:4s]" />

      <Container className="relative z-10">
        {/* Eyebrow kicker with live pulsing indicator */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-[#17171A] border border-[#2B2B30] px-3 py-1 rounded-full shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8FD694] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8FD694]" />
            </span>
            <span className="font-sans font-bold text-[11px] uppercase tracking-[0.16em] text-[#F5B82E]">
              Soluciones empresariales · Sistema de Ventas, MyYapes y Herramientas
            </span>
          </div>

          <span className="hidden sm:inline-block w-6 h-px bg-[#4A4A52]" />
          <span className="hidden sm:inline-block text-xs font-mono text-[#8C877E]">
            2026 HistroSoft
          </span>
        </div>

        {/* Headline & Value Proposition (Split 12-col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#F2EEE6] tracking-[-0.035em] leading-[1.0] text-balance">
              Soluciones de software ya creadas con planes para tu empresa.
            </h1>

            {/* Quick trust micro-badges with subtle float */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-[#D8D3C9] bg-[#17171A]/80 border border-[#2B2B30] px-3 py-1.5 rounded-full backdrop-blur-xs transition-colors hover:border-[#F5B82E]/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8FD694]" />
                <span>Planes listos para operar</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#D8D3C9] bg-[#17171A]/80 border border-[#2B2B30] px-3 py-1.5 rounded-full backdrop-blur-xs transition-colors hover:border-[#F5B82E]/50">
                <Zap className="w-3.5 h-3.5 text-[#F5B82E]" />
                <span>Puesta en marcha rápida</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#D8D3C9] bg-[#17171A]/80 border border-[#2B2B30] px-3 py-1.5 rounded-full backdrop-blur-xs transition-colors hover:border-[#F5B82E]/50">
                <Shield className="w-3.5 h-3.5 text-[#7CC4FF]" />
                <span>Soporte por WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pt-3">
            <p className="font-sans text-base md:text-lg text-[#B5B0A6] leading-relaxed">
              Venta de plataformas ya creadas: Sistema de Ventas para control de caja e inventario, y MyYapes para registro automático y confirmación de pagos de tus clientes. Con planes listos para operar y opción de software personalizado a la medida.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={onExploreProducts}
                iconRight={<ArrowRight className="w-4 h-4" />}
                className="btn-shimmer shadow-lg hover:shadow-[0_8px_24px_rgba(245,184,46,0.3)] transition-all"
              >
                Ver productos y planes
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={onExploreConsultation}
                className="hover:border-[#F5B82E] transition-all"
              >
                Software personalizado →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
