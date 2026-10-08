import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { SERVICES } from '../../data/services';
import { ServiceItem } from '../../types';
import { Button } from '../ui/Button';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';

export interface ServicesSectionProps {
  onRequestServiceQuote: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onRequestServiceQuote,
}) => {
  const [expandedId, setExpandedId] = useState<string>('custom-crm');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="servicios" className="py-20 md:py-28 border-b-2 border-[color:var(--border-subtle)]">
      <Container>
        {/* Split Section Header */}
        <SectionHeader
          title="Ingeniería y desarrollo de software a la medida."
          description="Construimos plataformas diseñadas específicamente para la operación real de tu empresa, sin imponer procesos prefabricados."
        />

        {/* 12-column row list */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-6">
          {/* Left spacer col 1–3 for editorial balance */}
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-28 space-y-4 pr-6">
              <span className="text-xs uppercase font-mono tracking-wider text-[color:var(--text-faint)] block">
                Alcance del servicio
              </span>
              <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">
                Cada desarrollo incluye levantamiento técnico inicial, prototipo funcional navegable y código transferido con 90 días de garantía.
              </p>
              <div className="pt-2 text-xs font-mono text-[color:var(--accent)]">
                5 áreas de especialidad
              </div>
            </div>
          </div>

          {/* Right col 4–12 with ruled rows */}
          <div className="md:col-span-9 border-t border-[color:var(--border-subtle)]">
            {SERVICES.map((service) => {
              const isExpanded = expandedId === service.id;

              return (
                <div
                  key={service.id}
                  data-reveal
                  className="border-b-2 border-[color:var(--border-subtle)] transition-all duration-200"
                >
                  {/* Clickable Header Row with 12px shift & gold tint on hover */}
                  <div
                    onClick={() => toggleExpand(service.id)}
                    className="group py-6 flex items-start justify-between gap-4 cursor-pointer transition-transform duration-150 ease-out hover:translate-x-3 select-none"
                  >
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className="font-mono text-sm font-semibold text-[color:var(--text-faint)] group-hover:text-[color:var(--accent)] transition-colors">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[color:var(--text-primary)] group-hover:text-[color:var(--accent)] transition-colors tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[color:var(--text-muted)] mt-1 max-w-2xl leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 pt-1">
                      <span className="hidden sm:inline-block font-mono text-xs text-[color:var(--text-faint)] bg-[color:var(--surface-raised)] px-2.5 py-1 rounded-full border border-[color:var(--border-subtle)]">
                        {service.timeline}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-[color:var(--text-faint)] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[color:var(--accent)] ${
                          isExpanded ? 'rotate-90 text-[color:var(--accent)]' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Technical Detail Drawer */}
                  {isExpanded && (
                    <div className="pb-8 pt-2 pl-8 md:pl-12 pr-4 space-y-6 animate-in fade-in duration-200">
                      <div className="text-sm text-[color:var(--text-secondary)] leading-relaxed max-w-3xl">
                        {service.fullDescription}
                      </div>

                      {/* Deliverables list */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[color:var(--text-faint)] block">
                          Entregables concretos de este servicio:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[color:var(--text-primary)] bg-[color:var(--surface-raised)] p-3 rounded-[12px] border border-[color:var(--border-subtle)]">
                              <Check className="w-3.5 h-3.5 text-[color:var(--accent)] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical metadata footer */}
                      <div className="pt-4 border-t border-[color:var(--border-subtle)]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] text-[color:var(--text-faint)] mr-1">Stack:</span>
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-[color:var(--surface-sunken)] text-[color:var(--text-muted)] border border-[color:var(--border-subtle)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Button
                          variant="primary"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRequestServiceQuote(service);
                          }}
                          iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                        >
                          Cotizar {service.title.split(' ')[0]}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
