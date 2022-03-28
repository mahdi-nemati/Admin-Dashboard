import ChartLine from "../Chart/LineChart"
import ChartCircle from "../Chart/ChartCircle"
export default function ChartComponent() {
  return (
    <section className="w-11/12 flex mt-10  mb-5 justify-between items-start">
      <div
        dir="ltr"
        className="w-8/12 h-full flex justify-center rounded-2xl bg-white bg-opacity-40 p-8"
      >
        <ChartLine />
      </div>
      <div
        dir="ltr"
        className="w-3/12 h-full flex flex-col justify-center items-center rounded-2xl bg-white bg-opacity-40 p-5"
      >
        <ChartCircle />
        <section className="flex justify-between  items-start w-full">
          <div className="flex flex-row-reverse items-center">
            <p>A</p>
            <span className="bg-indigo-600 w-4 h-4 rounded-full mr-3"></span>
          </div>
          <div className="flex flex-row-reverse items-center">
            <p>B</p>
            <span className="bg-orange-400 w-4 h-4 rounded-full mr-3"></span>
          </div>
          <div className="flex flex-row-reverse items-center">
            <p>C</p>
            <span className="bg-pink-500 w-4 h-4 rounded-full mr-3"></span>
          </div>
        </section>
      </div>
    </section>
  );
}
