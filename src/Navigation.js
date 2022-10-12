import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="flex p-4 text-center gap-4 flex-col border-b-slate-400 border-b-2 sm:flex-row sm:justify-between">
      <h1 className="text-3xl font-medium text-rose-500">RoboPosts</h1>
      <div className=" flex flex-col  gap-6 font-medium sm:flex-row">
        <Link className="border-b-slate-400 border-b-2 sm:border-none" to="/">
          Home
        </Link>
        <Link
          className="border-b-slate-400 border-b-2  sm:border-none "
          to="/create"
        >
          Create Blog
        </Link>
      </div>
    </nav>
  );
}
