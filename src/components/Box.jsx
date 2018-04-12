import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';

const boxTarget = {
  drop(props, monitor) {
    const itemId = monitor.getItem().itemId;
    const boxId = props.box._id;
    props.onDrop(itemId, boxId);
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class Box extends Component {
  render() {
    const { connectDropTarget, isOver, canDrop, box, items, totalWeight } = this.props;
    const itemsInBox = items.filter(item => item.box_id === box._id);
    let boxName = box.name;
    boxName = boxName.charAt(0).toUpperCase() + boxName.slice(1);
    const background = canDrop ? 'green' : null;

    return connectDropTarget(
      <li className="li-boxes" style={{backgroundColor: background}}>
        <p>{boxName}</p>
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
        <p>t.w. {totalWeight}/{box.total_allowed_weight}</p>
      </li>
    );
  }
}

export default DropTarget('Item', boxTarget, collect)(Box);