import React from 'react';
import { Item } from './Item';

export const ItemList = ({items}) => {
  return (
    <section className="items">
      <p className="p-title">Items:</p>
      <ul className="ul-section ul-items-boxes">
        {items.map(item =>
          <Item item={item}/>
        )}
      </ul>
    </section>
  );
}

export default ItemList;

