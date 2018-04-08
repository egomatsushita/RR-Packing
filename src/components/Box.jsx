import React from 'react';

export const Box = ({box, items, totalWeight}) => {
  let ItemsBox;
  const itemsInBox = items.filter(item => item.box_id === box._id);
  let boxName = box.name;
  boxName = boxName.charAt(0).toUpperCase() + boxName.slice(1);

  if (itemsInBox) {
    ItemsBox = () => (
      <ul className="ul-items-in-box">
        {itemsInBox.map(item => {
          return (
            <li key={item._id}>
              <p><span>x</span>&nbsp;{item.name}</p> 
              <p>{item.weight}</p>
            </li>
          );
        })}
      </ul>
    );
  } else {
    ItemsBox = null;
  }

  return (
    <li className="li-boxes">
      <p>{boxName}</p>
      <ItemsBox />
      <p>t.w. {totalWeight}/{box.total_allowed_weight}</p>
    </li>
  );
}

export default Box;