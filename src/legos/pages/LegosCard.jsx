import React, { useState } from "react";

const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    textAlign: "center"
};

export default function crearCardLego({ lego, id, cart, setCart }) {
    // Estado local para la cantidad seleccionada antes de agregar al carrito
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);

    // Cuando el usuario cambia la cantidad en el select
    const handleSelect = (value) => {
        setCantidadSeleccionada(value === "more" ? 6 : Number(value));
    };

    // Agrega el producto al carrito con la cantidad seleccionada
    const addToCart = () => {
        setCart(prev => [...prev, { ...lego, cantidad: cantidadSeleccionada }]);
    };

    // Elimina el producto del carrito
    const removeFromCart = cod => {
        setCart(prev => prev.filter(item => item.COD !== cod));
    };

    // Si el producto ya está en el carrito
    const enCarrito = cart.some(item => item.COD === lego.COD);

    return (
        <div
            key={id}
            style={{
                ...cardStyle,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <h3 style={{ textAlign: "center", width: "100%" }}>
                <span style={{ fontWeight: "bold" }}>
                    {lego["Nombre"] || lego["NOMBRE"]}
                </span>
            </h3>
            <div
                style={{
                    width: "300px",
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative"
                }}
            >
                <img
                    src={`/asserts/legos/${lego.COD}.png`}
                    alt={lego["Nombre"] || lego["NOMBRE"]}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block"
                    }}
                    onError={e => { e.target.onerror = null; e.target.src = "/asserts/notFound.jpg"; }}
                />
            </div>
            <div>Código: {lego["COD"]}</div>
            <div>Precio: $ {lego["Precio"]}</div>
            <div className="col">
                <select
                    value={cantidadSeleccionada}
                    onChange={e => handleSelect(e.target.value)}
                    style={{ padding: "4px 8px", borderRadius: "4px" }}
                >
                    <option value={1}>1 unidad</option>
                    <option value={2}>2 unidades</option>
                    <option value={3}>3 unidades</option>
                    <option value={4}>4 unidades</option>
                    <option value={5}>5 unidades</option>
                    <option value="more">Más de 5 unidades</option>
                </select>
            </div>
            {enCarrito ? (
                <button
                    style={{
                        margin: "0.5rem",
                        padding: "0.5rem 1rem",
                        background: "#dc3545",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                    }}
                    onClick={() => removeFromCart(lego.COD)}
                >
                    Eliminar del carrito
                </button>
            ) : (
                <button
                    style={{
                        margin: "0.5rem",
                        padding: "0.5rem 1rem",
                        background: "#28a745",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                    }}
                    onClick={addToCart}
                >
                    Agregar al carrito
                </button>
            )}
        </div>
    );
}