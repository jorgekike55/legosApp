import { useState } from "react";
import { Navbar } from "./NavBar";
import { AppRouter } from "./router/AppRouter";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cartCount={cart.length} />
      <div className="main-content">
        <AppRouter cart={cart} setCart={setCart} />
      </div>
    </>
  );
}