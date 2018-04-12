import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';

const boxTarget = {
  drop(props, monitor) {
    const itemId = monitor.getItem().item._id;
    const boxId = props.box._id;
    props.onDrop(itemId, boxId);
  },
  canDrop(props, monitor) {
    const item = monitor.getItem().item;
    let sumWeight = props.totalWeight + item.weight;
    return sumWeight <= props.box.total_allowed_weight;
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }
  handleRemoveClick(itemId) {
    this.props.onRemove(itemId);
  }

  render() {
    const { connectDropTarget, isOver, canDrop, box, items, totalWeight } = this.props;
    const itemsInBox = items.filter(item => item.box_id === box._id);
    let boxName = box.name;
    boxName = boxName.charAt(0).toUpperCase() + boxName.slice(1);
    const click = this.handleRemoveClick;

    const active = isOver && canDrop;
    let background;
    if (active) {
      background = canDrop ? 'green' : null;
    } else if (canDrop) {
      background = canDrop ? 'khaki' : null;
    }

    return connectDropTarget(
      <li className="li-boxes" style={{backgroundColor: background}}>
        <p>{boxName}</p>
        <ul className="ul-items-in-box">
          {itemsInBox.map(item => {
            return (
              <li key={item._id}>
                <p><span onClick={() => click(item._id)}>x</span>&nbsp;{item.name}</p>
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