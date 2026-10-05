import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { ArrowRight, Calculator, Check, Cpu, Clock, Layers } from 'lucide-react';

export interface ProjectCalculatorSectionProps {
  onQuoteWithEstimate: (estimate: {
    type: string;
    scope: string;
    integrations: string[];
    weeks: string;
  }) => void;
}

export const ProjectCalculatorSection: React.FC<ProjectCalculatorSectionProps> = ({
  onQuoteWithEstimate,
}) => {
  const [projectType, setProjectType] = useState<string>('crm');
  const [scope, setScope] = useState<string>('mid');
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([
    'whatsapp',
    'facturacion',
  ]);

  const toggleIntegration = (id: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Dynamic calculations
  const calculateEstimate = () => {
    let baseWeeksMin = 6;
    let baseWeeksMax = 10;
    let stack = ['TypeScript', 'PostgreSQL', 'Tailwind CSS'];
    let typeName = 'CRM a la medida';

    if (projectType === 'web') {
      baseWeeksMin = 4;
      baseWeeksMax = 7;
      typeName = 'Página web o portal corporativo';
      stack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'];
    } else if (projectType === 'crm') {
      baseWeeksMin = 8;
      baseWeeksMax = 12;
      typeName = 'CRM comercial a la medida';
      stack = ['React', 'Node.js', 'PostgreSQL', 'Redis'];
    } else if (projectType === 'erp') {
      baseWeeksMin = 12;
      baseWeeksMax = 16;
      typeName = 'ERP y control de inventario';
      stack = ['FastAPI / NestJS', 'PostgreSQL', 'Docker', 'RabbitMQ'];
    } else if (projectType === 'mobile') {
      baseWeeksMin = 10;
      baseWeeksMax = 14;
      typeName = 'App móvil iOS & Android';
      stack = ['React Native', 'Expo', 'SQLite offline', 'TypeScript'];
    } else if (projectType === 'automation') {
      baseWeeksMin = 3;
      baseWeeksMax = 6;
      typeName = 'Automatización de flujos y APIs';
      stack = ['n8n Enterprise', 'Python', 'Webhooks / REST'];
    }

    // Complexity multiplier
    if (scope === 'mvp') {
      baseWeeksMin = Math.max(3, Math.round(baseWeeksMin * 0.75));
      baseWeeksMax = Math.max(5, Math.round(baseWeeksMax * 0.75));
    } else if (scope === 'advanced') {
      baseWeeksMin = Math.round(baseWeeksMin * 1.3);
      baseWeeksMax = Math.round(baseWeeksMax * 1.35);
    }

    // Add weeks for integrations
    const extraWeeks = Math.floor(selectedIntegrations.length * 0.7);
    const finalMin = baseWeeksMin + extraWeeks;
    const finalMax = baseWeeksMax + extraWeeks;

    return {
      typeName,
      weeksText: `Entre ${finalMin} y ${finalMax} semanas`,
      stack,
      sprints: Math.ceil(finalMax / 2),
    };
  };

  const estimate = calculateEstimate();

  const handleApply = () => {
    onQuoteWithEstimate({
      type: estimate.typeName,
      scope: scope === 'mvp' ? 'Inicial / MVP' : scope === 'mid' ? 'Operación completa' : 'Multi-sede avanzada',
      integrations: selectedIntegrations,
      weeks: estimate.weeksText,
    });
  };

  return (
    <section id="calculadora" className="py-20 md:py-28 border-b border-[color:var(--border-subtle)] bg-[color:var(--surface-sunken)]">
      <Container>
        {/* Split Section Header */}
        <SectionHeader
          title="Estima el plazo y la arquitectura de tu solución."
          description="Selecciona el tipo de desarrollo, nivel de alcance e integraciones clave para obtener una estimación técnica preliminar de semanas y sprints."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Left 7 cols */}
          <div className="lg:col-span-7 space-y-8 bg-[color:var(--surface-raised)] p-6 sm:p-8 rounded-[22px] border border-[color:var(--border-subtle)]">
            {/* 1. Tipo de desarrollo */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[color:var(--text-primary)] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[color:var(--accent-subtle)] text-[color:var(--accent)] text-[11px] font-mono flex items-center justify-center">
                  1
                </span>
                Tipo de sistema requerido:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'crm', label: 'CRM comercial' },
                  { id: 'erp', label: 'ERP / Inventario' },
                  { id: 'mobile', label: 'App móvil' },
                  { id: 'web', label: 'Portal o web' },
                  { id: 'automation', label: 'Automatizaciones' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProjectType(item.id)}
                    className={`p-3 text-left rounded-[12px] text-xs font-semibold border transition-all cursor-pointer ${
                      projectType === item.id
                        ? 'bg-[color:var(--accent-subtle)] text-[color:var(--accent)] border-[color:var(--accent)]'
                        : 'bg-[color:var(--surface-sunken)] text-[color:var(--text-secondary)] border-[color:var(--border-subtle)] hover:border-[color:var(--border-strong)]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Alcance / Complejidad */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[color:var(--text-primary)] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[color:var(--accent-subtle)] text-[color:var(--accent)] text-[11px] font-mono flex items-center justify-center">
                  2
                </span>
                Complejidad y cobertura de áreas:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'mvp', title: 'Inicial / MVP', sub: '1 área central' },
                  { id: 'mid', title: 'Mediana empresa', sub: '2 a 4 áreas' },
                  { id: 'advanced', title: 'Multi-sede', sub: 'Auditoría + sucursales' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScope(item.id)}
                    className={`p-3.5 text-left rounded-[12px] border transition-all cursor-pointer ${
                      scope === item.id
                        ? 'bg-[color:var(--accent-subtle)] text-[color:var(--accent)] border-[color:var(--accent)]'
                        : 'bg-[color:var(--surface-sunken)] text-[color:var(--text-secondary)] border-[color:var(--border-subtle)] hover:border-[color:var(--border-strong)]'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.title}</div>
                    <div className="text-[11px] text-[color:var(--text-faint)] mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Integraciones */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[color:var(--text-primary)] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[color:var(--accent-subtle)] text-[color:var(--accent)] text-[11px] font-mono flex items-center justify-center">
                  3
                </span>
                Integraciones requeridas:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'whatsapp', label: 'WhatsApp Business API' },
                  { id: 'facturacion', label: 'Facturación fiscal / DTE' },
                  { id: 'pagos', label: 'Pasarela de pagos en línea' },
                  { id: 'offline', label: 'Modo offline con sincronización' },
                  { id: 'migracion', label: 'Migración desde Excel / ERP viejo' },
                ].map((integ) => {
                  const isChecked = selectedIntegrations.includes(integ.id);
                  return (
                    <div
                      key={integ.id}
                      onClick={() => toggleIntegration(integ.id)}
                      className={`flex items-center gap-3 p-3 rounded-[12px] border text-xs cursor-pointer select-none transition-colors ${
                        isChecked
                          ? 'bg-[color:var(--surface-sunken)] text-[color:var(--text-primary)] border-[color:var(--accent)]/50'
                          : 'bg-[color:var(--surface-sunken)] text-[color:var(--text-muted)] border-[color:var(--border-subtle)] hover:border-[color:var(--border-strong)]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                          isChecked
                            ? 'bg-[color:var(--accent)] border-[color:var(--accent)] text-[color:var(--accent-fg)]'
                            : 'border-[color:var(--border-strong)]'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{integ.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Card: Right 5 cols */}
          <div className="lg:col-span-5 bg-[color:var(--surface-raised)] border-2 border-[color:var(--accent)] rounded-[22px] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[color:var(--border-subtle)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--accent)]">
                Estimación de ingeniería
              </span>
              <span className="font-mono text-xs text-[color:var(--green)] bg-[color:var(--green-soft)] px-2.5 py-0.5 rounded-full border border-[color:var(--green)]/20">
                Alcance cerrado
              </span>
            </div>

            {/* Estimated Timeline */}
            <div className="space-y-1">
              <span className="text-xs text-[color:var(--text-faint)] uppercase tracking-wider font-semibold">
                Plazo de desarrollo estimado:
              </span>
              <div className="font-mono font-bold text-3xl text-[color:var(--text-primary)] tracking-tight">
                {estimate.weeksText}
              </div>
              <p className="text-xs text-[color:var(--text-muted)] pt-1">
                Dividido en {estimate.sprints} sprints funcionales de 2 semanas cada uno con demostración en staging.
              </p>
            </div>

            {/* Recommended stack */}
            <div className="space-y-2 pt-4 border-t border-[color:var(--border-subtle)]">
              <span className="text-xs text-[color:var(--text-faint)] uppercase tracking-wider font-semibold">
                Arquitectura sugerida:
              </span>
              <div className="flex flex-wrap gap-2">
                {estimate.stack.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1 rounded-full bg-[color:var(--surface-sunken)] text-[color:var(--text-primary)] border border-[color:var(--border-subtle)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Scope guarantees */}
            <div className="space-y-2 pt-4 border-t border-[color:var(--border-subtle)] text-xs text-[color:var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[color:var(--accent)]" />
                <span>90 días de garantía técnica post-entrega</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[color:var(--accent)]" />
                <span>Propiedad total del repositorio y modelos de datos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[color:var(--accent)]" />
                <span>Presupuesto fijo sin cargos imprevistos</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={handleApply}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar propuesta formal con este alcance
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
