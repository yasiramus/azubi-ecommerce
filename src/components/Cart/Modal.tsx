import { useEffect, useState } from "react";

import Item from "./Item";
import Button from "../ui/Button";
import { useAppSelector, useAppDispatch } from "../../hook";
import { clearCart } from "../../features/cart/cartSlice";
import { X } from "lucide-react";

export default function CartModal({ onClose }: { onClose: () => void }) {
  const dispatch = useAppDispatch();

  const [showConfirm, setShowConfirm] = useState(false);

  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleClearCart = () => {
    setShowConfirm(true);
  };

  const confirmClearCart = () => {
    dispatch(clearCart());
    setShowConfirm(false);
    onClose();
  };

  const cancelClearCart = () => {
    setShowConfirm(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start md:items-start md:justify-end pt-28 px-4 sm:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6 relative">
        <div className="text-black flex items-center justify-between">
          <h3 className="text-lg font-bold uppercase tracking-wide">
            Cart ({items.length})
          </h3>
          <button
            className="cursor-pointer text-sm text-gray-500 underline hover:text-[#fbaf85]"
            onClick={handleClearCart}
          >
            Remove all
          </button>
        </div>

        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
          {items.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>

        <div className="text-black flex items-center justify-between">
          <p className="uppercase text-sm text-gray-500 tracking-wide">Total</p>
          <p className="text-lg font-bold">${totalPrice.toString()}</p>
        </div>

        <Button variant="primary" className="w-full">
          Checkout
        </Button>

        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-black cursor-pointer"
          onClick={onClose}
          aria-label="Close cart"
        >
          <X className="w-3 h-3 text-black" />
        </button>

        {showConfirm && (
          <div className="fixed inset-0 z-60 bg-black/60 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 max-w-sm w-full">
              <h4 className="text-center text-lg font-semibold text-gray-800">
                Confirm
              </h4>
              <p className="text-sm text-gray-600">
                Are you sure you want to remove all items from your cart?
              </p>
              <div className="flex justify-evenly gap-4">
                <Button variant="secondary" onClick={cancelClearCart}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={confirmClearCart}>
                  Remove
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
