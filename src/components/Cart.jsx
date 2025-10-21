import { Card, ListGroup, Button, Badge } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const CLP = (n) => n.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

export default function Cart() {
  const { items, removeItem, total, count, clear } = useCart();

  return (
    <Card className="shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <span className="fw-bold">Carrito de Compras</span>
        <Badge bg="primary">{count} items</Badge>
      </Card.Header>

      <ListGroup variant="flush">
        {items.length === 0 && (
          <ListGroup.Item className="text-muted">Sin boletos</ListGroup.Item>
        )}

        {items.map((it) => (
          <ListGroup.Item
            key={it.id}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <div className="fw-semibold">{it.title}</div>
              <small className="text-muted">
                Cantidad: {it.qty} × {CLP(it.price)}
              </small>
            </div>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => removeItem(it.id)}
            >
              Quitar
            </Button>
          </ListGroup.Item>
        ))}

        <ListGroup.Item className="d-flex justify-content-between">
          <strong>Total:</strong>
          <strong>{CLP(total)}</strong>
        </ListGroup.Item>
      </ListGroup>

      <Card.Footer className="d-grid gap-2">
        <Button variant="success">Proceder al Pago</Button>
        {items.length > 0 && (
          <Button variant="outline-secondary" onClick={clear}>
            Vaciar carrito
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}

