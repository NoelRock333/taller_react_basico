import React from 'react'

const Item = ({ item, handleInputChange, index }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center" style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
      <span>{item.text}</span>
      <input
          name="isGoing"
          type="checkbox"
          checked={item.done}
          onChange={() => handleInputChange(index)} />
    </li>
  );
}

export default Item;