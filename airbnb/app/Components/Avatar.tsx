"use client";
import React from 'react'
import Image from 'next/image';
const Avatar = () => {
  return (
    <Image
    className="rounded-full"
    alt="memo"
    height={30}
    width={30}
    src='/placeholder.jpg'
    />
  )
}

export default Avatar