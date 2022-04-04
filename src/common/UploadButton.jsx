import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Input = styled("input")({
  display: "none",
});

export default function UploadButtons() {
  
  const changeHandle = (e) => {
    // must be complated
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
