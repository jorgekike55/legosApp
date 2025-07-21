import { useEffect, useState } from "react";
import LegosCard from "./LegosCard";

const SHEET_ID = "1okOK_-h464CVCxFSHyBIOofCoSSh0G3QM4FLHCO9k8s";
const API_KEY = "AIzaSyAl6b0Lsb9muO_oWVb4z8LVNzJCfOh8qh4";
const RANGE = "InformacionLegos!A1:H1000";

function crearCatalogoDesdeArray(values) {
    const headers = values[0];
    const items = values.slice(1).map(row => {
        const obj = {};
        headers.forEach((header, idx) => {
            obj[header] = row[idx];
        });
        obj.cantidad = 0;
        return obj;
    });
    if (items.length === 0) return [];
    const catalogo = {};
    items.forEach(item => {
        const categoria = item["CATEGORIA"] && item["CATEGORIA"].trim() !== "" ? item["CATEGORIA"] : "Otros";
        if (!catalogo[categoria]) catalogo[categoria] = [];
        catalogo[categoria].push(item);
    });

    return Object.entries(catalogo).map(([categoria, legos]) => ({
        categoria,
        legos,
    }));
}

export default function LegosPage({ cart, setCart }) {
    const [data, setData] = useState([]);
    const [collapsed, setCollapsed] = useState({});

    useEffect(() => {
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`)
            .then(res => res.json())
            .then(result => {
                if (result.values) {
                    setData(crearCatalogoDesdeArray(result.values));
                }
            });
    }, []);

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem",
        padding: "0 2rem",
        borderLeft: "2px solid #ccc",
        borderRight: "2px solid #ccc",
        boxSizing: "border-box"
    };

    const toggleCollapse = categoria => {
        setCollapsed(prev => ({
            ...prev,
            [categoria]: !prev[categoria]
        }));
    };

    return (
        <>
            <h1 align="center" style={{ fontWeight: "bold" }}>Catálogo</h1>
            {data.map((categoriaObj, idx) => (
                <div key={idx} style={{ marginBottom: "2rem" }}>
                    <h1
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            cursor: "pointer",
                            color: "#007bff"
                        }}
                        onClick={() => toggleCollapse(categoriaObj.categoria)}
                        aria-label={collapsed[categoriaObj.categoria] ? "Expandir" : "Colapsar"}
                    >
                        {categoriaObj.categoria}
                    </h1>
                    {!collapsed[categoriaObj.categoria] && (
                        <div style={gridStyle}>
                            {categoriaObj.legos.map((lego, i) => (
                                <LegosCard
                                    key={i}
                                    lego={lego}
                                    id={i}
                                    cart={cart}
                                    setCart={setCart}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}