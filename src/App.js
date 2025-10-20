import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home(){ return <h1>Home</h1>; }
function Products(){ return <h1>Products</h1>; }
function Checkout(){ return <h1>Checkout</h1>; }
function NotFound(){ return <h1>404 - Página no encontrada</h1>; }

export default function App(){
  return (
    <BrowserRouter>
      <nav className="p-3 border-bottom d-flex gap-3">
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}