import { useState } from "react";

import { useDispatch } from "react-redux";
import { Minus, Plus } from "lucide-react";

import Modal from "./CartModal";
import Button from "../ui/Button";
import type { Product } from "../../types/Product";
import { addToCart } from "../../features/cart/cartSlice";

interface ProductHeroProps {
  product: Product;
}

export default function AddToCart({ product }: ProductHeroProps) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleQuantity = (type: "inc" | "dec") => {
    setQuantity((prev) =>
      type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  const handleAddToCard = () => {
    dispatch(
      addToCart({
        id: product.id as unknown as number,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image.desktop,
      })
    );
  };

  return (
    <section className="w-full py-8 px-4 md:px-10 lg:px-32 flex flex-col lg:flex-row items-center gap-12">
      {/* Product Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={product.image.desktop}
          alt={product.name}
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
        {product.new && (
          <span className="text-sm text-[#D87D4A] tracking-widest uppercase">
            New Product
          </span>
        )}

        <h2 className="text-3xl md:text-4xl font-bold uppercase text-black leading-tight">
          {product.name}
        </h2>

        <p className="text-base text-black opacity-75">{product.description}</p>

        <span className="text-lg font-bold text-black">
          ${product.price.toLocaleString()}
        </span>

        {/* Quantity Selector & Add to Cart */}
        <div className="flex gap-x-4 justify-center lg:justify-start">
          <div className="bg-[#F1F1F1] flex items-center gap-4 py-2 text-black">
            <Button variant="transparent" onClick={() => handleQuantity("dec")}>
              <Minus className="w-4 h-4 text-black/25 hover:text-[#D87D4A]" />
            </Button>
            <span className="font-medium">{quantity}</span>
            <Button variant="transparent" onClick={() => handleQuantity("inc")}>
              <Plus className="w-4 h-4 text-black/25 hover:text-[#D87D4A]" />
            </Button>
          </div>

          <Button
            onClick={() => {
              handleAddToCard();
              setOpenModal(true);
            }}
          >
            Add to Cart
          </Button>

          {openModal && <Modal onClose={() => setOpenModal(false)} />}
        </div>
      </div>
    </section>
  );
}
