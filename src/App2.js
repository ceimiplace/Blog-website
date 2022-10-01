import Navigation from "./Navigation";
import Home from "./Home";
import MainContainer from "./MainContentContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import FullBlogDetails from "./FullBlogDetails.js";
import Page404 from "./Page404";
export default function App2() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col max-w-4xl  mx-auto">
        <Navigation />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blogs/:id" element={<FullBlogDetails />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </MainContainer>
      </div>
    </BrowserRouter>
  );
}
