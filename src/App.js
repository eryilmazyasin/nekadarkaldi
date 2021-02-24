import React from 'react';
import img from "./ugur-img.jpeg";
import "./App.css";
import MessagesList from './components/MessagesList';
import AddMessages from './components/AddMessages';


function App() {
  return (
    <div className="App">
      <img className="ugur" src={img} alt="ugur-turkmen-bonus-kafa"/>
      <div className="container my-5">
      <h2 className="mb-4">Ona bir hatıra mesajı bırak...</h2>
      <AddMessages />
        
      <MessagesList />
      </div>
    </div>
  );
}

export default App;
