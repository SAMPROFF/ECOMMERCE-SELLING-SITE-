import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Imagesdata from './components/Imagesdata';

const App = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Imagesdata />  
    </div>
  )
}

export default App
