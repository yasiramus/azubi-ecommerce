import { Link } from "react-router";

import Logos from "../assets/shared/desktop/logo.svg";

export default function Logo() {
  return (
    <Link to="/" className="text-2xl font-bold">
      <img src={Logos} alt="Logo" className="h-8 md:h-10" />
    </Link>
  );
}
