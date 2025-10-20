import { Card, Button } from 'react-bootstrap';

export default function ProductCard({ p, onAdd }){
  return (
    <Card className="h-100">
      <Card.Img src={p.image} alt={p.name}/>
      <Card.Body>
        <Card.Title className="fs-6">{p.name}</Card.Title>
        <Card.Text className="fw-semibold">${p.price}</Card.Text>
        <Button onClick={()=>onAdd(p)}>Agregar</Button>
      </Card.Body>
    </Card>
  );
}