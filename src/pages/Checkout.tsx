import Form, { Title } from "../components/Checkout/Form";
import GoBack from "../components/GoBack";
import Summary from "../components/Checkout/Summary";
import RadioOption from "../components/Checkout/RadioOption";
import { useState } from "react";

export default function Checkout() {
  const [selected, setSelected] = useState("e-Money");

  return (
    <section className="bg-[#F2F2F2] py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <GoBack />
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Form Side */}
          <div className="text-black bg-white p-6 md:p-10 rounded-lg flex-1">
            <h2 className="text-2xl font-bold tracking-wide mb-8">CHECKOUT</h2>

            <Form
              title="Billing Details"
              fields={[
                { label: "Name", name: "name" },
                { label: "Email Address", name: "email", type: "email" },
                { label: "Phone Number", name: "phone" },
              ]}
            />

            <Form
              title="Shipping Info"
              fields={[
                { label: "Address", name: "address", colSpan: 2 },
                { label: "ZIP Code", name: "zip" },
                { label: "City", name: "city" },
                { label: "Country", name: "country" },
              ]}
            />

            {/* Payment Method radio*/}
            <Title title="Payment Details" />
            <div className="mb-4 flex w-full justify-between">
              <p className="text-xs font-semibold tracking-wide text-left w-1/2">
                Payment Method
              </p>
              <div className="flex flex-col gap-4 w-1/2 pl-2.5">
                {["e-Money", "Cash on Delivery"].map((option) => (
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
                  { label: "e-Money Number", name: "emoneyNumber" },
                  { label: "e-Money PIN", name: "emoneyPin" },
                ]}
              />
            )}
          </div>

          {/* Summary Side */}
          <Summary />
        </div>
      </div>
    </section>
  );
}
