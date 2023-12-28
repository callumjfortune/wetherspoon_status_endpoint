import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let data;

fetch("https://static.wsstack.nn4maws.net/v1/delivery/en_gb/7090.json")
.then((res) => {
  return res.json();
})
.then((res) => {
  data = res
  console.log(res);

  setTimeout(root.render(
    <React.StrictMode>
      <App timeData={data} />
    </React.StrictMode>
  ), 5000)

})
.catch((err) => {
  console.log(err);
  throw new Error(err);
})


