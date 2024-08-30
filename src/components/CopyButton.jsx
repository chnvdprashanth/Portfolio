import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const CopyButton = ({ textToCopy }) => {
    const [copyState, setCopyState] = useState(true)
  return (
    <>
      <IoCopyOutline className="w-8 h-8 max-tablet:w-5 max-tablet:h-5 cursor-pointer" onClick={() =>{
        navigator.clipboard.writeText(textToCopy)
        .then(()=>setCopyState(true))
        .catch(()=>setCopyState(false))

        copyState ? toast("Copied",{type:"success"}) : toast("Failed",{type:"error"})
      }}/>
      <ToastContainer theme={"dark"} newestOnTop={true} />
    </>
  );
};

export default CopyButton;
