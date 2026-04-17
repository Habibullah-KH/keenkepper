import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const statusStyle = {
    overdue: "bg-red-100 border-red-400",
    "almost due": "bg-yellow-100 border-yellow-400",
    "on-track": "bg-green-100 border-green-400",
  };

  return (
    <Link to={`/friend/${friend.id}`}>
      <div
        className={`p-4 rounded-xl border-2 shadow hover:shadow-lg transition ${statusStyle[friend.status]}`}
      >
        {/* Image */}
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />

        {/* Name */}
        <h2 className="text-lg font-semibold">{friend.name}</h2>

        {/* Days */}
        <p className="text-sm text-gray-600">
          📅 {friend.days_since_contact} days ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <p className="mt-2 text-sm font-medium capitalize">
          🔴 {friend.status}
        </p>
      </div>
    </Link>
  );
};

export default FriendCard;