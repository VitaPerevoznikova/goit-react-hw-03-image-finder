import React from "react";
import { Audio } from  'react-loader-spinner';
import { LodeWrapper } from "./Loader.styled";

const Loader = () => {
    return(
    <LodeWrapper>
     <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle={{}}
    wrapperClassName=''
    visible={true}
  />   
  </LodeWrapper>
    )
}
export default Loader;
