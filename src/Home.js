import React, { useState } from 'react';
import PackingChecklist from './packingchecklist';

function Home() {
  const [newItem, setNewItem] = useState('');

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <div>
      
      <PackingChecklist />
    </div>
  );
}

export default Home;
