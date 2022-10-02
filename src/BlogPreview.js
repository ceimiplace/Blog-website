import { Link } from "react-router-dom";
export default function BlogPreview({ id, name, picture, title, body, date }) {
  return (
    <Link
      to={`/blogs/${id}`}
      key={id}
      className="p-4 flex border-2 gap-4 border-grey-200  hover:shadow-lg my-6"
    >
      <div>
        <img className="h-20" src={picture} alt="author" />
        <p className="flex flex-col">
          Written by
          <span className="text-rose-500 font-bold text-lg">
            {name}
          </span> at {date}
        </p>
      </div>
      <div className=" grow  flex flex-col justify-around items-center">
        <p className="font-bold">"{title}..."</p>
        <p>
          {body.slice(0, 20)}...
          <span className="text-slate-400">(Read more)</span>
        </p>
      </div>
    </Link>
  );
}
