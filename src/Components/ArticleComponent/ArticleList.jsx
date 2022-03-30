import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncArticle } from "../../Feature/FileSlice";
import Loading from "./Loading";
export default function ArticleList() {
  const dispatch = useDispatch();
  const { Article, error, loading } = useSelector((store) => store.Article);
  useEffect(() => {
    dispatch(getAsyncArticle());
  }, []);
  if (loading) return <Loading />;
  if (error) return <p>something went wrong!</p>;
  return (
    <main className="w-full flex flex-col justify-center items-center mt-5">
      <h1 className="mb-4 text-4xl">Article List</h1>
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
              <div className="flex justify-between w-5/12 pl-5 pt-2 pb-2 mb-2 mt-1 hover:bg-gray-300 cursor-pointer">
                <p>{a.title}</p>
                <p>{a.author}</p>
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
