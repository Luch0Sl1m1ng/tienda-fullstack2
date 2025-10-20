import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { items } = useCart();
  const count = items.reduce((a, b) => a + b.qty, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <span style={{ color: "#FFD500" }}> Trenes de Chile</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/products">Recorridos</Nav.Link>
            <Nav.Link as={Link} to="/checkout">
              Mis boletos{" "}
              {count > 0 && <Badge bg="light" text="dark" pill>{count}</Badge>}
            </Nav.Link>
            <Nav.Link href="#registro">Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}