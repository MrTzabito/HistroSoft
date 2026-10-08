import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { useToast } from '../ui/Toast';
import { CheckCircle2, Send, ShieldCheck, Clock, MessageSquare, Terminal } from 'lucide-react';

export interface SoftwareConsultationSectionProps {
  onOpenAgenda: () => void;
}

export const SoftwareConsultationSection: React.FC<SoftwareConsultationSectionProps> = ({
  onOpenAgenda,
}) => {
  const { showToast } = useToast();

  const [topic, setTopic] = useState<string>('producto');
  const [selectedProduct, setSelectedProduct] = useState<string>('Histro CRM');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Indica tu nombre y apellido';
    if (!email.trim()) {
      errs.email = 'Indica tu correo corporativo';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Ingresa un correo electrónico válido';
    }
    if (!company.trim()) errs.company = 'Indica el nombre de tu empresa';
    if (!query.trim()) errs.query = 'Describe brevemente tu consulta o requerimiento';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    showToast(
      'Consulta técnica recibida',
      'Un ingeniero de software evaluará tu requerimiento y te responderá en menos de 24 horas.',
      'success'
    );
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setQuery('');
    setErrors({});
  };

  return (
    <section id="consultar" className="py-20 md:py-28 border-b-2 border-[color:var(--border-subtle)] bg-[color:var(--surface-sunken)]">
      <Container>
        {/* Split Section Header */}
        <SectionHeader
          title="Consulta sobre un producto o desarrollo a la medida."
          description="¿Tienes dudas sobre la compatibilidad de una plataforma o requieres una funcionalidad específica para tu empresa? Conversa directamente con nuestro equipo de ingeniería."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 4 cols: Context & Guarantees */}
          <div className="lg:col-span-4 space-y-6">
            <div data-reveal className="p-6 rounded-[22px] bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] space-y-4 card-interactive">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[color:var(--accent)] block">
                Atención directa
              </span>
              <h3 className="font-display font-bold text-xl text-[color:var(--text-primary)] tracking-tight">
                Respuestas técnicas, no discursos comerciales.
              </h3>
              <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">
                Evaluamos la viabilidad de tus sistemas actuales, volumen de datos y requerimientos de seguridad antes de proponerte un plan o desarrollo.
              </p>

              <div className="space-y-3 pt-3 border-t border-[color:var(--border-subtle)] text-xs text-[color:var(--text-secondary)]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[color:var(--accent)] shrink-0" />
                  <span>Respuesta técnica en menos de 24 horas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[color:var(--green)] shrink-0" />
                  <span>Confidencialidad garantizada de tus datos</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-[color:var(--blue)] shrink-0" />
                  <span>Evaluación preliminar de arquitectura sin costo</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={onOpenAgenda}
                  className="w-full justify-center hover:border-[color:var(--accent)] transition-all"
                >
                  O agenda una videollamada directa →
                </Button>
              </div>
            </div>
          </div>

          {/* Right 8 cols: Interactive Consultation Form */}
          <div data-reveal style={{ '--reveal-delay': '120ms' } as React.CSSProperties} className="lg:col-span-8 p-6 md:p-8 rounded-[22px] bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] card-interactive">
            {submitted ? (
              <div className="py-8 space-y-6 text-center animate-in fade-in duration-200">
                <div className="w-14 h-14 rounded-full bg-[color:var(--green-soft)] border border-[color:var(--green)]/30 flex items-center justify-center mx-auto text-[color:var(--green)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h4 className="font-display font-bold text-2xl text-[color:var(--text-primary)]">
                    Consulta registrada con éxito.
                  </h4>
                  <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">
                    Hemos asignado tu requerimiento a un ingeniero técnico. Te contactaremos al correo <strong className="text-[color:var(--text-primary)]">{email}</strong> en un plazo máximo de 24 horas hábiles.
                  </p>
                </div>

                <div className="p-4 rounded-[12px] bg-[color:var(--surface-sunken)] border border-[color:var(--border-subtle)] max-w-md mx-auto text-left text-xs text-[color:var(--text-muted)] space-y-1">
                  <div><strong className="text-[color:var(--text-secondary)]">Tipo de consulta:</strong> {topic === 'producto' ? `Producto (${selectedProduct})` : topic === 'adaptacion' ? 'Adaptación a medida' : 'Software a medida'}</div>
                  <div><strong className="text-[color:var(--text-secondary)]">Empresa:</strong> {company}</div>
                  <div><strong className="text-[color:var(--text-secondary)]">Contacto:</strong> {name}</div>
                </div>

                <div className="pt-2">
                  <Button variant="primary" size="md" onClick={handleReset}>
                    Realizar otra consulta
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Topic Selector Tabs */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[color:var(--text-secondary)] block">
                    ¿Sobre qué deseas consultar?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'producto', label: 'Consultar sobre un producto' },
                      { id: 'adaptacion', label: 'Adaptar un producto a mi empresa' },
                      { id: 'medida', label: 'Software a la medida desde cero' },
                      { id: 'integracion', label: 'Integración de APIs y flujos' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTopic(item.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          topic === item.id
                            ? 'bg-[color:var(--contrast-fill)] text-[color:var(--contrast-fg)]'
                            : 'bg-[color:var(--surface-sunken)] text-[color:var(--text-muted)] border border-[color:var(--border-subtle)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--border-strong)]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* If product selected, choose product */}
                {topic === 'producto' && (
                  <div className="p-4 rounded-[12px] bg-[color:var(--surface-sunken)] border border-[color:var(--border-subtle)]">
                    <Select
                      label="Selecciona la solución ya creada de tu interés"
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      options={[
                        { value: 'Histro ERP', label: 'Histro ERP — Operación, compras, inventario y facturación' },
                        { value: 'Histro CRM', label: 'Histro CRM — Ventas, prospectos, cotizaciones y WhatsApp' },
                        { value: 'Histro Sites', label: 'Histro Sites — Sistemas y portales web gestionados' },
                        { value: 'Histro Tools', label: 'Histro Tools — Herramientas operativas, reportes y métricas' },
                        { value: 'Histro Flow', label: 'Histro Flow — Automatizaciones de procesos y webhooks' },
                      ]}
                    />
                  </div>
                )}

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Nombre y apellido *"
                    placeholder="Ej. Rodrigo Morales"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={errors.name}
                  />

                  <Input
                    label="Correo corporativo *"
                    type="email"
                    placeholder="rodrigo@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                  />

                  <Input
                    label="Empresa *"
                    placeholder="Ej. Logística Andina SpA"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    error={errors.company}
                  />

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[color:var(--text-secondary)]">
                      Usuarios estimados
                    </label>
                    <select
                      className="w-full h-[44px] px-3.5 bg-[color:var(--surface-sunken)] border border-[color:var(--border-subtle)] rounded-[12px] text-sm text-[color:var(--text-primary)] focus:border-[color:var(--accent)] focus:outline-none"
                    >
                      <option value="1-5">1 a 5 usuarios</option>
                      <option value="6-15">6 a 15 usuarios</option>
                      <option value="16-50">16 a 50 usuarios</option>
                      <option value="50+">Más de 50 usuarios</option>
                    </select>
                  </div>
                </div>

                <Textarea
                  label="¿Cuál es tu consulta o requerimiento específico? *"
                  placeholder="Detalla qué problema buscas resolver, qué sistema utilizas actualmente o si necesitas integrar algún servicio en particular..."
                  rows={4}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  error={errors.query}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[color:var(--border-subtle)]">
                  <span className="text-[11px] text-[color:var(--text-faint)]">
                    Tus datos se usan exclusivamente para responder a tu consulta.
                  </span>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    iconRight={<Send className="w-4 h-4" />}
                  >
                    Enviar consulta técnica
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
