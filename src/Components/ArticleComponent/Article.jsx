import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneAsyncArticle } from "../../Feature/FileSlice";
import SimpleBackdrop from "./BackDrop";
const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { Article, error, loading } = useSelector((store) => store.Article);
  useEffect(() => {
    dispatch(getOneAsyncArticle(id));
    console.log(Article);
  }, []);
  if (loading) return <SimpleBackdrop />;
  if (error) return <p>something went wrong!</p>;
  return (
    <section>
      <h1>{Article.title}</h1>
      <p>{Article.author}</p>
      <p>{Article.body}</p>
    </section>
  );
};

export default Article;
