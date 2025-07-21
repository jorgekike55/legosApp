import { useState } from "react";
import { Navbar } from "./NavBar";
import { AppRouter } from "./router/AppRouter";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-600">
      <Navbar cartCount={cart.length} />
      <div className="main-content">
        <AppRouter cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}