import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  return (
    <Row className="g-4">
      {products.map((p) => (
        <Col md={4} key={p.id}>
          <ProductCard product={p} onAdd={onAdd} />
        </Col>
      ))}
    </Row>
  );
}


