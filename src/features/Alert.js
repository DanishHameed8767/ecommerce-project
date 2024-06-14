import React, { useEffect, useRef } from "react";

export default function Alert(props) {
  const inputElement = useRef();
  const capitalize = (x) => {
    if (x === "danger") {
      x = "Error";
    }
    let y = x.toLowerCase();
    return y.charAt(0).toUpperCase() + y.slice(1);
  };
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     inputElement.current.click();
  //   },3000)
  // },[])
  return (
    props.type && props.msg && (
      <>
        <div
          className={`alert alert-${props.type} alert-dismissible position-absolute rounded-0`}
          role="alert"
        >
          <strong>{capitalize(props.type)}: </strong>
          {props.msg}
          <button type="button" ref={inputElement} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </>
    )
  );
}
