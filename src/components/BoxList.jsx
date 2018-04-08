import React from 'react';
import { Box } from './Box';

export const BoxList = ({boxes, items}) => {
  let ItemsBox;

  return (
    <section className="boxes">
      <p className="p-title">Boxes:</p>
      <ul className="ul-section ul-items-boxes">
        {boxes.map(box => {
          const totalWeight = 
            items
              .filter(item => item.box_id === box._id)
              .reduce((sum, item) => sum + parseInt(item.weight), 0);
          
          return <Box key={box._id} box={box} items={items} totalWeight={totalWeight}/>
        })}
      </ul>
    </section>
  );
}

export default BoxList;
