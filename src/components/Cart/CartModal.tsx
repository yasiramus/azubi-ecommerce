import { useState } from "react";

import { Link } from "react-router";

import Item from "./Item";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useAppSelector, useAppDispatch } from "../../hook";
import { clearCart } from "../../features/cart/cartSlice";

export default function CartModal({ onClose }: { onClose: () => void }) {
  const dispatch = useAppDispatch();

  const [showConfirm, setShowConfirm] = useState(false);

  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const confirmClearCart = () => {
    dispatch(clearCart());
    setShowConfirm(false);
    onClose();
  };

  return (
    <>
      <Modal
        onClose={() => {
          // dispatch(clearCart());
          onClose();
        }}
        type
        className="w-full max-w-md space-y-6 pt-7"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold uppercase tracking-wide text-black">
            Cart ({items.length})
          </h3>
          <Button variant="outline" onClick={() => setShowConfirm(true)}>
            Remove all
          </Button>
        </div>

        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
          {items.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>

        <div className="flex items-center justify-between text-black">
          <p className="uppercase text-sm text-gray-500">Total</p>
          <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
        </div>

        <Link to="/checkout">
          <Button variant="primary" className="w-full">
            Checkout
          </Button>
        </Link>
      </Modal>

      {showConfirm && (
        <Modal
          onClose={() => setShowConfirm(false)}
          className="max-w-sm w-full space-y-4"
        >
          <h4 className="text-center text-lg font-semibold text-gray-800">
            Confirm
          </h4>
          <p className="text-sm text-gray-600">
            Are you sure you want to remove all items from your cart?
          </p>
          <div className="flex justify-evenly gap-4">
            <Button
              variant="secondary"
              className="!w-full"
              onClick={() => setShowConfirm(false)}
            >
              No
            </Button>
            <Button
              variant="danger"
              className="!w-full"
              onClick={confirmClearCart}
            >
              Yes
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
