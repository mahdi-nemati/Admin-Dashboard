import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteAsyncArticle, getAsyncArticle } from "../../Feature/FileSlice";
import { Button, Tooltip } from "@mui/material";
import Loading from "./Loading";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { t } from "i18next";
import Swal from "sweetalert2";
import Fade from "@mui/material/Fade";
import Data from "../DataGrid/DataGrid";
export default function ArticleList() {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Article, error, loading } = useSelector((store) => store.Article);
  const { isRtl } = useSelector((store) => store.ltr);
  const arrArt = Article && Array.from(Article);
  const clickHandle = (e) => {
    e.preventDefault();
    navigate("/add-article");
  };
  useEffect(() => {
    dispatch(getAsyncArticle());
  }, []);
  const deleteHandler = (id) => {
    Swal.fire({
      title: t("Are you sure?"),
      text: t("You won't be able to revert this!"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("Yes, delete it!"),
      cancelButtonText: t("cancel"),
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAsyncArticle(id));
        dispatch(getAsyncArticle());
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
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
