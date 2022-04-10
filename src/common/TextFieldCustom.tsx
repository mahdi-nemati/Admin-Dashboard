import { TextField, InputAdornment } from "@mui/material";
const TextFieldCustom = ({
  name,
  type = "text",
  formik,
  label,
  focus = false,
  iconStart,
  iconEnd,
  InputProps,
}: {
  name: string;
  type: string;
  formik: any;
  label: string;
  focus: boolean;
  iconStart: any;
  iconEnd: any;
  InputProps: any;
}) => {
  return (
    <section className="w-full">
      <TextField
        error={formik.errors[name] && formik.touched[name]}
        type={type}
        name={name}
        {...formik.getFieldProps(name)}
        label={label}
        required={name !== "body"}
        fullWidth
        autoFocus={focus}
        margin="normal"
        multiline={name === "body"}
        rows={6}
        InputProps={{
          ...InputProps,
          startAdornment: iconStart ? (
            <InputAdornment position="start">{iconStart}</InputAdornment>
          ) : null,
          endAdornment: iconEnd ? (
            <InputAdornment position="end">{iconEnd}</InputAdornment>
          ) : null,
        }}
      />
      <div className="">
        {"" ||
          (formik.errors[name] && formik.touched[name] && (
            <span className="text-red-500 text-sm ml-2">
              {formik.errors[name]}
            </span>
          ))}
      </div>
    </section>
  );
};

export default TextFieldCustom;
