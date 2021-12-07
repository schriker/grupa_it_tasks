import { useEffect, useState } from 'react';

function useApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const result = await (await fetch(process.env.REACT_APP_API_URL)).json();

        setData(result);
      } catch (error) {
        console.log(error);
      }

    };

    fetchData();
  }, []);

  return [data];
}

export default useApi;