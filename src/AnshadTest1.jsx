import React, { useState } from 'react';

export default function AnshadTest1() {
  const [val, setVal] = useState("");  // Store input value
  const [items, setItems] = useState([]); // Store list of items

  const addValues = () => {
    if (val.trim() !== "") {
      setItems([...items, val]); // Add input value to the array
      setVal(""); // Clear input field
    }
  };

  const handleDelete=(rindex)=>{
    setItems(items.filter((_,index)=>index!==rindex))
  }

  return (
    <div>
      <center>Welcome to Assignment 1</center>
      <input
        value={val}
        placeholder='Type here'
        onChange={(e) => setVal(e.target.value)} // Update input value
      />
      <button onClick={addValues}>Add Items</button>
      
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <span>{item}</span>

            <button onClick={()=>handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
