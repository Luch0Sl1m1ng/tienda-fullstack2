import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const isHome = useLocation().pathname === "/";

  return (
    <Navbar expand="lg" className={isHome ? "navbar-overlay" : "navbar-solid"}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Trenes de Chile
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/#rutas">Recorridos</Nav.Link>
            <Nav.Link as={Link} to="/checkout">Mis boletos</Nav.Link>
            <Nav.Link as={Link} to="/registro">Registrar viajero</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}







