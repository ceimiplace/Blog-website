import { useState } from "react";
import { projectFirestore } from "./firebase/config";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [message, setMessage] = useState("Submit");
  const [title, setTitle] = useState("");
  const [body, setText] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-3/4  mx-auto p-4">
      <h2 className="text-3xl font-medium text-center">Add new log</h2>
      <form
        className="text-lg font-meidum "
        onSubmit={(e) => {
          e.preventDefault();
          let doc = {
            title,
            body,
            name,
            picture: `https://robohash.org/${name}.png`,
          };
          try {
            projectFirestore.collection("recipies").add(doc);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <div>
          {" "}
          <label>Blog Title:</label>
          <input
            className="block border-2 border-400-slate w-full"
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Blog Text:</label>
          <textarea
            onChange={(e) => setText(e.target.value)}
            className="block border-2 border-400-slate w-full h-40"
            required
          />
        </div>
        <div>
          <label>Blog Author:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="block border-2 border-400-slate w-full mb-2"
            type="text"
            required
          />
          <button
            onClick={() => {
              setMessage("...Redirecting");
              setTimeout(() => {
                navigate("/");
              }, 1000);
            }}
            className="bg-slate-200 rounded p-2"
          >
            {message}
          </button>
        </div>
      </form>
    </div>
  );
}
