import React, { useContext } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Content from './Components/Content/Content';
import About from './Components/About/About';
import { Context } from './Components/Context/Context';

function App() {
  const {
    twitchStream,
    youtubeData,
    youtubeSubscribers,
    twitchData,
    twitterData,
    apexStats,
  } = useContext(Context);

  const renderApp = () => {
    return (
      <>
        <header className='App-header'>
          <Hero />
        </header>
        <body>
          <section className='Content'>
            <About />
            <Content />
          </section>
        </body>
      </>
    );
  };

  return (
    <div className='App'>
      {twitchStream && twitchData && twitterData && youtubeSubscribers ? (
        renderApp()
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default App;
