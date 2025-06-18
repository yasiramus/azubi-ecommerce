import { NavLink } from "react-router";

import Logo from "./Logo";
import { tabs } from "../utils";
import CartIcon from "../assets/shared/desktop/icon-cart.svg";

export default function Navbar() {
  return (
    <header className=" text-white px-6 md:px-10 py-6">
      <nav className="flex items-center justify-between  mx-auto">
        {/* Logo */}
        <Logo />

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 uppercase text-sm tracking-wide">
          {tabs.map(({ path, name }, index) => (
            <li key={index}>
              <NavLin path={path} name={name} />
            </li>
          ))}
        </ul>
        {/* Cart Icon */}
        <button className="text-xl">
          <img src={CartIcon} alt="icon-cart" className="h-6 md:h-8" />
        </button>
      </nav>
    </header>
  );
}

export function NavLin({ path, name }: { path: string; name: string }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "text-[#D87D4A] hover:underline" : "hover:text-[#FBAF85]"
      }
    >
      {name}
    </NavLink>
  );
}
