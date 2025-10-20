import { Container } from "react-bootstrap";
import Cart from "../components/Cart";

export default function Checkout(){
  return (
    <Container className="py-4">
      <h1 className="mb-3">Checkout</h1>
      <Cart/>
    </Container>
  );
}
