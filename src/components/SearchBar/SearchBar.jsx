import { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { Header } from './Searchbar.styled';

 class SearchBar extends Component {
  state = {
    searchName: '',
  };

  handleChange = event => {
    this.setState({ searchName: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchName.trim() === '') {
      Notiflix.Notify.failure('Please enter a value to search!');
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ searchName: '' });
  };

  render() {
    const { searchName } = this.state;
    return (
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
            onChange={this.handleChange}
            value={searchName}
          />
        </form>
      </Header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;