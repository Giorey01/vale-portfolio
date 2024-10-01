import React from 'react'
import Image from 'next/image'
import immagine from "@/app/assets/background.jpg"

function Photocard() {
  return (
    <div className='relative border-2 border-black rounded-lg hover:opacity-75 duration-300 group'>
      <Image src={immagine} width={800} height={800} className='rounded-md' />
      <p className='absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        CIAO
      </p>
    </div>
  )
}

export default Photocard
