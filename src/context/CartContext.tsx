import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, ProductDetails, PricingPlan, BillingCycle, Currency } from '../types';

interface CartContextType {
  items: CartItem[];
  currency: Currency;
  setCurrency: (c: Currency) => void;
  addItem: (product: ProductDetails, plan?: PricingPlan, billingCycle?: BillingCycle) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  totalAmount: number;
  totalItems: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // El carrito admite un solo sistema con un solo plan (para cambiar de plan se reemplaza).
  // Si quedó guardado un carrito con varios, se conserva el último y con cantidad 1.
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('histrosoft_cart');
      const parsed: CartItem[] = saved ? JSON.parse(saved) : [];
      return parsed.length > 0 ? [{ ...parsed[parsed.length - 1], quantity: 1 }] : [];
    } catch {
      return [];
    }
  });

  const [currency, setCurrency] = useState<Currency>('PEN');
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('histrosoft_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = (
    product: ProductDetails,
    plan?: PricingPlan,
    billingCycle: BillingCycle = 'monthly'
  ) => {
    const chosenPlan = plan || product.plans.find((p) => p.isPopular) || product.plans[0];
    const itemId = `${product.id}-${chosenPlan.id}-${billingCycle}`;

    // Solo un sistema a la vez: elegir otro plan o producto reemplaza lo que había.
    setItems([
      {
        id: itemId,
        product,
        plan: chosenPlan,
        billingCycle,
        quantity: 1,
      },
    ]);

    setIsCartOpen(true);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalAmount = items.reduce((acc, item) => {
    const isAnnual = item.billingCycle === 'annual';
    const price = isAnnual ? item.plan.annualPricePEN : item.plan.monthlyPricePEN;
    return acc + price * item.quantity;
  }, 0);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        currency,
        setCurrency,
        addItem,
        removeItem,
        clearCart,
        totalAmount,
        totalItems,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
