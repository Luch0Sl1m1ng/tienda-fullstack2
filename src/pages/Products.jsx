import products from '../data/products.json';
import ProductList from '../components/ProductList';
import { useCart } from '../context/CartContext';

export default function Products(){
  const { addItem } = useCart();
  return <ProductList products={products} onAdd={addItem} />;
}