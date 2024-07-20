import { Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function PackingChecklist() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  // Load items from localStorage on mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  // Save items to localStorage whenever they change
  const saveItems = () => {
    localStorage.setItem('items', JSON.stringify(items));
    alert("Items saved!");
  };

  const handleAddItem = () => {
    const trimmedNewItem = newItem.trim();
    const isValid = /^[A-Za-z\s]+$/.test(trimmedNewItem);
    if (trimmedNewItem && isValid) {
      setItems([...items, { name: trimmedNewItem, packed: false }]);
      setNewItem('');
    } else {
      alert("Please enter a valid item (letters and spaces only).");
    }
  };

  const handleTogglePacked = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="packing-checklist">
      <h1>Travel Packing Checklist</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={handleAddItem}>Add</button>
      <button onClick={saveItems}>Save</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => handleTogglePacked(index)}
            />
            <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
              {item.name}
            </span>
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingChecklist;
