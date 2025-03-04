import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/context";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

const Socket = () => {
  const {s1Occupied,
    setS1Occupied,
    s2Occupied,
    setS2Occupied,
    s3Occupied,
    setS3Occupied,
    useSlot} = useContext(Context);
  return (
    <div className="flex min-h-[60vh] mt-10 mx-auto w-2/3 gap-8">
      <div
        className="relative flex flex-col items-center justify-center"
        onClick={() => useSlot(s1Occupied,1)}
      >
        <img src={assets.socket} alt="" className="w-96" />
        {s1Occupied && <Left />}
        <p className={`font-bold p-2 ${s1Occupied? "text-red-600":"text-green-600"} text-2xl`}>
          Socket One: {s1Occupied ? "Occupied" : "Available"}
        </p>
      </div>
      <div
        className="relative flex flex-col items-center justify-center"
        onClick={() => useSlot(s2Occupied,2)}
      >
        <img src={assets.socket} alt="" className="w-96" />
        {s2Occupied && <Middle />}
        <p className={`font-bold p-2 ${s2Occupied? "text-red-600":"text-green-600"} text-2xl`}>
          Socket One: {s2Occupied ? "Occupied" : "Available"}
        </p>
      </div>
      <div
        className="relative flex flex-col items-center justify-center"
        onClick={() => useSlot(s3Occupied,3)}
      >
        <img src={assets.socket} alt="" className="w-96" />
        {s3Occupied && <Right />}
        <p className={`font-bold p-2 ${s3Occupied? "text-red-600":"text-green-600"} text-2xl`}>
          Socket One: {s3Occupied ? "Occupied" : "Available"}
        </p>
      </div>
    </div>
  );
};

export default Socket;
