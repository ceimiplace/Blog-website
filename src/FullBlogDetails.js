import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "./firebase/config";
import Loader from "./Loader";
export default function FullBlogDetails() {
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    projectFirestore
      .collection("recipies")
      .doc(id)
      .get()
      .then((resp) => {
        if (resp.exists) {
          console.log(resp);
          setLoading(false);
          setBlog({ id: resp.id, ...resp.data() });
        } else {
          setLoading(false);
          setError("Cound not fetch the recipe");
        }
      });
  }, []);

  // console.log(blog);
  return (
    <>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {blog && (
        <div
          key={blog.id}
          className="p-2 flex gap-4 border-2 border-grey-200  hover:shadow-lg my-6"
        >
          <div className="shrink-0 w-20 ">
            <img className="" src={blog.picture} />
            <p className="">
              Written by{" "}
              <span className="text-rose-500 font-bold text-lg">
                {blog.name}
              </span>
            </p>
          </div>
          <div className="text-center flex flex-col justify-around">
            <p className="font-bold">"{blog.title}..."</p>
            <p>{blog.body}</p>
          </div>
        </div>
      )}
    </>
  );
}
