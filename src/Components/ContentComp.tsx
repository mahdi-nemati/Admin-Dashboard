import Main from "./Main/Main";
import Navigation from "./Navigation/Navigation";
import { useSelector } from "react-redux";

function ContentComp() {
  const { isRtl } = useSelector((store: any) => store.ltr);
  return (
    <main dir={isRtl === "yes" ? "rtl" : "ltr"} className="flex justify-end rtl:flex rtl:justify-start relative">
      <Navigation />
      <Main />
    </main>
  );
}
export default ContentComp;
