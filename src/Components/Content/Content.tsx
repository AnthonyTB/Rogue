import React, { useContext } from 'react';
import './Content.css';
import { ResponseObject } from '../interfaces/interfaces';
import { Context } from '../Context/Context';

function Content() {
  const { twitchData } = useContext(Context);

  return (
    <>
      <h3>Catch Me Live</h3>
      {twitchData ? (
        twitchData.Live === 'Live' ? (
          ''
        ) : (
          <span>
            Looks Like I'm not currently live so checkout my one of my recent
            broadcast
          </span>
        )
      ) : (
        ''
      )}
      <h3>Recent Upload</h3>
    </>
  );
}

export default Content;
