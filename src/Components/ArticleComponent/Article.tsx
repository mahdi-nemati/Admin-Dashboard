import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneAsyncArticle } from "../../Feature/FileSlice";
import SimpleBackdrop from "./BackDrop";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { Article, error, loading } = useSelector((store : any) => store.Article);
  useEffect(() => {
    Article && id && dispatch(getOneAsyncArticle({id}));
  }, []);
  if (loading) return <SimpleBackdrop />;
  if (error) return <p>something went wrong!</p>;
  return (
    <main className="flex justify-center mt-8">
      <section className="bg-white bg-opacity-40 w-11/12 rounded-2xl flex flex-col justify-center items-center p-5">
        <h1 className="text-5xl mb-4">{Article.title}</h1>
        <p className="text-xl mb-4">{Article.author}</p>
        {Article.upload ? (
          <Button
            variant="text"
            startIcon={<DownloadIcon />}
            download
            href={Article.upload}
          >
            download uploaded file
          </Button>
        ) : (
          ""
        )}
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
