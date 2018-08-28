import React from 'react';
import { PriceList } from './Components/PriceList/PriceList';
import { initialData } from './initialData';
import './styles.css';

const App = () => {
  return (
    <PriceList data={initialData} />
  );
}

export default App;
