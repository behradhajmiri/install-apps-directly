/* eslint-disable no-restricted-syntax */
import React from 'react';

export default function Translate({ src }: any) {

  if (src.translate) {
    const translate = { __html: src.translate };
    const word = { __html: src.word };

    return (
      <div className="abadis">
        <div className="result">
          <div className="word" dangerouslySetInnerHTML={word} />
          <div className="translate" dangerouslySetInnerHTML={translate} />
        </div>
        <div className="source">
          منبع: آبادیس
          {' '}
          <a href="https://abadis.ir/">abadis.ir</a>
        </div>
      </div>
    );
  }
  else return (
    <div></div>
  )
}
