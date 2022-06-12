import React from 'react'
import Navbar from '../components/Navbar'

// image
import {Detail1} from '../components/Image' 

export default function Detail () {
    return(
        <>
            <Navbar/>
            <div className='h-[2000px]'>
                <div className='flex px-4 py-2.5 border-b border-slate-200 items-center justify-between w-full bg-white opacity-80 xl:container md:mx-auto xl:px-40 2xl:px-72'>
                    <a href='#' className="text-xl tracking-tighter font-semibold text-slate-800">iPhone SE</a>
                    <div className='flex items-center'>
                        <i class='bx bx-chevron-down text-4xl opacity-70 hover:opacity-90 cursor-pointer' ></i>
                        <div className='ml-2'>
                            <button   button className=" text-white bg-[#0077ED] rounded-full px-3 py-1 hover:bg-opacity-95 tracking-wide text-xs">Beli</button>
                        </div>
                    </div>
                </div>
                <div className=' mx-auto text-center bg-[#FBFBFD]'>
                    <img src={Detail1} alt='iphone SE' className='inline-block' />
                </div>

                <div className='flex h-[530px] justify-evenly flex-col items-center text-center'>
                    <p className="font-semibold text-xl tracking-tighter">iPhone <span className='text-xs border-2 border-slate-900 rounded-md px-0.5 font-bold tracking-tight text-center mt-2'>SE</span></p>
                    <p className='text-5xl font-semibold text-[#1A3EA8]'>Kemampuan hebat <br />yang bersahabat.</p>
                    <p className='text-xl font-semibold text-[#1A3EA8]'>Kemampuan hebat <br />yang bersahabat.</p>
                    <a href="#" className='text-[#0066CC] hover:underline text-lg font-inter font-semibold'>Tonton acara<i class='bx bx-chevron-right relative top-0.5'></i></a>
                </div>
            </div>
        </>
    )
}