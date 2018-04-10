import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag: function (props, monitor) {
    return {
      itemId: props.item.item_id
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Item extends Component {
  render() {
    const {connectDragSource, isDragging, item} = this.props;
    const opacity = isDragging ? 0.4 : 1;
    
    return connectDragSource(
        <li style={{opacity: opacity}}>
          <p>{item.name}</p>
          <p>w.{item.weight}</p>
        </li>
    );
  }
}

export default DragSource('Item', itemSource, collect)(Item);