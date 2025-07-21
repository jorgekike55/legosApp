import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import LegosPage from "../legos/pages/LegosPage";
import CarritoCompras from "../CarritoCompras";

export const AppRouter = ({ cart, setCart }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
                <Route path="/legos" element={<LegosPage cart={cart} setCart={setCart} />} />
                <Route path="/comprar" element={<CarritoCompras cart={cart} setCart={setCart} />} />
                <Route path="*" element={<HomePage cart={cart} setCart={setCart} />} />
            </Routes>

        </>
    );
}   