import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteAsyncArticle, getAsyncArticle } from "../../Feature/FileSlice";
import { Button } from "@mui/material";
import Loading from "./Loading";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
export default function ArticleList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Article, error, loading } = useSelector((store) => store.Article);
  const clickHandle = (e) => {
    e.preventDefault();
    navigate("/add-article");
  };
  useEffect(() => {
    dispatch(getAsyncArticle());
  }, []);
  const deleteHandler = async (id) => {
    await dispatch(deleteAsyncArticle(id));
    dispatch(getAsyncArticle());
  };
  if (loading) return <Loading />;
  if (error) return <p>something went wrong!</p>;
  return (
    <main className="w-full flex flex-col justify-center items-center mt-5">
      <h1 className="mb-4 text-4xl">Article List</h1>
      <Button variant="contained" onClick={clickHandle}>
        Add New Article
      </Button>
      <section className="mt-4 mb-2 bg-white bg-opacity-40 w-11/12 rounded-2xl">
        <div className="flex bg-slate-800 text-white h-10 text-2xl rounded-t-2xl">
          <div className="flex justify-between w-2/5 pl-4">
            <div>Title</div>
            <div>Author</div>
          </div>
        </div>
        {Article ? (
          Article.map((a) => {
            return (
              <div className="flex items-center w-full justify-between">
                <Link
                  to={`/article/${a.id}`}
                  key={a.id}
                  className="flex justify-between w-5/12 pl-5 pt-2 pb-2 mb-2 mt-1 hover:bg-gray-200 cursor-pointer"
                >
                  <p>{a.title}</p>
                  <p>{a.author}</p>
                </Link>
                <span
                  className="hover:bg-gray-200 cursor-pointer p-2 rounded-full"
                  onClick={() => deleteHandler(a.id)}
                >
                  <DeleteOutlineIcon sx={{ fontSize: "30px" }} />
                </span>
              </div>
            );
          })
        ) : (
          <p>Empty!</p>
        )}
      </section>
    </main>
  );
}
