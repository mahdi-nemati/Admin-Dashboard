import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAsyncArticle } from "../../Feature/FileSlice";
import { Button } from "@mui/material";
import Loading from "./Loading";
import { t } from "i18next";
import Data from "../DataGrid/DataGrid";
export default function ArticleList() {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading } = useSelector((store:any) => store.Article);
  const { isRtl } = useSelector((store:any) => store.ltr);
  // const arrArt = Article && Array.from(Article);
  const clickHandle = (e?: ChangeEvent<HTMLInputElement> | any) => {
    e.preventDefault();
    navigate("/add-article");
  };
  useEffect(() => {
    dispatch(getAsyncArticle());
  }, []);
  const variantChangeHandle = () => {
    setHover(!hover);
  };
  if (loading) return <Loading />;
  if (error) return <p>something went wrong!</p>;
  return (
    <main
      className="w-full flex flex-col justify-center items-center mt-5"
      dir={isRtl === "yes" ? "rtl" : "ltr"}
    >
      <h1 className="mb-4 text-4xl">{t("Article List")}</h1>
      <Button
        variant={hover ? "outlined" : "contained"}
        onClick={clickHandle}
        onMouseEnter={variantChangeHandle}
        onMouseLeave={variantChangeHandle}
      >
        {t("Add New Article")}
      </Button>
      <section className="mt-4 mb-2 bg-white bg-opacity-40 w-11/12 rounded-2xl">
        <Data />
      </section>
    </main>
  );
}
