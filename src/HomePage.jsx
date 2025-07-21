import LegosPage from './legos/pages/LegosPage';
export default function HomePage({ cart, setCart }) {
    return (
        <>
            <div className="text-center my-8">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Contáctanos en Popayán</h1>
                <a href="https://wa.link/pact9p" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/asserts/contacto.png"
                        alt="Logo"
                        width={834}
                        height={299}
                        className="mx-auto mb-4 transition-transform hover:scale-105"
                        style={{ width: "834px", height: "299px", maxWidth: "100%", objectFit: "contain" }}
                    />
                </a>
            </div>
            <hr className="my-8 border-gray-300" />
            <LegosPage cart={cart} setCart={setCart} />
        </>
    );
}