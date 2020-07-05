import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/header';
import Main from './components/main';
import ShopCard from './components/shop-card';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="header">
          <Header></Header>
        </div>
        <div className="main">
          <Main></Main>
        </div>
        <div className="aside">
          <ShopCard></ShopCard>
        </div>
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
