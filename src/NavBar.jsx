import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = ({ cartCount }) => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
            <div className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-semibold transition-colors hover:text-yellow-400 ${isActive ? "text-yellow-400" : "text-white"}`
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/legos"
                        className={({ isActive }) =>
                            `font-semibold transition-colors hover:text-yellow-400 ${isActive ? "text-yellow-400" : "text-white"}`
                        }
                    >
                        Legos
                    </NavLink>
                </div>
                <div className="flex items-center gap-6">
                    <NavLink to="/comprar" className="relative">
                        <FaShoppingCart size={26} />
                        {cartCount > 0 && (
                            <span
                                className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-base font-bold shadow"
                            >
                                {cartCount}
                            </span>
                        )}
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}