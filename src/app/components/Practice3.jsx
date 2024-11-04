'use client';
import React, { useState } from "react";


export default function Practice3(){
    const initialArray = [
        {
            "id":"1223",
            "name":"Salman Khan",
            "text":"You and Salman Khan are even!"
        }
    ]
    const [item, setItems] = useState(initialArray);
    const [modal, setModal] = useState(false);
    const [text, setText] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [billValue, setBillValue] = useState('');
    const [yourExpense, setYourExpense] = useState('');
    const [friendExpense, setFriendExpense] = useState(0);
    const [payingInfo, setPayingInfo] = useState('you');

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
        if(selectedIndex === index){
            setSelectedIndex(null);
            
        }else{
            setSelectedIndex(index);
            setBillValue('');
            setYourExpense('');
            setFriendExpense('');
            setPayingInfo('you');
        }
        console.log(selectedIndex);
    }
    function getBillValue(event){
        setBillValue(Number(event.target.value));
    }
    function getYourExpense(event){
        setYourExpense(Number(event.target.value));
        setFriendExpense(billValue - Number(event.target.value))
    }
    function getFriendExpense(event){
        setFriendExpense(event.target.value)
    }
    function getPayingInfo(event){
        setPayingInfo(event.target.value)
    }
    function splitBill(index){
        if(payingInfo == 'you'){
            let friendOwnMe = yourExpense - friendExpense;
            console.log(yourExpense,friendExpense)
            setItems((items)=>{
                items[index].text =  `${item[index].name} own ${friendOwnMe} to me!`;
                return [...items];
            })
        }else{
            let youOwn = billValue - friendExpense;
            console.log(friendExpense)
            setItems((items)=>{
                items[index].text =  `You own ${youOwn} to ${item[index].name}!`;
                return [...items];
            })
        }
    }
    return (
    <>
    <div className="flex align-center gap-8">
    <div>
    <div className="cards">
       {item.map((item,index)=>(
          <Card key={item.id} name={item.name} text={item.text} handleSelect={() => handleSelect(index)} isSelected={selectedIndex === index}/>
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
            <label>💰 Bill Value</label>
            <input type="number" className="p-2 bg-white text-black rounded m-1" min="0" value={billValue} onChange={(event)=> getBillValue(event)}/>
          </div>
          <div className="w-full flex items-center justify-between">
            <label>🕺 Your Expense</label>
            <input type="number" className="p-2 bg-white text-black rounded m-1" min="0" value={yourExpense} onChange={(event)=> getYourExpense(event)}/>
          </div>
          <div className="w-full flex items-center justify-between">
            <label>👯 {item[selectedIndex].name}'s expense</label>
            <input type="number" className="p-2 bg-white text-black rounded m-1" min="0" value={billValue - yourExpense} onChange={(event)=> getFriendExpense(event)}/>
          </div>
          <div className="w-full flex items-center justify-between">
            <label>🤑 Who is paying the bill?</label>
            <select name="payors" className="p-2 bg-white text-black rounded m-1" onChange={(event) => getPayingInfo(event)}>
                <option value="you">You</option>
                <option value={item[selectedIndex].name}>{item[selectedIndex].name}</option>
            </select>
          </div>
          <button className="p-2 bg-white text-black rounded m-1" onClick={() => splitBill(selectedIndex)}>Split Bill</button>
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
            <button onClick={handleSelect}>{isSelected ? 'Close' : 'Select'}</button>
        </div>
    )
}