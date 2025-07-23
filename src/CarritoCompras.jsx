export default function CarritoCompras({ cart, setCart }) {

    let urlWhassap = "https://wa.link/pact9p";

    function whatsappLink() {
        const mensaje = encodeURIComponent(
            `Hola!\nEstoy interesado en comprar los siguientes legos:\n` +
            cart.map(item => `${item["Nombre"] || item["NOMBRE"]} (Código: ${item.COD}) - Cantidad: ${item.cantidad || 1}`).join("\n") +
            `\n¿A qué número puedo enviar la información de pago?`);

        urlWhassap = `https://wa.me/573226609407?text=${mensaje}`;
    }

    const handleSelect = (cod, value) => {
        setCart(cart =>
            cart.map(item =>
                item.COD === cod
                    ? { ...item, cantidad: value === "more" ? 6 : Number(value) }
                    : item
            )
        );
    };

    return (
        <div className="max-w-5xl mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <div className="mb-6 border-b pb-4">
                        <div className="flex justify-between items-center">
                            <h4 className="text-2xl font-bold">Carrito de compras</h4>
                            <span className="text-gray-500">{cart.reduce((acc, item) => acc + (item.cantidad || 1), 0)} Elementos</span>
                        </div>
                    </div>
                    {cart.length === 0 && (
                        <div className="text-center py-8">
                            <h2 className="text-xl font-semibold mb-4">El carrito está vacío</h2>
                            <img src="/asserts/empty-cart.png" alt="Carrito vacío" className="mx-auto w-40 h-40 object-contain" />
                        </div>
                    )}
                    {cart.map((item, index) => (
                        <div className="flex items-center border-b py-4" key={index}>
                            <img
                                className="w-20 h-20 object-contain rounded"
                                src={`/asserts/legos/${item.COD}.png`}
                                alt={item["Nombre"] || item["NOMBRE"]}
                            />
                            <div className="flex-1 ml-4">
                                <div className="text-lg font-semibold">{item["Nombre"] || item["NOMBRE"]}</div>
                                <div className="text-sm text-gray-500">Código: {item.COD}</div>
                            </div>
                            <div>
                                <select
                                    value={item.cantidad || 1}
                                    onChange={e => handleSelect(item.COD, e.target.value)}
                                    className="border rounded px-2 py-1"
                                >
                                    <option value={1}>1u</option>
                                    <option value={2}>2u</option>
                                    <option value={3}>3u</option>
                                    <option value={4}>4u</option>
                                    <option value={5}>5u</option>
                                </select>
                            </div>
                            <div className="ml-6 text-right">
                                <span className="font-bold text-lg text-gray-800">
                                    $ {(((parseFloat((item.Precio || item["Precio"] || "0").replace(/\./g, "")) || 0) * (item.cantidad || 1)).toLocaleString("es-CO"))}
                                </span>
                                <button
                                    className="ml-4 text-red-500 hover:text-red-700 text-xl"
                                    onClick={() => setCart(cart.filter(i => i.COD !== item.COD))}
                                    title="Eliminar"
                                >
                                    &#10005;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-80 bg-gray-50 rounded-lg p-6 shadow-inner h-fit">
                    <h5 className="text-xl font-bold mb-4">Resumen</h5>
                    <hr className="mb-4" />
                    <div className="flex justify-between mb-2">
                        <span>Total de legos:</span>
                        <span>{cart.reduce((acc, item) => acc + (item.cantidad || 1), 0)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-4 mt-4">
                        <span className="font-semibold">Precio Total</span>
                        <span className="font-bold text-lg">
                            $ {cart
                                .reduce(
                                    (acc, item) =>
                                        acc +
                                        ((parseFloat((item.Precio || item["Precio"] || "0").replace(/\./g, "")) || 0) *
                                            (item.cantidad || 1)),
                                    0
                                )
                                .toLocaleString("es-CO")}
                        </span>
                    </div>
                    <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded transition">
                        <a onClick={whatsappLink()} href={urlWhassap} className="block w-full h-full">Comprar</a>
                    </button>
                </div>
            </div>
        </div>
    );
}