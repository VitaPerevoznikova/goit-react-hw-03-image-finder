import React from 'react';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
    <List>
        {images.map(image => (
            <ImageGalleryItem key={image.id} image={image}/>
        ))}
    </List>
}
export default ImageGallery;