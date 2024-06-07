'use client';
import React, {useState} from 'react';


function TripList() {
    const [text, setText] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [items, setItems] = useState([]);

    function handleText(e) {
        setText(e.target.value)
    }
    function handleSelect(e) {
        setQuantity(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log('form submitted');

        if(text === '') return;
        const newItem = {text, quantity, packed:false, id: Date.now()}
        console.log(newItem);
        setItems([...items, newItem]);
        setText('');
        setQuantity(1);
    }
  return (
    <div>
    <div className='flex items-center justify-between max-w-screen-md'>
      <h1>What do you need for trip?</h1>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <select className="px-3 py-2 rounded-full" value={quantity} onChange={handleSelect}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <input className="px-3 py-2 rounded-full" type="text" placeholder="Item.." value={text} onChange={handleText}/>
        <button type="submit" className="px-3 py-2 rounded-full bg-cyan-500 text-white">Add</button>
      </form>
    </div>
    <div className='flex items-center justify-between max-w-screen-md'>
    <ul>
        {items.map(item => (
            <Item key={item.id} item={item}/>
        ))}
    </ul>
    </div>
    </div>
  );
}

function Item({item}) {
    const [packed, setPacked] = useState(false);
    function packedItem() {
        setPacked(!packed);
        console.log('packed item:',item.packed);
    }
    return (
        <li className="flex items-center justify-between gap-4" style={{ textDecoration: packed === true ? 'line-through' : 'none' }} >
            <span>{item.quantity}</span>
            <span>{item.text}</span>
            <button onClick={packedItem}>❌</button>
        </li>
    )
}

export default TripList;