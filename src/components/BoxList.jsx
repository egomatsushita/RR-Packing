import React from 'react';
import { Box } from './Box';

export const BoxList = ({boxes, items}) => {
  return (
    <section className="boxes">
      <p className="p-title">Boxes:</p>
      <ul className="ul-section ul-items-boxes">
        {boxes.map(box =>
          <Box key={box._id} box={box} items={items}/>
        )}
      </ul>
    </section>
  );
}

export default BoxList;

