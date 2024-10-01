import React from 'react'
import immagine from "@/app/assets/background.jpg"
import Image from 'next/image'
function Progetti() {
  return (
    <div className='flex mt-10 justify-center h-screen'><Image src={ immagine } width="1600"  objectFit={'contain'}></Image></div>
  )
}

export default Progetti