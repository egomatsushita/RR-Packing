import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag: (props) => {
    return {
      itemId: props.item._id
    }
  },
  canDrag: (props) => !props.isDropped(props.item._id)
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Item extends Component {
  render() {
    const {connectDragSource, isDragging, item, isDropped} = this.props;
    const opacity = isDragging ? 0.4 : 1;
    const backgroundColor = isDropped(item._id) ? '#80808090' : null;
    
    return connectDragSource(
        <li style={{opacity: opacity, backgroundColor: backgroundColor}}>
          <p>{item.name}</p>
          <p>w.{item.weight}</p>
        </li>
    );
  }
}

export default DragSource('Item', itemSource, collect)(Item);