import React, { useState } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import Modal from './components/UI/Modal';
import { CartContextProvider } from './store/CartContext'; 

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModalHandler = () =>{
    setModalOpen(true)
  } 

  const closeModalHandler = () =>{
    setModalOpen(false)
  } 

  return (
    <CartContextProvider>
      <React.Fragment>
        <h1>Food Order App</h1>
        <Header openModal={openModalHandler} />
        <Meals />
        <Modal isOpen ={modalOpen}>
          <h3>Your cart</h3>
          <button onClick={closeModalHandler}>Close</button>
        </Modal>
      </React.Fragment>
    </CartContextProvider>
  );
};

export default App;
