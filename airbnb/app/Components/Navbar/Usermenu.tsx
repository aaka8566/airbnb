"use client";
import React from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import Avatar from '../Avatar';
const Usermenu = () => {


    
  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
<div onClick={()=>{}}
className="hidden
md:block 
text-sm
font-semibold
py-3
px-4
rounded-full
hover:bg-neutral-100
transition
cursor-pointer
"
>
Airbnb your home
</div>
<div className="
p-4
md:px-2
md:py-1
border-[1px]
border-nuetral-200
flex
flex-row
items-center
gap-3
rounded-full
cursor-pointer
hover:shadow-md
transition
">
<AiOutlineMenu/>
<Avatar/>
</div>
        </div>
    </div>
  )
}

export default Usermenu