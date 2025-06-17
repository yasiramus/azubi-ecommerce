export type IncludeItem = {
  quantity: number;
  item: string;
};

type IncludesBoxProps = {
  includes: IncludeItem[];
};

export default function IncludesBox({ includes }: IncludesBoxProps) {
  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold uppercase mb-6 tracking-wide text-black">
        In the box
      </h2>
      <ul className="space-y-2">
        {includes.map((item, i) => (
          <li key={i} className="text-[15px] text-black/50">
            <span className="text-[#D87D4A] font-bold mr-4">
              {item.quantity}x
            </span>
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
}
