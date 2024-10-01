import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div className='flex justify-between m-5'>
        <p className='text-3xl font-bold'>Logo</p>
        <ol className='flex gap-8 text-2xl'>
            <li className='hover:scale-110 duration-110'><Link href="/">Home</Link></li>
            <li className='hover:scale-110 duration-110'><Link href="/About">About</Link></li>
        </ol>
    </div>
  )
}

export default Header