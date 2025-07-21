import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = ({ cartCount }) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2" style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/"
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/legos"
                    >
                        Legos
                    </NavLink>
                </div>
            </div>


            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end  ">
                <ul className="navbar-nav ml-auto">
                    <NavLink className="nav-item nav-link" to="/comprar" style={{ position: "relative", padding: 0, marginRight: "2rem" }}>
                        <FaShoppingCart size={24} color="white" />
                        {cartCount > 0 && (
                            <span
                                style={{
                                    position: "absolute",
                                    top: "-8px",
                                    right: "-10px",
                                    minWidth: "28px",
                                    height: "28px",
                                    background: "#dc3545",
                                    color: "#fff",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.1rem",
                                    fontWeight: "bold",
                                    zIndex: 1,
                                    boxShadow: "0 0 2px #333"
                                }}
                            >
                                {cartCount}
                            </span>
                        )}
                    </NavLink>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        className="nav-item nav-link"
                        to="/login"
                    >
                        Login
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}