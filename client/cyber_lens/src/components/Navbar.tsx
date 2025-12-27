import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseLink =
    "relative px-4 py-2 text-base font-medium tracking-wide transition-colors";
  const inactive = "text-slate-400 hover:text-slate-200";
  const active =
    "text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-cyan-400";

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-lock text-white text-xl font-bold"></i>
            <span className="text-xl font-bold text-slate-100">
              <span>Cyber</span>&nbsp;
              <span className="text-cyan-500">Lens</span>
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : inactive}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/history"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : inactive}`
              }
            >
              History
            </NavLink>

            <NavLink
              to="/news"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : inactive}`
              }
            >
              News
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
