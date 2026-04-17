import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { PieChart, Pie } from "recharts";

const Stats = () => {
  const { timeline } = useContext(AppContext);

  const data = [
    { name: "Call", value: timeline.filter(t => t.type === "Call").length },
    { name: "Text", value: timeline.filter(t => t.type === "Text").length },
    { name: "Video", value: timeline.filter(t => t.type === "Video").length },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" outerRadius={100} />
    </PieChart>
  );
};

export default Stats;