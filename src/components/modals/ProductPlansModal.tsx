import React, { useState } from 'react';
import { Dialog } from '../ui/Dialog';
import { ProductDetails, PricingPlan, BillingCycle } from '../../types';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { Check, Plus } from 'lucide-react';
import { Switch } from '../ui/Switch';

export interface ProductPlansModalProps {
  product: ProductDetails | null;
  open: boolean;
  onClose: () => void;
  onConsultCustom: (productName: string) => void;
}

export const ProductPlansModal: React.FC<ProductPlansModalProps> = ({
  product,
  open,
  onClose,
  onConsultCustom,
}) => {
  const { addItem } = useCart();
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  if (!product) return null;

  const handleAddPlan = (plan: PricingPlan) => {
    addItem(product, plan, billingCycle);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={`Planes de ${product.name}`}
      description={product.tagline}
      maxWidth="xl"
    >
      <div className="space-y-6 text-left">
        {/* Billing cycle switch */}
        <div className="flex items-center justify-between pb-4 border-b border-[color:var(--border-subtle)]">
          <span className="text-xs text-[color:var(--text-faint)]">
            Selecciona el plan que mejor se ajuste a la escala de tu empresa:
          </span>

          <div className="flex items-center gap-3 bg-[color:var(--surface-sunken)] px-4 py-1.5 rounded-full border border-[color:var(--border-subtle)]">
            <span
              className={`text-xs font-semibold ${
                billingCycle === 'monthly' ? 'text-[color:var(--text-primary)]' : 'text-[color:var(--text-faint)]'
              }`}
            >
              Mensual
            </span>
            <Switch
              checked={billingCycle === 'annual'}
              onChange={(checked) => setBillingCycle(checked ? 'annual' : 'monthly')}
            />
            <div className="flex items-center gap-1.5">
              <span
                className={`text-xs font-semibold ${
                  billingCycle === 'annual' ? 'text-[color:var(--text-primary)]' : 'text-[color:var(--text-faint)]'
                }`}
              >
                Anual
              </span>
              <span className="text-[10px] font-mono font-bold text-[color:var(--green)] bg-[color:var(--green-soft)] px-2 py-0.5 rounded-full">
                -20%
              </span>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {product.plans.map((plan) => {
            const isAnnual = billingCycle === 'annual';
            const price = isAnnual
              ? plan.annualPricePEN
              : plan.monthlyPricePEN;

            return (
              <div
                key={plan.id}
                className={`p-5 rounded-[18px] bg-[color:var(--surface-sunken)] flex flex-col justify-between transition-all duration-150 ${
                  plan.isPopular
                    ? 'border-2 border-[color:var(--accent)]'
                    : 'border border-[color:var(--border-subtle)] hover:border-[color:var(--border-strong)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-display font-bold text-lg text-[color:var(--text-primary)]">
                      {plan.name}
                    </h4>
                    <span className="font-mono text-[10px] text-[color:var(--green)] bg-[color:var(--green-soft)] px-2 py-0.5 rounded-full">
                      {plan.sla}
                    </span>
                  </div>

                  <p className="text-[11px] text-[color:var(--text-faint)] leading-normal mb-4">
                    {plan.tagline}
                  </p>

                  <div className="py-3 border-y border-[color:var(--border-subtle)] mb-4">
                    {price === 0 ? (
                      <div>
                        <span className="font-mono font-bold text-xl text-[color:var(--accent)]">
                          A cotizar
                        </span>
                        <span className="text-[10px] text-[color:var(--text-faint)] block">
                          Según alcance cerrado
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono font-bold text-2xl text-[color:var(--text-primary)]">
                          S/ {price.toFixed(2)}
                        </span>
                        <span className="text-[11px] text-[color:var(--text-faint)]">/ mes</span>
                      </div>
                    )}
                    <span className="text-[10px] text-[color:var(--text-faint)] block mt-0.5 font-mono">
                      {plan.limits}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-[color:var(--text-secondary)]"
                      >
                        <Check className="w-3.5 h-3.5 text-[color:var(--accent)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={plan.isPopular ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => handleAddPlan(plan)}
                  className="w-full justify-center"
                  iconLeft={<Plus className="w-3.5 h-3.5" />}
                >
                  Agregar plan al carrito
                </Button>
              </div>
            );
          })}
        </div>

        {/* Custom adaptation footer note */}
        <div className="p-4 rounded-[14px] bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[color:var(--text-muted)]">
          <span>
            ¿Necesitas que {product.name} tenga un módulo o conexión a la medida de tu empresa?
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onConsultCustom(product.name);
            }}
            className="text-xs font-bold text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] whitespace-nowrap cursor-pointer underline"
          >
            Consultar software personalizado →
          </button>
        </div>
      </div>
    </Dialog>
  );
};
