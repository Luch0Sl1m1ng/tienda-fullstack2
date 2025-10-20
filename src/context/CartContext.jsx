import { createContext, useContext, useEffect, useState } from 'react';

const CartCtx = createContext();
export const useCart = () => useContext(CartCtx);

export function CartProvider({children}) {
  const [items, setItems] = useState(() => {
    const raw = localStorage.getItem('cart');
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(()=> localStorage.setItem('cart', JSON.stringify(items)), [items]);

  const addItem = (p, qty=1) => {
    setItems(prev => {
      const i = prev.find(x=>x.id===p.id);
      return i ? prev.map(x=> x.id===p.id ? {...x, qty:x.qty+qty} : x)
               : [...prev, {...p, qty}];
    });
  };
  const removeItem = id => setItems(prev => prev.filter(x=>x.id!==id));
  const clear = ()=> setItems([]);
  const total = items.reduce((a,b)=> a + b.price*b.qty, 0);

  return (
    <CartCtx.Provider value={{items, addItem, removeItem, clear, total}}>
      {children}
    </CartCtx.Provider>
  );
}