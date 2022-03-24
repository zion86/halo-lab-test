import './CardsList.css';
import CardsListItem from './CardsListItem';

const CardsList = ({ result, onClick }) => {
  return (
    <ul className='cards-list cards-list--gap'>
      { result.map(({ category, name, price }) => {
        return (
          <CardsListItem key={ name } category={ category } name={ name } price={ price } onClick={ onClick } />
        )
      }) }
    </ul>
  );
};

export default CardsList;