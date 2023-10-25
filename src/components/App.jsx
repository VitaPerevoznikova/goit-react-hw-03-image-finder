import React from "react";
import { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Button } from "./Button/Button";



export class App extends Component {
  
  render(){
   return (
    <>
    <SearchBar/>
    <Button/>
    {/* <Modal/> */}
    </>
  
  ); 
  }
};
