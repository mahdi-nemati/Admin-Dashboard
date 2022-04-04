import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SimpleBackdrop from "./BackDrop";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOneAsyncArticle, putAsyncArticle } from "../../Feature/FileSlice";
import { t } from "i18next";
//Formik & Yup imports
import { useFormik } from "formik";
import * as yup from "yup";
import TextFieldCustom from "../../common/TextFieldCustom";
import { toast } from "react-toastify";
export default function EditArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Article, error, loading } = useSelector((store) => store.Article);
  useEffect(() => {
    dispatch(getOneAsyncArticle(id));
  }, []);
  // set initail
  const initialValues = {
    title: Article.title,
    author: Article.author,
    body: Article.body,
  };
  // set validate
  const validationSchema = yup.object({
    title: yup.string().required("enter article's tilte").min(2),
    author: yup.string().required("enter article's author").min(2),
  });
  // submit
  const onSubmit = ({ title, author, body }) => {
    dispatch(putAsyncArticle({ id, title, author, body }));
    navigate("/home");
    toast.success(t("Successfully update !"))
  };
  // formik
  const formik = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit,
  });

  if (loading) return <SimpleBackdrop />;
  if (error) return <p>something went wrong!</p>;

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ mt: 1, width: 600 }}
      >
        <TextFieldCustom formik={formik} name="title" label="Title" />
        <TextFieldCustom formik={formik} name="author" label="Author" />
        <TextFieldCustom formik={formik} name="body" label="Content" />
        <Button
          type="submit"
          onClick={formik.handleSubmit}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!formik.isValid}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}
