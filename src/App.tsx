import React, { useContext } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Content from './Components/Content/Content';
import About from './Components/About/About';
import { Context } from './Components/Context/Context';
import { css } from '@emotion/core';
import GridLoader from 'react-spinners/GridLoader';

function App() {
  const {
    twitchStream,
    youtubeSubscribers,
    twitchData,
    twitterData,
    instagramStats,
  } = useContext(Context);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const renderLoader = () => {
    return (
      <div className='Loader'>
        <GridLoader css={override} size={25} color={'#000000'} loading={true} />
      </div>
    );
  };

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
      {twitchStream &&
      twitchData &&
      twitterData &&
      youtubeSubscribers &&
      instagramStats
        ? renderApp()
        : renderLoader()}
    </div>
  );
}

export default App;
