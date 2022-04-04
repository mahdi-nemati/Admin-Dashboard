import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteAsyncArticle, getAsyncArticle } from "../../Feature/FileSlice";
import { Button } from "@mui/material";
import Loading from "./Loading";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { t } from "i18next";
import Swal from "sweetalert2";
export default function ArticleList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Article, error, loading } = useSelector((store) => store.Article);
  const { isRtl } = useSelector((store) => store.ltr);
  console.log(Article);
  const arrArt = Article && Array.from(Article);
  console.log(arrArt);
  const clickHandle = (e) => {
    e.preventDefault();
    navigate("/add-article");
  };
  useEffect(() => {
    dispatch(getAsyncArticle());
  }, []);
  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAsyncArticle(id));
        dispatch(getAsyncArticle());
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  if (loading) return <Loading />;
  if (error) return <p>something went wrong!</p>;
  return (
    <main
      className="w-full flex flex-col justify-center items-center mt-5"
      dir={isRtl === "yes" ? "rtl" : "ltr"}
    >
      <h1 className="mb-4 text-4xl">{t("Article List")}</h1>
      <Button variant="contained" onClick={clickHandle}>
        {t("Add New Article")}
      </Button>
      <section className="mt-4 mb-2 bg-white bg-opacity-40 w-11/12 rounded-2xl">
        <div className="flex bg-slate-800 text-white h-10 text-2xl rounded-t-2xl">
          <div className="flex justify-between w-2/5 pl-4 pr-3">
            <div>{t("Title")}</div>
            <div>{t("Author")}</div>
          </div>
        </div>
        {Article ? (
          arrArt.map((a) => {
            return (
              <div
                className="flex items-center w-full justify-between"
                key={a.id}
              >
                <Link
                  to={`/article/${a.id}`}
                  className="flex justify-between w-5/12 pl-5 pt-2 pb-2 mb-3 mt-1 rounded-md pr-2 hover:bg-gray-200 cursor-pointer"
                >
                  <p>{a.title}</p>
                  <p>{a.author}</p>
                </Link>
                <section className="flex-row-reverse w-3/5 flex justify-around">
                  <span
                    className="hover:bg-gray-200 cursor-pointer p-2 rounded-full"
                    onClick={() => deleteHandler(a.id)}
                  >
                    <DeleteOutlineIcon sx={{ fontSize: "30px" }} />
                  </span>
                  <span className="hover:bg-gray-200 cursor-pointer p-2 rounded-full">
                    <Link to={`/edit-article/${a.id}`}>
                      <EditIcon sx={{ fontSize: "30px" }} />
                    </Link>
                  </span>
                </section>
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
