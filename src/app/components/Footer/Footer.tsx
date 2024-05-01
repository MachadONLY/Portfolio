import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='w-full my-20'>
        <div className='mx-auto max-w-[700px] w-[80%] border-t border-zinc-700 py-4'>
            <div className='flex justify-between items-center px-2 text-zinc-800'>
                <div className='flex'>
                 <p className='tracking-widest text-sm font-semibold'>2024 - @Gabriel Machado</p>
                </div>
                
                <ul className='flex gap-3 text-sm font-semibold'>
                    <Link href="/#about">
                        <li className='hover:underline ease-in duration-500'>Home </li>
                    </Link>
                    <Link href="/#project">
                        <li className='hover:underline ease-in duration-500'>Projects</li>
                    </Link>
                    <Link href="/#stacks">
                        <li className='hover:underline ease-in duration-500'>Stacks</li>
                    </Link>
                    <Link href="/#contact">
                        <li className='hover:underline ease-in duration-500'>Contact</li>
                    </Link>
                </ul>

            </div>
        </div>
    </div>
    </>
  )
}

export default Footer