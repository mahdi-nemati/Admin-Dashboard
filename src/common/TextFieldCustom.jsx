import { TextField } from "@mui/material";

const TextFieldCustom = ({ name, type = "text", formik, label , focus = false}) => {
  return (
    <section className="w-full">
      <TextField
        type={type}
        name={name}
        {...formik.getFieldProps(name)}
        label={label}
        required
        fullWidth
        autoFocus={focus}
        margin="normal"
      />
      <div className="">
        {"" || formik.errors[name] && formik.touched[name] && (
          <span className="text-red-500 text-sm ml-2">{formik.errors[name]}</span>
        )}
      </div>
    </section>
  );
};

export default TextFieldCustom;
