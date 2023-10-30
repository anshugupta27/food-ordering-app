import  { useState } from "react";

const HeaderComp = (prop) => {
    console.log("header component called now")
 

  return <>
  this is the user: {prop.name}

  </>
};
export default HeaderComp;
