import React from 'react'

const Item = ({ item, handleInputChange, index }) => {
  return (
    <li style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
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