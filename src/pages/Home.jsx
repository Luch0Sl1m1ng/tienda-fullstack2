import { Container, Row, Col } from "react-bootstrap";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import RegistrationForm from "../components/RegistrationForm";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addItem } = useCart(); // 👈 del contexto global

  // handler explícito (útil si quieres loguear)
  const handleAdd = (p) => {
    // console.log("ADD", p);
    addItem(p);
  };

  return (
    <>
      <section
        className="hero-banner"
        style={{ backgroundImage: "url('/images/tren_portada.jpg')" }}
        id="inicio"
      >
        <div className="hero-content">
          <h1 className="display-3 fw-bold">Trenes de Chile</h1>
          <p className="fs-5">Compra tus boletos de manera fácil y rápida</p>
        </div>
      </section>

      <Container className="py-4">
        <h2 className="section-title" id="rutas">Rutas Disponibles</h2>

        {/* 👇 ¡IMPORTANTE! Pasamos onAdd */}
        <ProductList products={products} onAdd={handleAdd} />

        <Row className="mt-4 g-4">
          <Col md={8}>
            <RegistrationForm title="Registro de Viajero" />
          </Col>
          <Col md={4}>
            <Cart />
          </Col>
        </Row>
      </Container>
    </>
  );
}






