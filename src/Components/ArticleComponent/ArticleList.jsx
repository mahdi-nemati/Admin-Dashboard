import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncArticle } from "../../Feature/FileSlice";
export default function ArticleList() {
  const dispatch = useDispatch();
  const { Article, error, loading } = useSelector((store) => store.Article);
  useEffect(() => {
    dispatch(getAsyncArticle());
  }, []);
  if (loading) return <p>loading...</p>;
  if (error) return <p>something went wrong!</p>;
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1>Article List</h1>
      <section className="mt-4 mb-2 bg-white bg-opacity-40 w-11/12 rounded-2xl">
        <div className="flex">
          <div>Title</div>
          <div>Author</div>
        </div>
        {Article ? (
          Article.map((a) => {
            return (
              <div className="flex">
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
