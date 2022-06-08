import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url){
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
      .then(setLoad(false))
      .catch(setError)
  },[url])
  
  return {
    data,
    load,
    error
  }
}


export default useFetch;