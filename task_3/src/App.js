import { useEffect, useState } from 'react';
import useApi from './hooks/useApi';

function App() {
  const [data] = useApi();
  const [prevIndex, setPrevIndex] = useState();
  const [currentIndex, setCurrentIndex] = useState();

  const getRandomQuote = () => {
    const randomIndex = Math.floor((Math.random() * data.length) + 1);
    setCurrentIndex(randomIndex);
    setPrevIndex(currentIndex);
  };

  const getPrevQuote = () => {
    if (prevIndex) {
      setCurrentIndex(prevIndex);
      setPrevIndex(currentIndex);
    }
  };

  useEffect(() => {
    if (data.length) {
      setCurrentIndex(() => Math.floor((Math.random() * data.length) + 1));
    }
  }, [data]);


  return (
    <div>
      {currentIndex ? data[currentIndex].quote : 'Ładowanie...'}
      <button onClick={getRandomQuote}>Losuj</button>
      <button onClick={getPrevQuote}>Poprzedni</button>
    </div>
  );
}

export default App;
