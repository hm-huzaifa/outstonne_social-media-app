import React from "react";
import Loader, {
  Triangle,
  Rings,
  ThreeDots,
  Audio,
  TailSpin,
  Bars,
  Puff,
  Oval,
} from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {/* <Loader
        type="Triangle"
        color="#00BFFF"
        height={50}
        width={200}
        className=" m-5"
      /> */}
      {/* <Rings color="#00BFFF" height={80} width={80} /> */}
      {/* <Triangle color="#00BFFF" height={80} width={80} /> */}
      {/* <ThreeDots color="#00BFFF" height={80} width={80} /> */}
      {/* <Audio color="#00BFFF" height={80} width={80} /> */}
      {/* <TailSpin color="#00BFFF" height={50} width={200} /> */}
      {/* <Bars color="#00BFFF" height={50} width={200} /> */}
      <Puff color="#00BFFF" height={50} width={200} className=" m-5" />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
