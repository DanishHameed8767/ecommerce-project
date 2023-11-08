import React from "react";
export  function Alert(props){
    const capitalize = (x)=>{
        if(x=== "danger"){
            x = "Error"
        }
            let y = x.toLowerCase();
            return y.charAt(0).toUpperCase() + y.slice(1);
    }
    return(
       props.alert &&    <>
 <div className={`alert alert-${props.alert.type} position-absolute w-100 rounded-0`} role="alert">
   <strong>{capitalize(props.alert.type)}: </strong>{props.alert.msg}
</div>
</>
    );
}