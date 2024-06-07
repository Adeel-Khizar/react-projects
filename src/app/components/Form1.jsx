'use client'
import React, { useState } from "react";

export default function Form1 () {
    const message = [
        'hello 1',
        'hello 2',
        'hello 3'
    ]
    const [count,setCount] = useState(1);
    const decrement = () =>{
      if(count > 1)
        setCount(count - 1);
    }
    const increment = () =>{
      if(count < 3)
        setCount(count + 1);
    }
    return (
      <div className="max-w-96">
        <h1>Welcome to Step Forms</h1>
        <div className="flex justify-between buttons">
            <span style={{ backgroundColor: `${count > 0 ?'#c2ffbe':'#cbd5e1'}` }}>1</span>
            <span style={{ backgroundColor: `${count > 1 ?'#c1c0ed':'#cbd5e1'}` }}>2</span>
            <span style={{ backgroundColor: `${count > 2 ?'#f5deb3':'#cbd5e1'}` }}>3</span>
        </div>
        <div className="text-center p-20">{message[count - 1]}</div>
        <div className="flex justify-between buttons">
           <button className="rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 bg-slate-800" onClick={decrement}>Previous</button>
           <button className="rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 bg-slate-800" onClick={increment}>Next</button>
        </div>
      </div>
    );
  };
