const InfoCard = ({ title, description, items }) => {
  return (
    <div className="w-full max-w-[433px] h-[331px] rounded-2xl bg-gradient-to-br from-blue-800/60 to-blue-900/80 border border-blue-500/40 p-8 flex flex-col justify-between">
      <div>
        <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-blue-400 mt-1 text-lg">•</span>
            <span className="text-gray-200 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InfoCard;
