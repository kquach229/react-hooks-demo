import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResponse(data));
  }, []);

  return response;
};

export default useFetch;
