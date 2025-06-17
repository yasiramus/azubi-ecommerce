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
          {tabs.map((tab, index) => (
            <li key={index}>
              <NavLink to={tab.path} className="hover:text-orange-400">
                {tab.name}
              </NavLink>
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
