import React, { useState } from "react";

export default function crearCardLego({ lego, id, cart, setCart }) {
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);

    const handleSelect = (value) => {
        setCantidadSeleccionada(value === "more" ? 6 : Number(value));
    };

    const addToCart = () => {
        setCart(prev => [...prev, { ...lego, cantidad: cantidadSeleccionada }]);
    };

    const removeFromCart = cod => {
        setCart(prev => prev.filter(item => item.COD !== cod));
    };

    const enCarrito = cart.some(item => item.COD === lego.COD);

    return (
        <div
            key={id}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs mx-auto transition-transform hover:scale-105"
        >
            <div className="w-40 h-40 flex items-center justify-center mb-4">
                <img
                    src={`/asserts/legos/${lego.COD}.png`}
                    alt={lego["Nombre"] || lego["NOMBRE"]}
                    className="w-full h-full object-cover rounded-full border-4 border-gray-200 shadow"
                    onError={e => { e.target.onerror = null; e.target.src = "/asserts/notFound.jpg"; }}
                />
            </div>
            <h3 className="text-center w-full font-bold text-lg mb-1">
                {lego["Nombre"] || lego["NOMBRE"]}
            </h3>
            <div className="text-center font-semibold text-gray-800 mb-4">Precio: $ {lego["Precio"]}</div>
            <div className="w-full mb-4">
                <select
                    value={cantidadSeleccionada}
                    onChange={e => handleSelect(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                    <option value={1}>1 unidad</option>
                    <option value={2}>2 unidades</option>
                    <option value={3}>3 unidades</option>
                    <option value={4}>4 unidades</option>
                    <option value={5}>5 unidades</option>
                </select>
            </div>
            {enCarrito ? (
                <button
                    className="w-full py-2 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition mb-2"
                    onClick={() => removeFromCart(lego.COD)}
                >
                    Eliminar del carrito
                </button>
            ) : (
                <button
                    className="w-full py-2 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition mb-2"
                    onClick={addToCart}
                >
                    Agregar al carrito
                </button>
            )}
        </div>
    );
}