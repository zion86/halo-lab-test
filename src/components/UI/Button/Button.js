import './Button.css'

const Button = ({ name, className, onClick }) => {
  return (
    <button className={ `button ${className}` } onClick={ onClick }>
      { name }
    </button>
  );
};

export default Button;