import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag: function (props, monitor) {
    return {itemId: 1}
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

// export const Item = ({item}) => {
class Item extends Component {
  render() {
    const {connectDragSource, isDragging, item} = this.props;
    // const item = this.props.item;
    return connectDragSource(
      <li>
        <p>{item.name}</p>
        <p>w.{item.weight}</p>
      </li>
    );
  }
}

export default DragSource('Item', itemSource, collect)(Item);