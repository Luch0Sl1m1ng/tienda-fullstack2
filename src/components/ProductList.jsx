import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  return (
    <Container className="py-3">
      <Row xs={1} sm={2} md={3} className="g-4">
        {products.map((p) => (
          <Col key={p.id}>
            <ProductCard p={p} onAdd={onAdd} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}