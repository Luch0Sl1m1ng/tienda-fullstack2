import { useCart } from '../context/CartContext';

export default function Checkout(){
  const { items, total, removeItem, clear } = useCart();
  return (
    <div className="py-4">
      <h1>Checkout</h1>
      {items.length === 0 ? <p>Carrito vacío</p> : (
        <>
          <ul className="list-group mb-3">
            {items.map(it => (
              <li key={it.id} className="list-group-item d-flex justify-content-between align-items-center">
                {it.name} x{it.qty}
                <div>
                  <span className="me-3">${it.price * it.qty}</span>
                  <button className="btn btn-sm btn-outline-danger" onClick={()=>removeItem(it.id)}>Quitar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <strong>Total: ${total}</strong>
            <button className="btn btn-outline-secondary" onClick={clear}>Vaciar carrito</button>
          </div>
        </>
      )}
    </div>
  );
}