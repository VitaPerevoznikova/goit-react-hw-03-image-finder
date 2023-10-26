import { Component } from 'react';
import { StyledModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
 
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown); 
    document.body.style.overflow = 'hidden';
  }

  // Метод жизненного цикла: вызывается перед размонтированием компонента
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown); 
    document.body.style.overflow = 'visible';
  }

  // Обработчик события нажатия клавиши
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose(); 
    }
  };

  // Обработчик клика по фону модального окна
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props; 

    return(
      <StyledModal>
        <Modal>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      </StyledModal>,
      modalRoot 
    );
  }
}
export default Modal;

