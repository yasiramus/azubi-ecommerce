import { useNavigate } from "react-router";

import Button from "./Button";

export default function GoBack() {
  const navigate = useNavigate();
  return (
    <Button
      variant="transparent"
      onClick={() => navigate(-1)}
      className="!capitalize !text-black/50 hover:underline"
    >
      Go Back
    </Button>
  );
}
