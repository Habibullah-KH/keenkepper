import { useContext } from "react";
import TimelineItem from "../components/TimelineItem";
import { AppContext } from "../context/AppContext";

const Timeline = () => {
  const { timeline } = useContext(AppContext);

  return (
    <div>
      <h1 className="text-2xl mb-4">Timeline</h1>

      <div className="space-y-3">
        {timeline.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;