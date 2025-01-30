
'use client';

import { useState } from "react";

export default function Home() {

  const skill = [
    {
      "skill":"Shopify",
      "level":"advanced",
      "color":"#c2ffbe"
    },
    {
      "skill":"React",
      "level":"beginner",
      "color":"#c1c0ed"
    },
    {
      "skill":"JavaScript",
      "level":"intermediate",
      "color":"#f5deb3"
    }
  ];

  const [isOpen, setIsIOpen] = useState(false);

  function toggleContent(){
    console.log('clicked');
    setIsIOpen(!isOpen);
  }


  return (
      <li className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white">
       <button className="absolute top-0 right-0 w-7 h-7 bg-gray-600 rounded-full text-white" onClick={toggleContent}>
        {isOpen ? '-' : '+'}
       </button>
        <img className="w-full" src="/adeel.jpeg" alt="Adeel khizar"/>
        {isOpen && <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-black">Adeel khizar</div>
          <p className="text-gray-700 text-base">
            Adeel is Shopify developer with 3 and half year of experience on node agency.
          </p>
        <div className="py-2">
          {skill.map((skill,index)=>{
              return <span key={index} className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" style={{backgroundColor:skill.color}}>
                {skill.skill} {skill.level == 'advanced' ? '💪' : skill.level == 'intermediate' ? '👊' : '👍'}</span>
          })}
        </div>
        </div>}
      </li>
  );
}
