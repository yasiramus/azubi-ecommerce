import clsx from "clsx";

interface Field {
  label: string;
  value: string;
  name: string;
  type?: string;
  colSpan?: number;
}

interface FormProps {
  title?: string;
  fields: Field[];
  onChange: (name: string, value: string) => void;
  errors: { [key: string]: string };
}

export function Title({ title }: { title: string }) {
  return (
    <h3 className="text-[#D87D4A] uppercase text-sm font-semibold mb-4">
      {title}
    </h3>
  );
}
export default function Form({ title, fields, onChange, errors }: FormProps) {
  return (
    <div className="mb-10">
      {title && <Title title={title} />}
      <div className="grid md:grid-cols-2 gap-6 text-black">
        {fields.map((field) => {
          const error = errors[field.name];

          return (
            <div
              key={field.name}
              className={`flex flex-col ${
                field.colSpan === 2 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex flex-row col-span-2 justify-between">
                <label
                  className={clsx(
                    "text-xs font-medium mb-2",
                    error && "text-[#CD2C2C]"
                  )}
                >
                  {field.label}
                </label>
                {error && <span className="text-red-500 text-xs">{error}</span>}
              </div>
              <input
                className={clsx(
                  "border border-gray-300 rounded-md p-3 outline-0",
                  error
                    ? "!border-[#CD2C2C] border-2"
                    : "hover:!border-[#D87D4A]"
                )}
                type={field.type || "text"}
                name={field.name}
                value={field.value || ""}
                onChange={(e) => onChange(field.name, e.target.value)}
                placeholder={`enter ${field.name}`}
                autoComplete={field.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
