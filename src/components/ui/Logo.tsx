import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="text-2xl font-bold">
      <img
        src={"/assets/shared/desktop/logo.svg"}
        alt="Logo"
        className="h-8 md:h-10"
      />
    </Link>
  );
}
