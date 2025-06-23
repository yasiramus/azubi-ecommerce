import { useState } from "react";

import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

import Logo from "./Logo";
import Button from "./Button";
import { tabs } from "../../utils";
import { useAppSelector } from "../../hook";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    // <header className=" text-white px-6 md:px-10 py-6">
    <header className="text-white px-6 md:px-10 py-6 relative z-50">
      <nav className="flex items-center justify-between  mx-auto">
        {/* mobile menu  */}
        <Button
          variant="outline"
          onClick={() => setOpenMenu((prev) => !prev)}
          className="md:hidden"
          aria-label="toggle menu"
        >
          {openMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
        {/* Logo */}
        <Logo />

        {/* desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 uppercase text-sm tracking-wide">
          {tabs.map(({ path, name }, index) => (
            <li key={index}>
              <NavLin path={path} name={name} />
            </li>
          ))}
        </ul>
        {/* Cart Icon */}
        <Button
          variant="outline"
          onClick={() => navigate("/checkout")}
          className="relative"
        >
          <img
            src={"/assets/shared/desktop/icon-cart.svg"}
            alt="icon-cart"
            className="h-6 md:h-8"
          />
          {totalQuantity > 0 && (
            <span
              className="absolute top-0 right-1 md:-right-1 md:-top-1 bg-[#D87D4A] hover:bg-[#fbaf85] text-white font-semibold rounded-full
                 flex items-center justify-center
                 h-4 w-4 text-[10px]
                 md:h-5 md:w-5 md:text-[11px]
                 lg:h-6 lg:w-6 lg:text-xs"
            >
              {totalQuantity}
            </span>
          )}
        </Button>
      </nav>

      {/* mobile|tablet nav */}
      {openMenu && (
        <div className="md:hidden absolute top-full left-0 w-full border-t border-gray-500 px-6 py-4 space-x-8">
          {tabs.map(({ path, name }, index) => (
            <NavLin
              key={index}
              path={path}
              name={name}
              onClick={() => setOpenMenu(false)}
            />
          ))}
        </div>
      )}
    </header>
  );
}

export function NavLin({
  path,
  name,
  onClick,
}: {
  path: string;
  name: string;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        isActive ? "text-[#D87D4A] hover:underline" : "hover:text-[#FBAF85]"
      }
    >
      {name}
    </NavLink>
  );
}
