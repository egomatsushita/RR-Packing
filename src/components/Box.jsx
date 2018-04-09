import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';

const boxTarget = {
  drop: function(props, monitor) {
    // moveItem(props._id);
    
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

// export const Box = ({box, items, totalWeight}) => {
class Box extends Component {
    /*let ItemsBox;
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
  }*/
  renderItemsBox() {
    const { connectDropTarget, box, items, totalWeight } = this.props;
    const itemsInBox = items.filter(item => item.box_id === box._id);

    if (itemsInBox) {
      return (
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
      return null;
    }
  }
        // <ItemsBox />

  render() {
    const { connectDropTarget, box, items, totalWeight } = this.props;
    let boxName = box.name;
    boxName = boxName.charAt(0).toUpperCase() + boxName.slice(1);
    return connectDropTarget(
      <li className="li-boxes">
        <p>{boxName}</p>
        {this.renderItemsBox()}
        <p>t.w. {totalWeight}/{box.total_allowed_weight}</p>
      </li>
    );

  }
}

export default DropTarget('item', boxTarget, collect)(Box);