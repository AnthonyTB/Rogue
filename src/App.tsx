import React from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Content from './Components/Content/Content';
import About from './Components/About/About';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Hero />
      </header>
      <body>
        <section className='Content'>
          <About />
          <Content />
        </section>
      </body>
    </div>
  );
}

export default App;
