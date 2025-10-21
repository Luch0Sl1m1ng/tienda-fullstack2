import { Card, Button } from "react-bootstrap";

const CLP = (n) =>
  n.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

export default function ProductCard({ product, onAdd }) {
  const { title, subtitle, price, img } = product;

  const handleClick = (e) => {
    e.preventDefault(); // por si algún contenedor es clickable
    onAdd && onAdd(product); // 👈 dispara el add
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={img} alt={title} className="route-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text text-muted">{subtitle}</Card.Text>
        <div className="mt-auto">
          <div className="fw-bold mb-2">{CLP(price)}</div>
          <Button className="w-100" type="button" onClick={handleClick}>
            Comprar boleto
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

