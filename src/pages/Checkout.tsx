import { useState } from "react";

import type { RootState } from "../store";
import GoBack from "../components/ui/GoBack";
import Summary from "../components/Checkout/Summary";
import { placeOrder } from "../features/checkoutSlice";
import { useAppDispatch, useAppSelector } from "../hook";
import Form, { Title } from "../components/Checkout/Form";
import RadioOption from "../components/Checkout/RadioOption";
import {
  validateAllFields,
  validateField,
  type FormErrors,
} from "../utils/validation";

export default function Checkout() {
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [selected, setSelected] = useState<"e-Money" | "Cash on Delivery">(
    "e-Money"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    emoneyNumber: "",
    emoneyPin: "",
  });

  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prevErr) => ({
      ...prevErr,
      [name]: validateField(name, value),
    }));
  };

  const handlePlaceOrder = () => {
    const errors = validateAllFields(formData, selected);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    if (!cartItems.length) return alert("Cart is empty");

    /**variables */
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const shipping = 50;
    const vat = Math.round(total * 0.2); // Assuming 20% VAT
    const grandTotal = total + shipping + vat;

    dispatch(
      placeOrder({
        // id: "111",
        items: cartItems,
        total: grandTotal,
        form: { ...formData, paymentMethod: selected },
        // date: new Date().toISOString(),
      })
    );
  };

  return (
    <section className="bg-light-gray py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <GoBack />
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Form Side */}
          <div className="text-black bg-white p-6 md:p-10 rounded-lg flex-1">
            <h2 className="text-2xl font-bold tracking-wide mb-8">CHECKOUT</h2>

            <Form
              title="Billing Details"
              fields={[
                { label: "Name", name: "name", value: formData.name },
                {
                  label: "Email Address",
                  name: "email",
                  type: "email",
                  value: formData.email,
                },
                { label: "Phone Number", name: "phone", value: formData.phone },
              ]}
              onChange={handleChange}
              errors={formErrors}
            />

            <Form
              title="Shipping Info"
              fields={[
                {
                  label: "Address",
                  name: "address",
                  colSpan: 2,
                  value: formData.address,
                },
                { label: "ZIP Code", name: "zip", value: formData.zip },
                { label: "City", name: "city", value: formData.city },
                { label: "Country", name: "country", value: formData.country },
              ]}
              onChange={handleChange}
              errors={formErrors}
            />

            {/* Payment Method radio*/}
            <Title title="Payment Details" />
            <div className="mb-4 flex w-full justify-between">
              <p className="text-xs font-semibold tracking-wide text-left w-1/2">
                Payment Method
              </p>
              <div className="flex flex-col gap-4 w-1/2 pl-2.5">
                {(["e-Money", "Cash on Delivery"] as const).map((option) => (
                  <RadioOption
                    key={option}
                    label={option}
                    selected={selected === option}
                    onSelect={() => setSelected(option)}
                  />
                ))}
              </div>
            </div>
            {selected === "e-Money" && (
              <Form
                fields={[
                  {
                    label: "e-Money Number",
                    name: "emoneyNumber",
                    value: formData.emoneyNumber,
                  },
                  {
                    label: "e-Money PIN",
                    name: "emoneyPin",
                    value: formData.emoneyPin,
                  },
                ]}
                onChange={handleChange}
                errors={formErrors}
              />
            )}

            {selected === "Cash on Delivery" && (
              <div className="flex gap-x-6 items-center">
                <img
                  src="/assets/checkout/icon-cash-on-delivery.svg"
                  alt="cash on delivery"
                  className="object-contain w-12 h-11"
                />
                <p className="text-xs lg:text-body font-medium text-black/50 text-left leading-6 text-pretty">
                  The 'Cash on Delivery' option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>

          {/* Summary Side */}
          <Summary
            handleSubmit={handlePlaceOrder}
            formValues={formData}
            selected={selected}
          />
        </div>
      </div>
    </section>
  );
}
