import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneAsyncArticle } from "../../Feature/FileSlice";
import SimpleBackdrop from "./BackDrop";
const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { Article, error, loading } = useSelector((store) => store.Article);
  useEffect(() => {
    Article && id && dispatch(getOneAsyncArticle(id));
  }, []);
  if (loading) return <SimpleBackdrop />;
  if (error) return <p>something went wrong!</p>;
  return (
    <main className="flex justify-center mt-8">
      <section className="bg-white bg-opacity-40 w-11/12 rounded-2xl flex flex-col justify-center items-center p-5">
        <h1 className="text-5xl mb-4">{Article.title}</h1>
        <p className="text-xl mb-12">{Article.author}</p>
        {Article.body ? (
          <p className="border border-gray-300 w-9/12 flex justify-start p-4">
            {Article.body}
          </p>
        ) : (
          <p>any content found ! </p>
        )}
      </section>
    </main>
  );
};

export default Article;
