'use client'
import React, { useState } from "react";

export default function Practice () {
    const buttonClass = {
        'rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 bg-slate-800':true
    };
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date("April 27, 2024");
    date.setDate(date.getDate() + count);

    const incStep = () =>{
        setStep(step + 1);
    }
    const decStep = () =>{
        setStep(step - 1);
    }
    const incCount = () =>{
        setCount(count + step);
    }
    const decCount = () =>{
        setCount(count - step);
    }
   return <>
     <h1>Practice 1</h1>
     <div>
        <button className={Object.keys(buttonClass).join(" ")} onClick={decStep}>-</button>
         Step:{step}
        <button className={Object.keys(buttonClass).join(" ")} onClick={incStep}>+</button>
     </div>
     <div>
     <button className={Object.keys(buttonClass).join(" ")} onClick={decCount}>-</button>
         Count:{count}
      <button className={Object.keys(buttonClass).join(" ")} onClick={incCount}>+</button>
     </div>
     <h1>😍 {count === 0 ? 'Today is ' : count > 0 ? `${count} days from today` :  `${Math.abs(count)} days ago was `} {date.toDateString()}</h1>
   </>
};