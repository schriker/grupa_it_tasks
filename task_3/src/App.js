import { useEffect, useState } from 'react';
import useApi from './hooks/useApi';
import Quote from './components/Quote';

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
      {currentIndex ? <Quote data={data[currentIndex]} /> : 'Ładowanie...'}
      {prevIndex && <button onClick={getPrevQuote}>Poprzedni</button>}
      <button onClick={getRandomQuote}>Losuj</button>
    </div>
  );
}

export default App;
