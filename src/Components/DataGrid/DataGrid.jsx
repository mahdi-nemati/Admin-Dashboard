import { useEffect } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsyncArticle, getAsyncArticle } from "../../Feature/FileSlice";
import Loading from "../ArticleComponent/Loading";
import { Link, useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import { t } from "i18next";
import { Box } from "@mui/system";
export default function Data() {
  const dispatch = useDispatch();
  const { Article, error, loading } = useSelector((store) => store.Article);
  const navigate = useNavigate();
  const editHandler = (e, id) => {
    e.stopPropagation();
    navigate(`/edit-article/${id}`);
  };
  const deleteHandler = (e, id) => {
    e.stopPropagation();
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
  const rows = Article;
  const columns = [
    {
      field: "title",
      width: 500,
      headerClassName: "super-app-theme--header",
      renderHeader: () => <p className="text-2xl">{t("Title")}</p>,
    },
    {
      field: "author",
      width: 500,
      headerClassName: "super-app-theme--header",
      renderHeader: () => <p className="text-2xl">{t("Author")}</p>,
    },
    {
      field: t("Edit"),
      width: 195,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: ({ id }) => (
        <span
          onClick={(e) => editHandler(e, id)}
          className="cursor-pointer w-full h-full flex justify-center items-center"
        >
          <EditIcon sx={{ fontSize: "30px" }} />
        </span>
      ),
    },
    {
      field: t("Delete"),
      width: 195,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: ({ id }) => (
        <span
          onClick={(e) => deleteHandler(e, id)}
          className="cursor-pointer w-full h-full flex justify-center items-center"
        >
          <DeleteOutlineIcon sx={{ fontSize: "30px" }} />
        </span>
      ),
    },
  ];
  if (loading) return <Loading />;
  if (error) return <p>something went wrong!</p>;
  return (
    <div style={{ height: 300, width: "100%" }}>
      <Box
        sx={{
          height: 300,
          width: 1,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={({ id }) => {
            navigate(`/article/${id}`);
          }}
          sx={{
            "& .super-app-theme--header": {
              backgroundColor: "#475569",
              color: "white",
              height: "55px",
            },
          }}
        />
      </Box>
    </div>
  );
}
