import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SimpleBackdrop from "./BackDrop";
import { toast } from "react-toastify";
//Formik & Yup imports
import { useFormik } from "formik";
import * as yup from "yup";
import TextFieldCustom from "../../common/TextFieldCustom";
import { postAsyncArticle } from "../../Feature/FileSlice";
import { t } from "i18next";
import UploadButtons from "../../common/UploadButton";
import React, { ChangeEvent, useState } from "react";
export default function AddArticle() {
  const [link, setLink] = useState<any>();
  const [file, setFile] = useState<any>();
  const [hover, setHover] = useState<boolean>(false);
  const variantChangeHandle = () => {
    setHover(!hover);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Article, error, loading } = useSelector(
    (store: any) => store.Article
  );
  // set initail
  const initialValues = {
    title: "",
    author: "",
    body: "",
  };
  // set validate
  const validationSchema = yup.object({
    title: yup.string().required("enter article's tilte").min(2),
    author: yup.string().required("enter article's author").min(2),
  });
  // custom type
  type onSubmitArgum = {
    title: string;
    author: string;
    body: string;
  };
  // submit
  const onSubmit = ({ title, author, body }: onSubmitArgum) => {
    dispatch(postAsyncArticle({ title, author, body, upload: link }));
    navigate("/home");
    toast.success(`"${title}" ${t("added to article list")}`);
  };
  // formik
  const formik = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit,
  });
  // onChage for uploaded file
  const uploadHandler = (e?: ChangeEvent<HTMLInputElement> | any) => {
    setFile(e);
    const url = URL.createObjectURL(e);
    setLink(url);
  };
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
        <h1 className="flex justify-center mt-4 mb-6 text-2xl">
          {t("Add New Article")}
        </h1>
        <TextFieldCustom
          formik={formik}
          name="title"
          label="Title"
          type={""}
          focus={false}
          iconStart={undefined}
          iconEnd={undefined}
          InputProps={undefined}
        />
        <TextFieldCustom
          formik={formik}
          name="author"
          label="Author"
          type={""}
          focus={false}
          iconStart={undefined}
          iconEnd={undefined}
          InputProps={undefined}
        />
        <TextFieldCustom
          formik={formik}
          name="body"
          label="Content"
          type={""}
          focus={false}
          iconStart={undefined}
          iconEnd={undefined}
          InputProps={undefined}
        />
        <div className="flex flex-col mt-3">
          <div className="items-center flex">
            <label className="mr-3">Upload File</label>
            <UploadButtons uploadHandler={uploadHandler} />
          </div>
          <p className="text-sm text-gray-600 mt-2">{file && file.name}</p>
        </div>
        <Button
          type="submit"
          fullWidth
          variant={hover ? "outlined" : "contained"}
          sx={{ mt: 3, mb: 2 }}
          disabled={!formik.isValid}
          onMouseEnter={variantChangeHandle}
          onMouseLeave={variantChangeHandle}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}
