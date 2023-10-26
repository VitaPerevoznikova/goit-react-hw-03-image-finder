import React from 'react';
import { Component } from 'react';
// import  api from './api/api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoad from './Button/Button';
// import Notiflix from 'notiflix';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchName: '',
    currentPage: 1,
    totalPages: 0,
  };


  render() {
    const { images, isLoading, currentPage, totalPages } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {/* 
        {images.length > 0 ? (<ImageGallery images={images} />) : 
        (Notiflix.Notify.info('Image gallery is empty... 📷'))} */}

        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <p
            style={{
              padding: 100,
              textAlign: 'center',
              fontSize: 30,
            }}
          >
            Image gallery is empty... 📷
          </p>
        )}

        {isLoading && <Loader />}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <ButtonLoad onClick={this.loadMore} />
        )}
        {/* <Modal/> */}
      </>
    );
  }
}
export default App;
