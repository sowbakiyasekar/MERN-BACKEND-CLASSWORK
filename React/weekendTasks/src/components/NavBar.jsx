import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-700 bg-slate-900/90 px-6 py-4 text-white shadow-lg shadow-slate-950/20">
      <div className="text-lg font-semibold">React Hooks Tasks</div>
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <Link to="/" className="rounded-full px-4 py-2 transition hover:bg-slate-700/80">Home</Link>
        <Link to="/saved" className="rounded-full px-4 py-2 transition hover:bg-slate-700/80">Saved</Link>
        <Link to="/multi-step-form" className="rounded-full px-4 py-2 transition hover:bg-slate-700/80">Multi Step</Link>
      </div>
    </nav>
  );
};

export default NavBar;