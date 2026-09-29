import React, { useState, useEffect } from 'react';
import { Dialog } from '../ui/Dialog';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { useToast } from '../ui/Toast';
import { CheckCircle2, Calendar, Send } from 'lucide-react';
import { PricingPlan } from '../../types';

export interface PreloadData {
  serviceName?: string;
  plan?: PricingPlan;
  calculatorEstimate?: {
    type: string;
    scope: string;
    integrations: string[];
    weeks: string;
  };
}

export interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  preloadData?: PreloadData | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  open,
  onClose,
  preloadData,
}) => {
  const { showToast } = useToast();

  const [mode, setMode] = useState<'call' | 'quote'>('call');
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('crm');
  const [preferredDay, setPreferredDay] = useState('miercoles');
  const [preferredHour, setPreferredHour] = useState('10:00');
  const [notes, setNotes] = useState('');

  // Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preloadData?.plan) {
      setMode('quote');
      setNotes(`Interesado en el plan ${preloadData.plan.name} de ${preloadData.plan.product}.`);
    } else if (preloadData?.serviceName) {
      setMode('quote');
      setNotes(`Requerimiento de desarrollo para el servicio: ${preloadData.serviceName}.`);
    } else if (preloadData?.calculatorEstimate) {
      setMode('quote');
      setNotes(
        `Estimación desde calculadora: ${preloadData.calculatorEstimate.type}, alcance ${preloadData.calculatorEstimate.scope}, plazo estimado: ${preloadData.calculatorEstimate.weeks}.`
      );
    }
  }, [preloadData]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'El nombre completo es requerido';
    if (!email.trim()) {
      errs.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Ingresa un correo electrónico corporativo válido';
    }
    if (!company.trim()) errs.company = 'El nombre de la empresa es requerido';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    showToast(
      mode === 'call' ? 'Llamada programada con éxito' : 'Solicitud de propuesta enviada',
      'Nos pondremos en contacto contigo en menos de 24 horas hábiles.',
      'success'
    );
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setPhone('');
    setNotes('');
    setErrors({});
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={
        submitted
          ? 'Confirmación recibida'
          : mode === 'call'
          ? 'Agenda una llamada técnica'
          : 'Solicitar propuesta técnica'
      }
      description={
        submitted
          ? 'Hemos registrado tus datos y un ingeniero revisará tu requerimiento.'
          : '20 minutos de conversación técnica con un ingeniero de software, sin compromiso comercial.'
      }
      maxWidth="lg"
    >
      {submitted ? (
        <div className="py-6 space-y-6 text-center">
          <div className="w-14 h-14 rounded-full bg-[#1C2A1D] border border-[#8FD694]/30 flex items-center justify-center mx-auto text-[#8FD694]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h4 className="font-display font-bold text-xl text-[#F2EEE6]">
              {mode === 'call'
                ? `Reunión pre-agendada para ${preferredDay} a las ${preferredHour}`
                : 'Propuesta en preparación'}
            </h4>
            <p className="text-xs text-[#B5B0A6] leading-relaxed">
              Enviamos un correo de confirmación a <strong className="text-[#F2EEE6]">{email}</strong> con los detalles y el enlace a la sala virtual.
            </p>
          </div>

          <div className="p-4 rounded-[12px] bg-[#121214] border border-[#2B2B30] text-left max-w-md mx-auto text-xs space-y-1.5 text-[#B5B0A6]">
            <div><strong className="text-[#D8D3C9]">Contacto:</strong> {name} ({company})</div>
            {notes && <div><strong className="text-[#D8D3C9]">Nota:</strong> {notes}</div>}
            <div><strong className="text-[#D8D3C9]">Respuesta técnica garantizada:</strong> Menos de 24 horas</div>
          </div>

          <div className="pt-2">
            <Button variant="primary" size="md" onClick={handleReset}>
              Cerrar y continuar navegando
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2 p-1 bg-[#121214] border border-[#2B2B30] rounded-full w-fit">
            <button
              type="button"
              onClick={() => setMode('call')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                mode === 'call'
                  ? 'bg-[#F2EEE6] text-[#0D0D0F]'
                  : 'text-[#B5B0A6] hover:text-[#F2EEE6]'
              }`}
            >
              Agenda una llamada
            </button>
            <button
              type="button"
              onClick={() => setMode('quote')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                mode === 'quote'
                  ? 'bg-[#F2EEE6] text-[#0D0D0F]'
                  : 'text-[#B5B0A6] hover:text-[#F2EEE6]'
              }`}
            >
              Solicitar propuesta por escrito
            </button>
          </div>

          {/* Form fields grid */}
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
              placeholder="rodrigo@tuempresa.com"
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

            <Input
              label="Teléfono o WhatsApp (opcional)"
              placeholder="+51 913 862 963"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {mode === 'call' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-[12px] bg-[#121214] border border-[#2B2B30]">
              <Select
                label="Día preferido"
                value={preferredDay}
                onChange={(e) => setPreferredDay(e.target.value)}
                options={[
                  { value: 'hoy', label: 'Hoy (si hay cupos en 2 horas)' },
                  { value: 'manana', label: 'Mañana' },
                  { value: 'miercoles', label: 'Miércoles' },
                  { value: 'jueves', label: 'Jueves' },
                  { value: 'viernes', label: 'Viernes' },
                ]}
              />

              <Select
                label="Horario preferido (hora local)"
                value={preferredHour}
                onChange={(e) => setPreferredHour(e.target.value)}
                options={[
                  { value: '09:30', label: '09:30 AM' },
                  { value: '11:00', label: '11:00 AM' },
                  { value: '14:30', label: '02:30 PM' },
                  { value: '16:00', label: '04:00 PM' },
                  { value: '17:30', label: '05:30 PM' },
                ]}
              />
            </div>
          )}

          <Textarea
            label="Detalles o requerimientos de tu proyecto"
            placeholder="Cuéntanos qué problema necesitas resolver, qué sistemas usas actualmente y si tienes una fecha meta de lanzamiento..."
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <div className="flex items-center justify-between pt-3 border-t border-[#2B2B30]">
            <span className="text-[11px] text-[#8C877E]">
              Acuerdo de confidencialidad estándar incluido
            </span>

            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="md"
                iconRight={mode === 'call' ? <Calendar className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              >
                {mode === 'call' ? 'Confirmar videollamada' : 'Enviar requerimiento'}
              </Button>
            </div>
          </div>
        </form>
      )}
    </Dialog>
  );
};
