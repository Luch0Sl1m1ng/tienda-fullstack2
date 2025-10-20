import { Card, Button } from "react-bootstrap";
import { money } from "../utils/format";

export default function ProductCard({ p, onAdd }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img src={p.image} alt={p.name} />
      <Card.Body>
        <Card.Title className="fs-5">{p.name}</Card.Title>
        <Card.Text className="text-muted">{p.desc}</Card.Text>
        <div className="fs-5 fw-semibold text-primary mb-2">{money(p.price)}</div>
        <Button className="w-100" onClick={() => onAdd(p)}>
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
}