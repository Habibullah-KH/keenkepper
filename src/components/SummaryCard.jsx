const SummaryCard = ({ title, value, icon }) => {
  return (
    <div className="p-4 rounded-xl shadow bg-white flex items-center gap-4">
      {/* Icon */}
      <div className="text-2xl">{icon}</div>

      {/* Content */}
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default SummaryCard;