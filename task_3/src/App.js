import { useEffect, useState } from 'react';
import useApi from './hooks/useApi';
import Quote from './components/Quote';

function App() {
  const [data] = useApi();
  const [prevIndex, setPrevIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const getRandomQuote = () => {
    const randomIndex = Math.floor((Math.random() * data.length));
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
      setCurrentIndex(() => Math.floor((Math.random() * data.length)));
    }
  }, [data]);

  return (
    <div>
      {currentIndex ? <Quote data={data[currentIndex]} /> : <p>Ładowanie...</p>}
      {prevIndex && <button onClick={getPrevQuote}>Poprzedni</button>}
      <button onClick={getRandomQuote}>Losuj</button>
    </div>
  );
}

export default App;
