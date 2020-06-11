import React, { useContext } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Content from './Components/Content/Content';
import About from './Components/About/About';
import { Context } from './Components/Context/Context';
import { css } from '@emotion/core';
import GridLoader from 'react-spinners/GridLoader';
import Particles from 'react-particles-js';
import { Animated } from 'react-animated-css';

function App() {
  const {
    twitchStream,
    youtubeSubscribers,
    twitterData,
    instagramStats,
  } = useContext(Context);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const renderLoader = () => {
    return (
      <Animated
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationInDelay={0}
        animationOutDelay={800}
        isVisible={true}
      >
        <div className='Loader'>
          <GridLoader
            css={override}
            size={25}
            color={'#000000'}
            loading={true}
          />
        </div>
      </Animated>
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
        <Particles
          className='particles'
          height={'100%'}
          width={'100%'}
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              color: { value: '#000000' },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: 'top',
                out_mode: 'out',
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'bubble',
                },
                onclick: {
                  enable: true,
                  mode: 'repulse',
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
      </>
    );
  };

  return (
    <div className='App'>
      {twitchStream && twitterData && youtubeSubscribers && instagramStats
        ? renderApp()
        : renderLoader()}
    </div>
  );
}

export default App;
