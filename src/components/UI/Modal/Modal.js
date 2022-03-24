import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import ButtonClose from '../ButtonClose/ButtonClose';
import './Modal.css';

const Order = ({ className, onClick, modalCardData }) => {
  // console.log('modalCardData: ', modalCardData);
  // const { category, name, price } = modalCardData;

  return (
    <div className={ `modal__inner ${className}` }>
      <div className='order'>
        <ButtonClose onClick={ onClick } />
        <div className="order__good">
          {/* <p className="order__category">{ category }</p>
          <h2 className='order__name'>{ name }</h2>
          <span className='order__price'>{ price }</span> */}
        </div>
        <form className='order__form'>
          <input className='order__input' type="text" placeholder='Name' required />
          <input className='order__input' type="number" placeholder='Number' required min="12" max="12" />
        </form>
        <Button name='Order' />
      </div>
    </div>
  );
}

const Modal = ({ className, onClick, modalCardData }) => {
  console.log('modalCardData: ', modalCardData);

  return (
    <>
      { createPortal(
        <Order onClick={ onClick } className={ className } modalCardData={ modalCardData } />,
        document.querySelector('.modal')) }
    </>
  );
};

export default Modal;