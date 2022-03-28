import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function UserAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      {/* <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        B
      </Avatar> */}
      <Avatar src="/broken-image.jpg" />
    </Stack>
  );
}
