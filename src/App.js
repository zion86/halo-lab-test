import { useEffect, useState } from 'react';
import CardsList from './components/CardsList/CardsList';
import Button from './components/UI/Button/Button';
import Container from './components/UI/Container/Container';
import Loading from './components/UI/Loading/Loading';
import Modal from './components/UI/Modal/Modal';

const App = () => {
  const [ result, setResult ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e');
    const data = await response.json();
    setIsLoading(false);
    return setResult(data);
  };

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const getDataFromChild = (getDataFromChild) => {
    console.log(getDataFromChild);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container>
        {
          !isLoading &&
          <>
            <CardsList result={ result } onClick={ openModal } cardData={ getDataFromChild } upData={ getDataFromChild } />
            <Button onClick={ openModal } className='button--invert' name='Buy cheapest' />
          </>
        }
        { isLoading && <Loading /> }
      </Container>
      <Modal className={ isOpen ? 'modal--active' : '' } onClick={ openModal } />
    </>
  );
};

export default App;