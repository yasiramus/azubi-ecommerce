interface Field {
  label: string;
  name: string;
  type?: string;
  colSpan?: number; // default is 1
}

interface FormProps {
  title?: string;
  fields: Field[];
}

export function Title({ title }: { title: string }) {
  return (
    <h3 className="text-[#D87D4A] uppercase text-sm font-semibold mb-4">
      {title}
    </h3>
  );
}
export default function Form({ title, fields }: FormProps) {
  return (
    <div className="mb-10">
      {title && <Title title={title} />}
      <div className="grid md:grid-cols-2 gap-6 text-black">
        {fields.map((field) => (
          <div
            key={field.name}
            className={`flex flex-col ${
              field.colSpan === 2 ? "md:col-span-2" : ""
            }`}
          >
            <label className="text-xs font-bold mb-2">{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              className="border border-gray-300 rounded-md p-3 outline-0"
              placeholder={`enter ${field.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
