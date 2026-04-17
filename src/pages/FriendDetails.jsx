import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import friends from "../data/friends.json";
import NotFound from "./NotFound";

const FriendDetails = () => {
  const { id } = useParams();
  const { addEntry } = useContext(AppContext);
  const friend = friends.find((f) => String(f.id) === id);

  if (!friend) return <NotFound />;

  const handleAction = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} added!`);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* LEFT */}
      <div>
        <img src={friend.picture} />
        <h2>{friend.name}</h2>
        <p>{friend.email}</p>
        <p>{friend.bio}</p>
      </div>

      {/* RIGHT */}
      <div>
        <button onClick={() => handleAction("Call")}>Call</button>
        <button onClick={() => handleAction("Text")}>Text</button>
        <button onClick={() => handleAction("Video")}>Video</button>
      </div>
    </div>
  );
};

export default FriendDetails;
