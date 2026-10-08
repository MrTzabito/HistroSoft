import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { PRODUCTS } from '../../data/products';
import { PricingPlan, BillingCycle } from '../../types';
import { PricingCard } from '../ui/PricingCard';
import { Tabs } from '../ui/Tabs';
import { Switch } from '../ui/Switch';
import { Button } from '../ui/Button';
import { Check, Database, Lock, Server, ArrowRight } from 'lucide-react';

export interface ProductsSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
  onConsultProduct: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectPlan,
  onConsultProduct,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('histro-erp');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  const currentProduct =
    PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const productTabs = PRODUCTS.map((p) => ({
    id: p.id,
    label: p.name,
    badge: p.category.split(' ')[0],
  }));

  return (
    <section id="productos" className="py-20 md:py-28 border-b-2 border-[color:var(--border-subtle)] bg-[color:var(--surface-sunken)]">
      <Container>
        {/* Split Section Header */}
        <SectionHeader
          title="Soluciones ya creadas con planes listos para operar."
          description="Plataformas paquetizadas de ERP, CRM, Sistemas, Herramientas y Automatizaciones. Cada producto cuenta con planes adaptados a la escala de tu empresa, con infraestructura dedicada, soporte y opción de adaptaciones personalizadas."
        />

        {/* Product selector & Billing cycle row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-6 border-b-2 border-[color:var(--border-subtle)]">
          {/* Tabs for products */}
          <Tabs
            items={productTabs}
            activeId={selectedProductId}
            onChange={(id) => setSelectedProductId(id)}
          />

          {/* Billing Switch */}
          <div className="flex items-center gap-3 self-start lg:self-auto bg-[color:var(--surface-raised)] px-4 py-2 rounded-full border border-[color:var(--border-subtle)]">
            <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-[color:var(--text-primary)]' : 'text-[color:var(--text-faint)]'}`}>
              Mensual
            </span>
            <Switch
              checked={billingCycle === 'annual'}
              onChange={(checked) => setBillingCycle(checked ? 'annual' : 'monthly')}
            />
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-semibold ${billingCycle === 'annual' ? 'text-[color:var(--text-primary)]' : 'text-[color:var(--text-faint)]'}`}>
                Anual
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[color:var(--green)] bg-[color:var(--green-soft)] px-2 py-0.5 rounded-full border border-[color:var(--green)]/30">
                -20%
              </span>
            </div>
          </div>
        </div>

        {/* Selected Product Overview Card */}
        <div className="mb-10 p-6 md:p-8 rounded-[22px] bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-2xl text-[color:var(--text-primary)]">
                {currentProduct.name}
              </span>
              <span className="text-xs font-mono text-[color:var(--accent)] bg-[color:var(--accent-subtle)] px-2.5 py-0.5 rounded-full border border-[color:var(--accent)]/30 uppercase">
                {currentProduct.category}
              </span>
            </div>
            <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
              {currentProduct.summary}
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0 border-t md:border-t-0 md:border-l border-[color:var(--border-subtle)] pt-4 md:pt-0 md:pl-6">
            <span className="text-[11px] uppercase font-bold text-[color:var(--text-faint)] tracking-wider">
              Garantía técnica de plataforma:
            </span>
            <div className="flex items-center gap-2 text-xs text-[color:var(--green)]">
              <Server className="w-3.5 h-3.5" />
              <span>Infraestructura Cloud de alta disponibilidad</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[color:var(--text-secondary)]">
              <Database className="w-3.5 h-3.5 text-[color:var(--accent)]" />
              <span>Bases de datos aisladas con backups diarios</span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {currentProduct.plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
              onSelectPlan={onSelectPlan}
            />
          ))}
        </div>

        {/* Footnote with direct prompt to consult about adaptations or custom software */}
        <div className="mt-12 p-6 rounded-[22px] bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-[color:var(--text-muted)]">
            <Lock className="w-4 h-4 text-[color:var(--accent)] shrink-0" />
            <span>
              ¿Tienes un requerimiento que no cubre un plan estándar? Desarrollamos módulos a la medida para cualquiera de nuestras plataformas.
            </span>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onConsultProduct(currentProduct.name)}
            iconRight={<ArrowRight className="w-3.5 h-3.5" />}
            className="shrink-0"
          >
            Consultar sobre {currentProduct.name}
          </Button>
        </div>
      </Container>
    </section>
  );
};
