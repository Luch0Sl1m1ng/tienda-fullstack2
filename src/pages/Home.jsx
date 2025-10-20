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
      <section className="text-center my-5">
        <h1 className="display-4 text-primary">Bienvenido a Mi E-Commerce</h1>
        <p className="text-muted fs-5">Descubre los mejores productos de tecnología</p>
      </section>

      {/* Título catálogo */}
      <h2 className="text-center mb-3">Catalogo de Productos</h2>
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
