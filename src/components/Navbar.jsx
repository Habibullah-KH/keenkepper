import { NavLink } from "react-router-dom";
import { FaHome, FaChartPie, FaClock } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 shadow">
      <h1 className="font-bold text-xl">KeenKeeper</h1>

      <div className="flex gap-6">
        <NavLink to="/" className={({ isActive }) => isActive && "text-blue-500"}>
          <FaHome className="inline mr-1" /> Home
        </NavLink>

        <NavLink to="/timeline">
          <FaClock className="inline mr-1" /> Timeline
        </NavLink>

        <NavLink to="/stats">
          <FaChartPie className="inline mr-1" /> Stats
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;