'use client';
import react, { useState } from "react";


function Practice3(){
    const initialArray = ['i love cricket','i love movies','i love adventure'];
    const [checked, setChecked] = useState(Array(initialArray.length).fill(false));
    const [arr, setArr] = useState(initialArray);
    function handleDelete(index){
        setArr(arr.filter((item,i) => i !== index))
    }
    function handleChange(index){
       console.log(index);
         const newArr = [...checked];
        newArr[index] = !newArr[index];
        setChecked(newArr);
    }
    return <>
       <h1>list</h1>
       <ul>
        {arr.map((item,index) =>(
         <Item key={item.id} item={item} index={index} handleDelete={handleDelete} handleChange={handleChange} checked={checked}/>
        ))}
       </ul>
    </>
}

function Item({item, index, handleDelete,handleChange,checked}){
    return (
        <li key={index}>
        <input type="checkbox" name="items" onChange={()=> handleChange(index)}/>
        {item}
        {checked[index] && <button onClick={()=> handleDelete(index)}>Delete</button>}
        </li>
    );
}

export default Practice3;
