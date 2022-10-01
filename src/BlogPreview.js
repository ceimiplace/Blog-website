import { Link } from "react-router-dom";
export default function BlogPreview({ id, name, picture, title, body }) {
  return (
    <Link
      to={`/blogs/${id}`}
      key={id}
      className="p-4 flex border-2 border-grey-200 items-center hover:shadow-lg my-6"
    >
      <div>
        <img className="h-20" src={picture} />
        <p className="">
          Written by{" "}
          <span className="text-rose-500 font-bold text-lg">{name}</span>
        </p>
      </div>
      <p className="font-bold">"{title}..."</p>
    </Link>
  );
}
