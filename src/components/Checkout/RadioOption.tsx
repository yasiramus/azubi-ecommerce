export default function RadioOption({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <label
      className={`text-black border rounded-lg px-4 py-3 flex items-center gap-4 cursor-pointer transition-colors ${
        selected ? "border-[#D87D4A]" : "border-gray-300"
      }`}
    >
      <input
        type="radio"
        name="payment"
        checked={selected}
        onChange={onSelect}
        className="accent-[#D87D4A]"
      />
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
}
