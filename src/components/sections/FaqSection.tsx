import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { FAQ_ITEMS } from '../../data/faq';
import { Accordion } from '../ui/Accordion';

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');

  const categories = [
    { id: 'todas', label: 'Todas' },
    { id: 'contratos', label: 'Contratos y código' },
    { id: 'proyectos', label: 'Plazos y pagos' },
    { id: 'planes', label: 'Planes empaquetados' },
    { id: 'tecnología', label: 'Garantía y soporte' },
  ];

  const filteredItems =
    activeCategory === 'todas'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const accordionItems = filteredItems.map((item, idx) => ({
    id: `faq-${idx}`,
    title: item.question,
    content: item.answer,
    category: item.category,
  }));

  return (
    <section id="faq" className="py-20 md:py-28 bg-[color:var(--surface-sunken)] border-b-2 border-[color:var(--border-subtle)]">
      <Container>
        {/* Split Section Header */}
        <SectionHeader
          title="Respuestas claras sobre productos, contratos y soporte."
          description="Transparencia total sobre aspectos técnicos, personalizaciones sobre productos, exportación de datos y niveles de servicio."
        />

        {/* Filter categories tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b-2 border-[color:var(--border-subtle)]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[color:var(--contrast-fill)] text-[color:var(--contrast-fg)]'
                  : 'bg-[color:var(--surface-raised)] text-[color:var(--text-muted)] border border-[color:var(--border-subtle)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--border-strong)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion items={accordionItems} defaultOpenId="faq-0" />
        </div>
      </Container>
    </section>
  );
};
