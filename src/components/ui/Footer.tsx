import { Link } from "react-router";

import Logo from "./Logo";
import { NavLin } from "./Navbar";
import { tabs, social_media } from "../../utils";

export default function Footer() {
  return (
    <footer className="bg-dark text-white px-6 md:px-24 py-12 text-center md:text-left">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Logo + Nav */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <Logo />

          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm uppercase tracking-widest font-medium">
            {tabs.map(({ path, name }, index) => (
              <NavLin key={index} path={path} name={name} />
            ))}
          </nav>
        </div>

        {/* Description */}
        <p className="text-sm text-light-gray max-w-xl leading-relaxed">
          Audiophile is an all-in-one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <p className="text-sm text-light-gray">
            Copyright 2021. All Rights Reserved
          </p>

          <div className="flex space-x-4 justify-center md:justify-end">
            {/* Social Media Icons */}
            {social_media.map((social, index) => (
              <Link key={index} to={social.link} className="hover:bg-primary">
                <img src={social.icon} alt={social.name} className="text-xl" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
