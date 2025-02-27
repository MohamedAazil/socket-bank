import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const Context = createContext();

export const ContextProvider = (props) => {
  const [s1Occupied, setS1Occupied] = useState(false);
  const [s2Occupied, setS2Occupied] = useState(false);
  const [s3Occupied, setS3Occupied] = useState(false);

  const [paid1, setPaid1] = useState(true);
  const [paid2, setPaid2] = useState(false);
  const [paid3, setPaid3] = useState(false);

  const navigate = useNavigate();

  const useSlot = (occupied, slotNum) => {
    if (occupied) {
      toast.error("Socket Occupied");
    } else {
      switch (slotNum) {
        case 1:
          navigate("/book/1");
          if (paid1) {
            setS1Occupied((prev) => !prev);
          }
          break;
        case 2:
          navigate("/book/2");
          if (paid2) {
            setS2Occupied((prev) => !prev);
          }
          break;
        case 3:
          navigate("/book/3");
          if (paid3) {
            setS3Occupied((prev) => !prev);
          }
          break;
      }
    }
  };

  const pay = (slot) => {
    console.log(slot);
  };
  const value = {
    s1Occupied,
    setS1Occupied,
    s2Occupied,
    setS2Occupied,
    s3Occupied,
    setS3Occupied,
    useSlot,
    pay,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
