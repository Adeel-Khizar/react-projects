'use client';
import React from "react";

export default function Item({item,index,handleDelete,handleChange,checked}){
    return (
       <li key={index}>
           <input className="mx-2" type="checkbox" name="items" onChange={() => handleChange(index)} checked={checked[index]}/>
           {item}
           {checked[index] && <button className="mx-2" onClick={()=> handleDelete(index)}>Delete</button>}
       </li>
    )
  }