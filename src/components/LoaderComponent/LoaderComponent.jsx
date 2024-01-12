import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";



export default function LoaderComponent() {

  const override: 
    CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
  };

  let [loading] = useState(true);
  let [color] = useState("#ffffff");

  return (
    <div>
   <ClipLoader color={color} loading={loading} cssOverride={override} size={150} />
   
  </div>
  );   
};