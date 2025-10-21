import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartCtx = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cart") || "[]"); }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (p) => {
    setItems((prev) => {
      const f = prev.find((x) => x.id === p.id);
      return f
        ? prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x))
        : [...prev, { id: p.id, title: p.title, price: p.price, qty: 1 }];
    });
  };
  const removeItem = (id) => setItems((prev) => prev.filter((x) => x.id !== id));
  const clear = () => setItems([]);

  const { count, total } = useMemo(() => ({
    count: items.reduce((a, b) => a + b.qty, 0),
    total: items.reduce((a, b) => a + b.qty * b.price, 0)
  }), [items]);

  return (
    <CartCtx.Provider value={{ items, addItem, removeItem, clear, count, total }}>
      {children}
    </CartCtx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
