import { Component } from "react";
import {  Header } from "./Searchbar.styled";

export default class SearchBar extends Component {
  state = {
    searchName: '', 
    inputValue: '',
  };
  
  render(){
    return(
    <Header>
  <form onSubmit={this.handleSubmit} className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>
    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="searchName"
      value={this.state.inputValue}
    />
  </form>
</Header>  
    )
  }
}
