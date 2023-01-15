// import React from 'react';
// import logo from '../../logo.svg';
import Hero from '../Hero/Hero';
import MenuPanel from '../MenuPanel/MenuPanel';
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
      </main>
      
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
