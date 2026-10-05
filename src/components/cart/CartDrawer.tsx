import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useToast } from '../ui/Toast';
import { X, Trash2, CheckCircle2, ArrowRight, ShieldCheck, Smartphone } from 'lucide-react';
import { PaymentMethod } from '../../types';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalAmount,
  } = useCart();

  const { showToast } = useToast();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('yape');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerCompany, setCustomerCompany] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderCode, setOrderCode] = useState('');

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      showToast('Datos requeridos', 'Por favor ingresa tu nombre y número de WhatsApp para procesar la activación.', 'error');
      return;
    }

    const code = `HS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderCode(code);
    setOrderConfirmed(true);

    showToast('Pedido generado con éxito', `Tu orden ${code} está lista para procesar el pago.`, 'success');
  };

  const handleSendWhatsAppOrder = () => {
    const itemsText = items
      .map(
        (i) =>
          `• ${i.product.name} (Plan ${i.plan.name} - ${i.billingCycle === 'annual' ? 'Anual' : 'Mensual'}) x${i.quantity}`
      )
      .join('%0A');

    const message = `¡Hola HistroSoft! 👋 Acabo de generar un pedido en su catálogo:%0A%0A*Código de Orden:* ${orderCode}%0A*Cliente:* ${customerName}%0A*Empresa:* ${customerCompany || 'No especificada'}%0A*WhatsApp:* ${customerPhone}%0A*Método de pago:* ${paymentMethod.toUpperCase()}%0A%0A*Herramientas seleccionadas:*%0A${itemsText}%0A%0A*Total a pagar:* S/ ${totalAmount.toFixed(2)}%0A%0A¿Me confirman para realizar el abono por ${paymentMethod.toUpperCase()} y habilitar el acceso? Gracias.`;

    window.open(`https://wa.me/51913862963?text=${message}`, '_blank');
  };

  const handleReset = () => {
    clearCart();
    setOrderConfirmed(false);
    setIsCheckingOut(false);
    closeCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Scrim */}
      <div
        className="fixed inset-0 bg-[color:var(--azul-noche)]/70 backdrop-blur-xs transition-opacity duration-200"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[color:var(--surface-sunken)] border-l border-[color:var(--border-subtle)] text-[color:var(--text-primary)] flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
          {/* Header */}
          <div className="p-6 border-b border-[color:var(--border-subtle)] flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-xl text-[color:var(--text-primary)]">
                Carrito de herramientas
              </h3>
              <p className="text-xs text-[color:var(--text-faint)] mt-0.5">
                Revisa tus productos y paga fácilmente por Yape o Plin
              </p>
            </div>
            <button
              onClick={closeCart}
              className="w-8 h-8 rounded-full border border-[color:var(--border-subtle)] flex items-center justify-center text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--border-hover)] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderConfirmed ? (
              <div className="space-y-6 text-center py-4">
                <div className="w-16 h-16 rounded-full bg-[color:var(--green-soft)] border border-[color:var(--green)]/40 flex items-center justify-center mx-auto text-[color:var(--green)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[color:var(--accent)] uppercase tracking-wider block">
                    Orden generada · {orderCode}
                  </span>
                  <h4 className="font-display font-bold text-2xl text-[color:var(--text-primary)]">
                    Total a pagar: S/ {totalAmount.toFixed(2)}
                  </h4>
                  <p className="text-xs text-[color:var(--text-muted)] max-w-xs mx-auto">
                    Transfiere mediante {paymentMethod.toUpperCase()} para activar tus credenciales y entorno inmediatamente.
                  </p>
                </div>

                {/* Payment instructions box */}
                <div className="p-5 rounded-[16px] bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] text-left space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-[color:var(--border-subtle)]">
                    <Smartphone className="w-4 h-4 text-[color:var(--accent)]" />
                    <span className="text-xs font-bold text-[color:var(--text-primary)] uppercase tracking-wider">
                      Instrucciones de pago: {paymentMethod.toUpperCase()}
                    </span>
                  </div>

                  {(paymentMethod === 'yape' || paymentMethod === 'plin') && (
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-[color:var(--text-faint)] block text-[11px]">Número corporativo (Yape / Plin):</span>
                        <span className="font-mono font-bold text-lg text-[color:var(--accent)]">
                          +51 913 862 963
                        </span>
                      </div>
                      <div>
                        <span className="text-[color:var(--text-faint)] block text-[11px]">Titular:</span>
                        <span className="text-[color:var(--text-primary)] font-semibold">
                          HistroSoft Soluciones Digitales
                        </span>
                      </div>
                      <div>
                        <span className="text-[color:var(--text-faint)] block text-[11px]">Monto exacto:</span>
                        <span className="font-mono font-bold text-sm text-[color:var(--text-primary)]">
                          S/ {totalAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'transferencia' && (
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-[color:var(--text-faint)] block text-[11px]">Cuenta Corriente BCP Soles:</span>
                        <span className="font-mono font-semibold text-[color:var(--text-primary)]">191-70701168-0-19</span>
                      </div>
                      <div>
                        <span className="text-[color:var(--text-faint)] block text-[11px]">CCI Interbancario:</span>
                        <span className="font-mono font-semibold text-[color:var(--text-primary)]">00219117070116801955</span>
                      </div>
                    </div>
                  )}

                  <p className="text-[11px] text-[color:var(--text-faint)] pt-2 border-t border-[color:var(--border-subtle)]">
                    Envía la captura de tu comprobante a nuestro WhatsApp (+51 913 862 963) para activar tus accesos en menos de 15 minutos.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleSendWhatsAppOrder}
                    className="w-full justify-center bg-[#25D366] text-black hover:bg-[#20ba59]"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Confirmar pedido por WhatsApp
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleReset}
                    className="w-full justify-center text-[color:var(--text-faint)]"
                  >
                    Cerrar y volver al catálogo
                  </Button>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] flex items-center justify-center mx-auto text-[color:var(--text-faint)]">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-base text-[color:var(--text-primary)]">
                    Tu carrito está vacío
                  </h4>
                  <p className="text-xs text-[color:var(--text-faint)] max-w-xs mx-auto">
                    Explora el catálogo y agrega el CRM, ERP, portal web o automatizaciones que tu negocio necesita.
                  </p>
                </div>
              </div>
            ) : isCheckingOut ? (
              <form onSubmit={handleCheckout} className="space-y-4 text-left">
                <div className="pb-3 border-b border-[color:var(--border-subtle)] flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--accent)]">
                    Datos de activación
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[color:var(--text-faint)] hover:text-[color:var(--text-primary)] underline cursor-pointer"
                  >
                    ← Modificar herramientas
                  </button>
                </div>

                <Input
                  label="Nombre y apellido *"
                  placeholder="Ej. Rodrigo Morales"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />

                <Input
                  label="WhatsApp para entrega de accesos *"
                  placeholder="Ej. 913 862 963"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  required
                />

                <Input
                  label="Correo corporativo (opcional)"
                  type="email"
                  placeholder="rodrigo@empresa.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />

                <Input
                  label="Nombre del negocio o empresa (opcional)"
                  placeholder="Ej. Comercial Andina SAC"
                  value={customerCompany}
                  onChange={(e) => setCustomerCompany(e.target.value)}
                />

                {/* Payment Method Selector */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-semibold text-[color:var(--text-secondary)] block">
                    Selecciona tu medio de pago:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'yape', label: 'Yape' },
                      { id: 'plin', label: 'Plin' },
                      { id: 'transferencia', label: 'Transferencia BCP' },
                      { id: 'tarjeta', label: 'Tarjeta Crédito/Débito' },
                    ].map((pm) => (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setPaymentMethod(pm.id as PaymentMethod)}
                        className={`p-3 rounded-[12px] border text-xs font-semibold text-center transition-all cursor-pointer ${
                          paymentMethod === pm.id
                            ? 'bg-[color:var(--accent-subtle)] text-[color:var(--accent)] border-[color:var(--accent)]'
                            : 'bg-[color:var(--surface-raised)] text-[color:var(--text-muted)] border-[color:var(--border-subtle)] hover:border-[color:var(--border-strong)]'
                        }`}
                      >
                        {pm.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[color:var(--border-subtle)]">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Generar orden por S/ {totalAmount.toFixed(2)}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                {items.map((item) => {
                  const isAnnual = item.billingCycle === 'annual';
                  const price = isAnnual
                    ? item.plan.annualPricePEN
                    : item.plan.monthlyPricePEN;

                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-[16px] bg-[color:var(--surface-raised)] border border-[color:var(--border-subtle)] flex flex-col gap-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--accent)] bg-[color:var(--accent-subtle)] px-2 py-0.5 rounded-full border border-[color:var(--accent)]/30">
                            {item.product.category}
                          </span>
                          <h4 className="font-display font-bold text-base text-[color:var(--text-primary)] mt-1">
                            {item.product.name}
                          </h4>
                          <span className="text-xs text-[color:var(--text-faint)]">
                            Plan {item.plan.name} · {isAnnual ? 'Anual (-20%)' : 'Mensual'}
                          </span>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[color:var(--text-faint)] hover:text-[color:var(--red)] p-1 cursor-pointer transition-colors"
                          title="Eliminar del carrito"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-[color:var(--border-subtle)]/60">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-[color:var(--surface-sunken)] border border-[color:var(--border-subtle)] flex items-center justify-center text-xs hover:border-[color:var(--border-hover)] cursor-pointer"
                          >
                            -
                          </button>
                          <span className="font-mono text-xs font-bold px-1.5">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-[color:var(--surface-sunken)] border border-[color:var(--border-subtle)] flex items-center justify-center text-xs hover:border-[color:var(--border-hover)] cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="font-mono font-bold text-base text-[color:var(--text-primary)]">
                            S/ {(price * item.quantity).toFixed(2)}
                          </span>
                          <span className="text-[10px] text-[color:var(--text-faint)] block">
                            / {isAnnual ? 'año' : 'mes'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer checkout bar */}
          {items.length > 0 && !orderConfirmed && !isCheckingOut && (
            <div className="p-6 border-t border-[color:var(--border-subtle)] bg-[color:var(--surface-raised)] space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-[color:var(--text-faint)]">Total a pagar:</span>
                  <div className="text-[11px] text-[color:var(--green)] font-medium">
                    Activación en menos de 24h
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-2xl text-[color:var(--accent)]">
                    S/ {totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full justify-center"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Continuar y pagar por Yape / Plin
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[color:var(--text-faint)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[color:var(--green)]" />
                <span>Pago seguro por Yape, Plin o Transferencia BCP</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
