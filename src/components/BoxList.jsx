import React from 'react';
import Box from './Box';

export const BoxList = ({boxes, items, onDrop, onRemove}) => {
  return (
    <section className="boxes">
      <p className="p-title">Boxes:</p>
      <ul className="ul-section ul-items-boxes">
        {boxes.map((box) => {
          const totalWeight = 
            items
              .filter(item => item.box_id === box._id)
              .reduce((sum, item) => sum + parseInt(item.weight, 10), 0);
          
          return (
            <Box 
              key={box._id} 
              box={box} 
              items={items} 
              totalWeight={totalWeight} 
              onDrop={onDrop} 
              onRemove={onRemove} 
            />)
        })}
      </ul>
    </section>
  );
}

export default BoxList;
