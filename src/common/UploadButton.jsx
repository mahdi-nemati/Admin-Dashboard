import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const Input = styled("input")({
  display: "none",
});

export default function UploadButtons({ uploadHandler }) {
  const changeHandle = (e) => {
    // must be complated
    uploadHandler(e.target.files[0]);
  };
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input
          id="contained-button-file"
          multiple
          type="file"
          onChange={changeHandle}
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </Stack>
  );
}
