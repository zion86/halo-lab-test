import './CardsListItem.css';
import Card from '../Card/Card';

const CardsListItem = (props) => {
  return (
    <li className='cards-list__item'>
      <Card { ...props } />
    </li>
  );
};

export default CardsListItem;