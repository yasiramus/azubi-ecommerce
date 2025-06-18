import { Link } from "react-router";

import { Check } from "lucide-react";

import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { useAppSelector } from "../../hook";

export default function OrderConfirmationModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const items = useAppSelector((state) => state.cart.items);

  if (!items.length) return null;

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const mainItem = items[0];
  const otherCount = items.length - 1;

  return (
    <Modal
      onClose={onClose}
      className="w-full max-w-lg space-y-6 text-black"
      showCloseButton={false}
    >
      <div className="w-12 h-12 rounded-full bg-[#D87D4A] flex items-center justify-center">
        <Check className="text-white w-6 h-6" />
      </div>

      <h2 className="text-2xl font-bold leading-tight">
        Thank you <br /> for your order
      </h2>
      <p className="text-gray-500 text-sm">
        You will receive an email confirmation shortly.
      </p>

      <div className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-md">
        <div className="bg-[#F1F1F1] flex-1 p-4">
          <div className="flex items-center gap-4">
            <img
              src={mainItem.image}
              alt={mainItem.name}
              className="w-12 h-12 object-cover rounded"
            />
            <div className="text-sm">
              <h4 className="font-bold">{mainItem.name}</h4>
              <p className="text-gray-600">${mainItem.price.toFixed(2)}</p>
            </div>
            <span className="ml-auto font-bold text-sm">
              x{mainItem.quantity}
            </span>
          </div>
          {otherCount > 0 && (
            <p className="mt-4 text-center text-xs text-gray-500 border-t pt-2">
              and {otherCount} other item(s)
            </p>
          )}
        </div>

        <div className="bg-black text-white p-4 flex items-center justify-between md:flex-col md:justify-center md:items-start md:gap-2 md:w-1/3">
          <p className="uppercase text-xs text-gray-400">Grand Total</p>
          <p className="text-lg font-bold">${total.toLocaleString()}</p>
        </div>
      </div>

      <Link to="/" className="block">
        <Button variant="primary" className="w-full">
          Back to home
        </Button>
      </Link>
    </Modal>
  );
}
