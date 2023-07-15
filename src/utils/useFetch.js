import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const value = await fetch(url);
      const json = await value.json();
      setData(json);
    };
    fetchData(url);
  }, [url]);

  

  return data;
};

export default useFetch;
