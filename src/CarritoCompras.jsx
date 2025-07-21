import "./CarritoCompras.css";

export default function CarritoCompras({ cart, setCart }) {

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
        <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Carrito de compras</b></h4></div>
                            <div className="col align-self-center text-right text-muted">{cart.reduce((acc, item) => acc + (item.cantidad || 1), 0)} Elementos</div>
                        </div>
                    </div>
                    {cart.length === 0 && (
                        <div className="text-center">
                            <h2>El carrito está vacío</h2>
                            <img src="/asserts/empty-cart.png" alt="Carrito vacío" className="img-fluid" />
                        </div>
                    )}
                    {cart.map((item, index) => (
                        <div className="row border-top border-bottom" key={index}>
                            <div className="row main align-items-center">
                                <div className="col-2">
                                    <img className="img-fluid" src={`/asserts/legos/${item.COD}.png`} alt={item["Nombre"] || item["NOMBRE"]} />
                                </div>
                                <div className="col">
                                    <div className="row text-muted">{item["Nombre"] || item["NOMBRE"]}</div>
                                    <div className="row">Código: {item.COD}</div>
                                </div>
                                <div className="col">
                                    <select
                                        value={item.cantidad || 1}
                                        onChange={e => handleSelect(item.COD, e.target.value)}
                                        style={{ padding: "4px 8px", borderRadius: "4px" }}
                                    >
                                        <option value={1}>1u</option>
                                        <option value={2}>2u</option>
                                        <option value={3}>3u</option>
                                        <option value={4}>4u</option>
                                        <option value={5}>5u</option>
                                    </select>
                                </div>
                                <div className="col">
                                    $ {(((parseFloat((item.Precio || item["Precio"] || "0").replace(/\./g, "")) || 0) * (item.cantidad || 1)).toLocaleString("es-CO"))}
                                    <span
                                        className="close"
                                        style={{ cursor: "pointer", marginLeft: "10px" }}
                                        onClick={() => setCart(cart.filter(i => i.COD !== item.COD))}
                                    >
                                        &#10005;
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Resumen</b></h5></div>
                    <hr />
                    <div className="row">
                        <div className="col" style={{ paddingLeft: 0 }}>
                            Total de legos: {cart.reduce((acc, item) => acc + (item.cantidad || 1), 0)}
                        </div>
                    </div>
                    <div className="row" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
                        <div className="col">Precio Total</div>
                        <div className="col text-right">
                            $ {cart
                                .reduce(
                                    (acc, item) =>
                                        acc +
                                        ((parseFloat((item.Precio || item["Precio"] || "0").replace(/\./g, "")) || 0) *
                                            (item.cantidad || 1)),
                                    0
                                )
                                .toLocaleString("es-CO")}
                        </div>
                    </div>
                    <button className="btn">CHECKOUT</button>
                </div>
            </div>
        </div>
    );
}