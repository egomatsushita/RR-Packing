import React from 'react';

export const Box = ({box}) => {
  return (
    <li className="li-boxes">
      <p>{box.name}</p>
      <ul>
        <li></li>
      </ul>
      <p>t.w. 0/{box.total_allowed_weight}</p>
    </li>
  );
}

export default Box;