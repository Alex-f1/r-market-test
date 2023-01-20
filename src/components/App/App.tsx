// import React from 'react';
// import logo from '../../logo.svg';
import Hero from '../Hero/Hero';
import MenuPanel from '../MenuPanel/MenuPanel';
import ProductsList from '../ProductsList/ProductsList';
import Title from '../Title/Title';
import TopPanel from '../TopPanel/TopPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopPanel />
        <MenuPanel />
      </header>
      
      <main className="App-main">
        <Hero />
        <div className="App-main__container container py-10 px-4 mx-auto">
          <ProductsList />
        </div>
      </main>
      
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
