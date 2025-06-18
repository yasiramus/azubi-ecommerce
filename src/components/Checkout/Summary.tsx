import Item from "../Cart/Item";
import Button from "../ui/Button";
import { useAppSelector } from "../../hook";
import clsx from "clsx";
import { useState } from "react";
import OrderConfirmationModal from "./OrderConfirmationModal";

export default function Summary() {
  const items = useAppSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 50;
  const vat = Math.round(total * 0.2); // Assuming 20% VAT
  const grandTotal = total + shipping + vat;

  const [openOrderModal, setShowOrderModal] = useState(false);

  return (
    <aside className="h-fit bg-white rounded-lg p-6 sm:p-8 space-y-6 shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold uppercase tracking-wide text-black">
        Summary
      </h2>

      <div className="space-y-4 max-h-64 overflow-y-auto pr-1 scroll-smooth">
        {items.map((item) => (
          <Item key={item.id} {...item} checkout={true}/>
        ))}
      </div>

      <div className="space-y-2 text-black text-sm">
        <SummaryRow label="Total" value={total} />
        <SummaryRow label="Shipping" value={shipping} />
        <SummaryRow label="VAT (included)" value={vat} />
        <SummaryRow label="Grand Total" value={grandTotal} isAccent />
      </div>

      <Button variant="primary" className="w-full" onClick={() => setShowOrderModal(true)}>
        Continue & Pay
      </Button>
      {openOrderModal&& <OrderConfirmationModal onClose={()=> setShowOrderModal(false)}/>}
    </aside>
  );
}

function SummaryRow({
  label,
  value,
  isAccent = false,
}: {
  label: string;
  value: number;
  isAccent?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="uppercase text-gray-500">{label}</span>
      <span
        className={clsx(
          "text-base font-bold",
          isAccent ? "text-[#D87D4A]" : ""
        )}
      >
        ${value.toLocaleString()}
      </span>
    </div>
  );
}
