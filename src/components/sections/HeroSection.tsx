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
    <section className="theme-dark relative bg-[color:var(--surface-page)] pt-16 md:pt-28 pb-24 md:pb-56 border-b-2 border-[color:var(--border-subtle)] overflow-hidden">
      {/* Ambient Animated Glow in Background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[color:var(--accent)]/10 rounded-full blur-[130px] pointer-events-none animate-ambient-glow" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-[color:var(--blue)]/5 rounded-full blur-[120px] pointer-events-none animate-ambient-glow [animation-delay:4s]" />

      {/* Motivo de líneas horizontales apiladas, inspirado en el símbolo del logo */}
      <div aria-hidden="true" className="hidden md:flex absolute right-0 bottom-0 w-[46%] max-w-[560px] flex-col items-end gap-5 pb-10 pointer-events-none">
        <div className="draw-line h-3 w-[42%] rounded-l-sm bg-[color:var(--accent)]/25" style={{ '--d': '500ms' } as React.CSSProperties} />
        <div className="draw-line h-3 w-[70%] rounded-l-sm bg-[color:var(--text-primary)]/10" style={{ '--d': '650ms' } as React.CSSProperties} />
        <div className="draw-line h-3 w-[52%] rounded-l-sm bg-[color:var(--accent)]/15" style={{ '--d': '800ms' } as React.CSSProperties} />
        <div className="draw-line h-3 w-[86%] rounded-l-sm bg-[color:var(--text-primary)]/6" style={{ '--d': '950ms' } as React.CSSProperties} />
      </div>

      <Container className="relative z-10">
        {/* Eyebrow kicker with live pulsing indicator */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] px-3 py-1 rounded-full shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--green)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--green)]" />
            </span>
            <span className="font-sans font-bold text-[11px] uppercase tracking-[0.16em] text-[color:var(--accent)]">
              Soluciones empresariales · Sistema de Ventas, Automatizaciones y Herramientas
            </span>
          </div>

          <span className="hidden sm:inline-block w-6 h-px bg-[color:var(--border-strong)]" />
          <span className="hidden sm:inline-block text-xs font-mono text-[color:var(--text-faint)]">
            2026 HistroSoft
          </span>
        </div>

        {/* Headline & Value Proposition (Split 12-col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div data-reveal className="lg:col-span-8 space-y-6">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[color:var(--text-primary)] tracking-[-0.035em] leading-[1.0] text-balance">
              Soluciones de software para tu negocio.
            </h1>

            {/* Quick trust micro-badges with subtle float */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-[color:var(--text-secondary)] bg-[color:var(--surface-raised)]/80 border border-[color:var(--border-subtle)] px-3 py-1.5 rounded-full backdrop-blur-xs transition-colors hover:border-[color:var(--accent)]/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-[color:var(--green)]" />
                <span>Planes listos para operar</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[color:var(--text-secondary)] bg-[color:var(--surface-raised)]/80 border border-[color:var(--border-subtle)] px-3 py-1.5 rounded-full backdrop-blur-xs transition-colors hover:border-[color:var(--accent)]/50">
                <Zap className="w-3.5 h-3.5 text-[color:var(--accent)]" />
                <span>Puesta en marcha rápida</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[color:var(--text-secondary)] bg-[color:var(--surface-raised)]/80 border border-[color:var(--border-subtle)] px-3 py-1.5 rounded-full backdrop-blur-xs transition-colors hover:border-[color:var(--accent)]/50">
                <Shield className="w-3.5 h-3.5 text-[color:var(--blue)]" />
                <span>Soporte por WhatsApp</span>
              </div>
            </div>
          </div>

          <div data-reveal style={{ '--reveal-delay': '180ms' } as React.CSSProperties} className="lg:col-span-4 lg:pt-3">
            <p className="font-sans text-base md:text-lg text-[color:var(--text-muted)] leading-relaxed">
              Impulsa tu negocio con soluciones digitales que simplifican procesos, automatizan tareas y mejoran tu gestión. Contamos con soluciones listas para usar y desarrollo de software a medida.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={onExploreProducts}
                iconRight={<ArrowRight className="w-4 h-4" />}
                className="btn-shimmer shadow-lg hover:shadow-[0_8px_24px_rgba(23,71,201,0.28)] transition-all"
              >
                Ver productos y planes
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={onExploreConsultation}
                className="hover:border-[color:var(--accent)] transition-all"
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
