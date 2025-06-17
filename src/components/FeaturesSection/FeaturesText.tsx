export default function FeaturesText({ text }: { text: string }) {
  const paragraphs = text.split("\n\n");

  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold uppercase mb-6 tracking-wide text-black">
        Features
      </h2>
      {paragraphs.map((para, i) => (
        <p key={i} className="text-black/50 mb-6 leading-relaxed text-[15px]">
          {para}
        </p>
      ))}
    </div>
  );
}
