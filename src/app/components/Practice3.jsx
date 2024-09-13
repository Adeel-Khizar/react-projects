'use client';
import React, { useState } from "react";


export default function Practice3(){
    const initialArray = [
        {
            "name":"Johnny Sin",
            "text":"You and Johnny Sin are even!"
        }
    ]
    const [item, setItems] = useState(initialArray);
    const [modal, setModal] = useState(false);
    const [text, setText] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(null);

    function openModal(){
       setModal(true);
    }
    function closeModal(){
       setModal(false);
       setText('');
    }
    function handleChange(event){
       setText(event.target.value)
    }
    function handleAddNew(){
        if(text.trim() !== ''){
         setItems([...item, {name: text, text: `You and ${text} are even!`}]);
         closeModal();
        }
    }
    function handleSelect(index){
        if (selectedIndex === index) {
            setSelectedIndex(null);
        } else {
            setSelectedIndex(index);
        }
    }
    return (
    <>
    <div className="flex align-center gap-8">
    <div>
    <div className="cards">
       {item.map((item,index)=>(
          <Card key={index} name={item.name} text={item.text} handleSelect={() => handleSelect(index)}  isSelected={selectedIndex === index} />
       ))}
     </div>
     <button className="p-2 bg-white text-black rounded" onClick={()=> openModal()}>Add Friend</button>
     {modal && <div className="bg-[#3b3b3b] p-3 my-2 max-w-md rounded">
         <label for="input">Friend Name:</label>
         <input className="w-full text-black h-10 rounded mb-2 p-2" id="input" type="text" value={text} onChange={(event)=> handleChange(event)}/>
         <button className="p-2 bg-white text-black rounded m-1 ml-0" onClick={()=> handleAddNew()}>Add</button>
         <button className="p-2 bg-white text-black rounded m-1"  onClick={()=> closeModal()}>Close</button>
     </div>}
      </div>
      {selectedIndex !== null && (<div className="bg-[#3b3b3b] p-3 max-w-md rounded w-full">
          <h2>SPLIT A BILL WITH {item[selectedIndex].name.toUpperCase()}</h2>
          <div className="w-full flex items-center justify-between">
            <label>💰Bill Value</label>
            <input type="number" className="p-2 bg-white text-black rounded m-1"/>
          </div>
          <div className="w-full flex items-center justify-between">
            <label>🕺Your Expense</label>
            <input type="number" className="p-2 bg-white text-black rounded m-1"/>
          </div>
          <div className="w-full flex items-center justify-between">
            <label>👯{item[selectedIndex].name.toUpperCase()}'s expense</label>
            <input type="number" className="p-2 bg-white text-black rounded m-1"/>
          </div>
          <div className="w-full flex items-center justify-between">
            <label>🤑Who is paying the bill?</label>
            <select name="payors" className="p-2 bg-white text-black rounded m-1">
                <option value="you" selected>You</option>
                <option value={item[selectedIndex].name.toUpperCase()}>{item[selectedIndex].name.toUpperCase()}</option>
            </select>
          </div>
          <button className="p-2 bg-white text-black rounded m-1">Split Bill</button>
      </div>)}
     </div>
    </>
    )
}

function Card({name,text,handleSelect,isSelected}){
    return (
        <div className="card max-w-md rounded">
            <div className="card_image">
            <img className="w-full" src="/adeel.jpeg" alt="Adeel Khizar"/>
            </div>
            <div className="general">
                <h1>{name}</h1>
                <p>{text}</p>
            </div>
            <button onClick={handleSelect}>{isSelected ? 'Close' : 'Select' }</button>
        </div>
    )
}