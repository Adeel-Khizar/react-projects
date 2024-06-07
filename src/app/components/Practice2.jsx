'use client';
import React, { useState } from "react";

export default function Practice2 () {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  const handleChange = (e) => {
    console.log(e.target.value);
    setSteps(parseInt(e.target.value));
  }
  const decrement = () => {
    if(count === 0) return;
    setCount(count - steps)
  }
  const increment = () => {
    setCount(count + steps)
  }
  const reset = () => {
    setCount(0);
    setSteps(1);
  }

   return <>
     <h1>Step: {steps}</h1>
     <input type="range" value={steps} name="steps" min="0" max="10" onChange={handleChange}/>
     <div className="py-3">
        <button className="rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 bg-slate-800" onClick={decrement}>-</button>
        <input type="text" value={count} />
        <button className="rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 bg-slate-800" onClick={increment}>+</button>
     </div>
     <div className="py-3">😍 {count === 0 ? 'Today is ' : count > 0 ? `${count} days from today ` :  `${Math.abs(count)} days ago was `} {date.toDateString()}</div>
     {count !== 0 ?(<button className="rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 bg-slate-800" onClick={reset}>Reset</button>):null}
     </>
}