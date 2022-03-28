import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { switchTo } from "../../Feature/LtrAndRtlSlice";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Menu from "./Menu";
import SearchInput from "./SearchInput";
import UserAvatar from "./Avatar";
function Navigation() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { isRtl } = useSelector((store: any) => store.ltr);
  const changeLanHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
    dispatch(switchTo(languageValue));
  };
  return (
    <nav
      dir={isRtl === "yes" ? "rtl" : "ltr"}
      className="z-10 fixed flex flex-row items-center w-full justify-between h-24"
      id="nav"
    >
      <section className="flex items-center justify-between ml-5">
        {/* Hambergur Menu */}
        <Menu />
        {/* Search Input Component */}
        <SearchInput />
        {/* Change Lang Component */}
      </section>
      <section className="flex items-center justify-between mr-5 ml-5">
        <section dir="ltr" className="mr-3 ml-3">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              label="language"
              onChange={(e: any) => changeLanHandler(e)}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value="en">{t("English")}</MenuItem>
              <MenuItem value="fa">{t("Farsi")}</MenuItem>
            </Select>
          </FormControl>
        </section>
        {/* user avatar */}
        <UserAvatar />
      </section>
    </nav>
  );
}
export default Navigation;
