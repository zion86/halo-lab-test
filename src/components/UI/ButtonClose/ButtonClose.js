import './ButtonClose.css';

const ButtonClose = ({ onClick }) => {
  return (
    <button className='button-close' onClick={ onClick }>
      <span className='button-close__line'></span>
      <span className='button-close__line'></span>
    </button>
  );
};

export default ButtonClose;