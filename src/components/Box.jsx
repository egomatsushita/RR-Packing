import React from 'react';

export const Box = ({box, items}) => {
  const itemsInBox = items.filter(item => item.box_id === box._id);

  const ItemsBox = () => {
    if (itemsInBox) {
      return (
        <ul className="ul-items-in-box">
          {itemsInBox.map(item => (
            <li key={item._id}>
              <p><span>x</span>&nbsp;{item.name}</p> 
              <p>{item.weight}</p>
            </li>))}
        </ul>
      );
    }
    return null;
  }

  let boxName = box.name;
  boxName = boxName.charAt(0).toUpperCase() + boxName.slice(1);

  return (
    <li className="li-boxes">
      <p>{boxName}</p>
      <ItemsBox />
      <p>t.w. 0/{box.total_allowed_weight}</p>
    </li>
  );
}

export default Box;