import React from 'react';
import { PricingPlan, BillingCycle } from '../../types';
import { Button } from './Button';
import { Check } from 'lucide-react';

export interface PricingCardProps {
  plan: PricingPlan;
  billingCycle: BillingCycle;
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  billingCycle,
  onSelectPlan,
}) => {
  const isAnnual = billingCycle === 'annual';
  const price = isAnnual ? plan.annualPriceUSD : plan.monthlyPriceUSD;

  return (
    <div
      className={`relative flex flex-col rounded-[22px] transition-all duration-200 bg-[color:var(--surface-raised)] p-7 ${
        plan.isPopular
          ? 'border-2 border-[color:var(--accent)]'
          : 'border border-[color:var(--border-subtle)] hover:border-[color:var(--border-strong)]'
      }`}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 left-6">
          <span className="bg-[color:var(--accent)] text-[color:var(--accent-fg)] text-[11px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            Recomendado
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-bold text-2xl text-[color:var(--text-primary)] tracking-tight">
            {plan.name}
          </h3>
          <span className="font-mono text-xs text-[color:var(--green)] bg-[color:var(--green-soft)] px-2 py-0.5 rounded-full border border-[color:var(--green)]/20">
            {plan.sla}
          </span>
        </div>
        <p className="text-xs text-[color:var(--text-muted)] mt-1.5 leading-relaxed">
          {plan.tagline}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6 pb-6 border-b border-[color:var(--border-subtle)]">
        <div className="flex items-baseline gap-1.5">
          <span className="font-mono text-xs text-[color:var(--text-faint)] uppercase">USD</span>
          <span className="font-mono font-bold text-4xl text-[color:var(--text-primary)] tracking-tight">
            ${price}
          </span>
          <span className="text-xs text-[color:var(--text-faint)]">/ mes</span>
        </div>
        <div className="text-[12px] text-[color:var(--text-faint)] mt-1 font-mono">
          {isAnnual ? 'Facturación anual (ahorro 20%)' : 'Facturación mensual flexible'}
        </div>
      </div>

      {/* Limits & Ideal For */}
      <div className="mb-6 space-y-2">
        <div className="text-xs text-[color:var(--text-primary)] bg-[color:var(--surface-sunken)] p-3 rounded-xl border border-[color:var(--border-subtle)] leading-relaxed">
          <span className="text-[color:var(--text-faint)] block text-[11px] uppercase tracking-wider mb-0.5">Capacidad:</span>
          {plan.limits}
        </div>
      </div>

      {/* Feature List */}
      <div className="space-y-3 mb-8 flex-1">
        <div className="text-[11px] font-bold uppercase tracking-wider text-[color:var(--text-faint)]">
          Incluye:
        </div>
        <ul className="space-y-2.5">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-[color:var(--text-secondary)] leading-relaxed">
              <Check className="w-4 h-4 text-[color:var(--accent)] shrink-0 mt-0.5" strokeWidth={2} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="mt-auto pt-4 border-t border-[color:var(--border-subtle)]/60">
        <Button
          variant={plan.isPopular ? 'primary' : 'secondary'}
          size="md"
          className="w-full justify-center"
          onClick={() => onSelectPlan(plan)}
        >
          {plan.isPopular ? 'Elegir plan ' + plan.name : 'Solicitar plan ' + plan.name}
        </Button>
      </div>
    </div>
  );
};
