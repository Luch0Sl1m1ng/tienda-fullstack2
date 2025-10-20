import { Card, ListGroup, Badge, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { money } from "../utils/format";

export default function Cart() {
  const { items, total, removeItem, clear } = useCart();

  return (
    <Card className="shadow-sm">
      <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
        <span>Carrito de Compras</span>
        <Badge bg="light" text="dark">{items.reduce((a,b)=>a+b.qty,0)} items</Badge>
      </Card.Header>
      <ListGroup variant="flush">
        {items.length === 0 && (
          <ListGroup.Item className="text-muted">Carrito vacío</ListGroup.Item>
        )}
        {items.map((it) => (
          <ListGroup.Item key={it.id} className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-semibold">{it.name}</div>
              <small className="text-muted">Cantidad: {it.qty} × {money(it.price)}</small>
            </div>
            <div className="text-end">
              <div className="badge bg-success fs-6">{money(it.price * it.qty)}</div>
              <div>
                <button className="btn btn-sm btn-link text-danger p-0" onClick={() => removeItem(it.id)}>
                  Quitar
                </button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        <div className="d-flex justify-content-between fs-5 mb-3">
          <strong>Total:</strong>
          <span className="text-primary fw-bold">{money(total)}</span>
        </div>
        <div className="d-flex gap-2">
          <Button variant="success" className="flex-grow-1">Proceder al Pago</Button>
          <Button variant="outline-secondary" onClick={clear}>Vaciar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}