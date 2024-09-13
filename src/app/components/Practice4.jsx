'use client';
import React, {useState} from "react";
import Item from "./Item";


export default function Practice4(){
   const initialArray = ['i love cricket','i love movies','i love adventure'];
   const [arr, setArr] = useState(initialArray);
   const [checked, setChecked] = useState(Array(initialArray.length).fill(false));
   function handleDelete(index){
      setArr(arr.filter((item,i) => i !== index));
      setChecked(checked.filter((_,i) => i !== index));
   }
   function handleChange(index){
      const newArr = [...checked];
      newArr[index] = !newArr[index];
      setChecked(newArr);
   }
   return (
   <>
     <h2>List</h2>
     <ul>
        {arr.map((item, index)=>(
            <Item key={index} item={item} index={index} handleDelete={handleDelete} handleChange={handleChange} checked={checked}/>
        ))}
     </ul>
   </>
   )
}