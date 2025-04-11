import React,{ useReducer }  from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext'; 

const App = () => {
  return (
    <CartContextProvider>
      <React.Fragment>
        <h1>Food Order App</h1>
        <Header />
        <Meals />
      </React.Fragment>
    </CartContextProvider>
  );
};

export default App;
