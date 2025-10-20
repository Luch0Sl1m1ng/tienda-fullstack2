import products from "../data/products.json";
import { useCart } from "../context/CartContext";
import ProductList from "../components/ProductList";
import { Container } from "react-bootstrap";

export default function Products(){
  const { addItem } = useCart();
  return (
    <Container className="py-4">
      <h1 className="mb-3">Productos</h1>
      <ProductList products={products} onAdd={addItem}/>
    </Container>
  );
}
