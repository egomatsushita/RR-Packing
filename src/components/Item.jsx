import React from 'react';

export const Item = ({item}) => {
  return (
    <li>
      <p>{item.name}</p>
      <p>w.{item.weight}</p>
    </li>
  );
}

export default Item;