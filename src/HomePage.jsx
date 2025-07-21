import LegosPage from './legos/pages/LegosPage';
export default function HomePage({ cart, setCart }) {
    return (
        <>
            <div className="text-center text-dark">
                <h1 className="display-4 fw-bolder">Contactanos en Popayán</h1>
                <a href="https://wa.link/pact9p" target="_blank">
                    <img src={`/asserts/contacto.png`} alt="Logo" className="img-fluid mb-4" />
                </a>
            </div>
            <hr />
            <LegosPage cart={cart} setCart={setCart} />
        </>
    );
}
