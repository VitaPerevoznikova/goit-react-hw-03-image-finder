import { Component } from "react";
import {  Header } from "./Searchbar.styled";

export default class SearchBar extends Component {

  render(){
    return(
    <Header>
  <form className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>
    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    
  </form>
</Header>  
    )
  }

}