import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="grow ">
      <h2 className="my-4 font-medium">
        Sorry,the page that you tried to acces doesn't exist.
      </h2>
      <Link to="/" className="text-xl text-rose-400">
        Try going back Home
      </Link>
    </div>
  );
}
