import { ISocialCard } from '../../interfaces';
import React from 'react';

const SocialCard: React.FC<ISocialCard> = ({Title, Link, IconClassname, Username, Count, SubLabel, ButtonLabel}) => {
    return (
        <li key={`${Title} Card`} className={Title}>
            <i className={IconClassname}></i>
            <h5>{Username}</h5>
            <span className='Count'>{Count}</span>
            <span className='description'>{SubLabel}</span>
            <button type='button'>
              <a href={Link} target='blank_'>
                {ButtonLabel}
              </a>
            </button>
        </li>
    )
}

export default SocialCard;