import { Container, Row, Col } from "react-bootstrap";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import RegistrationForm from "../components/Registrationform";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addItem } = useCart();

  return (
    <Container>
      {/* Hero */}
      <section
        className="text-center my-5 text-white hero-zoom"
        style={{
          // Recomendado: renombrar la imagen a /images/tren_portada.jpg (sin espacios)
          backgroundImage: "url('/images/imagen 1.jpg')",
          // Si insistes en usar 'imagen 1.jpg', usa esto en su lugar:
          // backgroundImage: "url('/images/imagen%201.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Overlay oscuro para legibilidad */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.45)"
          }}
        />
        <div style={{ position: "relative", zIndex: 1, padding: "6rem 1rem" }}>
          <h1 className="display-4 fw-bold">Trenes de Chile</h1>
          <p className="fs-5">Compra tus boletos de manera fácil y rápida</p>
        </div>
      </section>

      {/* Título catálogo */}
      <h2 className="text-center mb-3">Rutas Disponibles</h2>
      <ProductList products={products} onAdd={addItem} />

      {/* Registro + Carrito side-by-side */}
      <Row className="mt-4 g-4">
        <Col md={8}>
          <RegistrationForm />
        </Col>
        <Col md={4}>
          <Cart />
        </Col>
      </Row>
    </Container>
  );
}
