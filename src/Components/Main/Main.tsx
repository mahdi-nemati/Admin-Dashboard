import { useSelector } from "react-redux";
import ArticleList from "../ArticleComponent/ArticleList";
import ChartComponent from "./ChartComponent";
import PreviewBar from "./PreviewBar";
function Main() {
  const { isRtl } = useSelector((store: any) => store.ltr);

  return (
    <main
      dir={isRtl === "yes" ? "rtl" : "ltr"}
      className="w-full flex  flex-col relative mt-20 h-full items-center"
    >
      <PreviewBar />
      <ChartComponent />
      <ArticleList />
    </main>
  );
}
export default Main;
