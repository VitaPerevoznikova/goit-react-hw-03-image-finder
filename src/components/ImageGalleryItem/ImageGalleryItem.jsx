import { Component } from "react";
import Modal from "../Modal/Modal";
import {Item,Picture } from "./ImageGalleryItem.styled";

export class ImageGalleryItem extends Component {
    state = {
      showModal: false,
    };

    render() {
      const { image } = this.props;
  
      return (
        <Item>
          <Picture
            src={image.webformatURL}
            alt={image.tags}
            onClick={this.toggleModal} 
          />
          {this.state.showModal && (
            <Modal/>
          )}
        </Item>
      );
    }
}
export default ImageGalleryItem;