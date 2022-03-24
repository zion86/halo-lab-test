import './Card.css';
import Button from '../UI/Button/Button';

const Card = ({ category, name, price, onClick }) => {

  return (
    <div className="card">
      <div className="card__header">
        <p className="card__category">{ category }</p>
        <h2 className="card__name">{ name }</h2>
      </div>
      <p className="card__body">
        <span className="card__price">{ price }</span>
        <Button name='BUY' onClick={ onClick } />
      </p>
    </div>
  );
};

export default Card;