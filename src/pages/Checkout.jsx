import { Container, Row, Col } from "react-bootstrap";
import Cart from "../components/Cart"; // 👈 importa el carrito real

export default function Checkout() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="mb-4 text-center">Mis boletos</h2>
          <Cart />  {/* 👈 aquí va el componente real */}
        </Col>
      </Row>
    </Container>
  );
}




