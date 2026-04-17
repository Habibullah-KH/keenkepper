import { FaPhone, FaSms, FaVideo } from "react-icons/fa";

const TimelineItem = ({ item }) => {
  const iconMap = {
    Call: <FaPhone className="text-green-500" />,
    Text: <FaSms className="text-blue-500" />,
    Video: <FaVideo className="text-purple-500" />,
  };

  return (
    <div className="flex items-center gap-4 border p-4 rounded-lg shadow-sm">
      {/* Icon */}
      <div className="text-xl">
        {iconMap[item.type]}
      </div>

      {/* Content */}
      <div>
        <p className="font-semibold">{item.title}</p>
        <p className="text-sm text-gray-500">{item.date}</p>
      </div>
    </div>
  );
};

export default TimelineItem;