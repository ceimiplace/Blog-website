import BlogPreview from "./BlogPreview";
export default function BlogRenderer({ blogsToDisplay }) {
  let blogsList;
  if (blogsToDisplay) {
    blogsList = blogsToDisplay.map((blog) => {
      return (
        <BlogPreview
          id={blog.id}
          key={blog.id}
          title={blog.title}
          name={blog.name}
          picture={blog.picture}
          body={blog.body}
          date={blog.date}
        />
      );
    });
  }

  return (
    blogsList && (
      <div>
        <div className="text-2xl font-medium text-rose-500">All blogs</div>
        <div>{blogsList}</div>
      </div>
    )
  );
}
