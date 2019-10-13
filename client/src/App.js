import React from 'react';
import axios from 'axios';
import './App.css';

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})

function App() {
  const [hello, setHello] = React.useState(null);

  React.useEffect( () => {
    axiosInstance.get('/posts')
    .then(res => console.log('axiosInstance: ', res.data))
    .catch(err => console.log(err));

    asyncFunction();
  }, []);

  // Use async fetch instead of axios
  const asyncFunction = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => console.log('fetch: ', json))
  }

  return (
    <div>
      {hello ?
        ( <div> {hello} </div> ) : null
      }
    </div>
  );
}

export default App;
