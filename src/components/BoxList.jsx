import React from 'react';
import { Box } from './Box';

export const BoxList = ({boxes}) => {
  return (
    <section className="boxes">
      <p className="p-title">Boxes:</p>
      <ul className="ul-section ul-items-boxes">
        {boxes.map(box =>
          <Box key={box.id} box={box}/>
        )}
      </ul>
    </section>
  );
}

export default BoxList;

