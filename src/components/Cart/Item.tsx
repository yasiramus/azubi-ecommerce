import { Minus, Plus } from "lucide-react";

import Button from "../ui/Button";
import { useAppDispatch } from "../../hook";
import { addToCart, decreaseQuantity } from "../../features/cart/cartSlice";

export interface CartItemProps {
  id: number | string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function Item({
  id,
  name,
  image,
  price,
  quantity,
}: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="text-sm">
          <h4 className="font-bold text-black leading-none">{name}</h4>
          <p className="text-gray-500 leading-none mt-1">${price}</p>
        </div>
      </div>

      <div className="flex items-center gap-x-1 bg-[#F1F1F1] rounded-md">
        <Button
          variant="transparent"
          className="!px-4"
          onClick={() => dispatch(decreaseQuantity(id))}
        >
          <Minus className="w-4 h-4 text-black" />
        </Button>
        <span className="text-black font-medium text-sm">{quantity}</span>
        <Button
          variant="transparent"
          className="!px-4"
          onClick={() =>
            dispatch(
              addToCart({
                id,
                name,
                price,
                image,
                quantity: 1,
              })
            )
          }
        >
          <Plus className="w-4 h-4 text-black" />
        </Button>
      </div>
    </div>
  );
}
