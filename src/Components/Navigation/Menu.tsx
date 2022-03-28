import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import DashboardIcon from "@mui/icons-material/Dashboard";
type Anchor = "left" | "right";

export default function Menu() {
  const { isRtl } = useSelector((store: any) => store.ltr);
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#3A55FC",
        height: "100%",
        color: "#fff",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {isRtl === "yes" ? (
        <List>
          <ListItem>
            <ListItemText>{t("Dashboard")}</ListItemText>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#fff", fontSize: "40px" }} />
            </ListItemIcon>
          </ListItem>
          <Divider
            sx={{
              backgroundColor: "#e5e7eb",
              marginTop: "2px",
              marginBottom: "12px",
              opacity: "20%",
            }}
          />
          {[t("Inbox"), t("Starred"), t("Send email"), t("Drafts")].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon sx={{ color: "#fff" }} />
                  ) : (
                    <MailIcon sx={{ color: "#fff" }} />
                  )}
                </ListItemIcon>
              </ListItem>
            )
          )}
        </List>
      ) : (
        <List>
          <ListItem>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#fff", fontSize: "40px" }} />
            </ListItemIcon>
            <ListItemText>{t("Dashboard")}</ListItemText>
          </ListItem>
          <Divider
            sx={{
              backgroundColor: "#e5e7eb",
              marginTop: "2px",
              marginBottom: "12px",
              opacity: "20%",
            }}
          />
          {[t("Inbox"), t("Starred"), t("Send email"), t("Drafts")].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon sx={{ color: "#fff" }} />
                  ) : (
                    <MailIcon sx={{ color: "#fff" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      )}
    </Box>
  );

  return (
    <div className="mr-5 ml-5">
      {isRtl === "yes"
        ? (["right"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <div className="flex flex-col cursor-pointer">
                  <div className="h-1 w-6 bg-slate-400 mt-1"></div>
                  <div className="h-1 w-6 bg-slate-400 mt-1"></div>
                  <div className="h-1 w-6 bg-slate-400 mt-1"></div>
                </div>
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))
        : (["left"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <div className="flex flex-col cursor-pointer">
                  <div className="h-1 w-6 bg-slate-400 mt-1"></div>
                  <div className="h-1 w-6 bg-slate-400 mt-1"></div>
                  <div className="h-1 w-6 bg-slate-400 mt-1"></div>
                </div>
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
    </div>
  );
}
