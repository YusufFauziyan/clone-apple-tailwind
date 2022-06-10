import React from 'react'
import Image1 from '../assets/image1.png'
import Image1_2 from '../assets/image1-1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image3_1 from '../assets/image3-1.png'
import Image3_2 from '../assets/image3-2.png'
import Image4 from '../assets/image4.png'
import Image5 from '../assets/image5.png'
import Image5_1 from '../assets/image5-1.png'
import Image6 from '../assets/image6.png'
import Image6_1 from '../assets/image6-1.png'
import Image6_2 from '../assets/image6-2.png'
import Image7 from '../assets/image7.png'
import Image7_1 from '../assets/image7-1.png'
import Image8 from '../assets/image8.png'
import Image9 from '../assets/image9.png'
import Image9_2 from '../assets/image9-2.png'
import Image9_1 from '../assets/image9-1.png'

export default function Content () {
    return(
        <>
            <div className=" w-full mx-auto">
                <div className="pt-20 md:pt-24 flex flex-col items-center w-full text-center bg-slate-50">
                    <h1 className='font-semibold text-4xl text-slate-900 tracking-tight md:text-6xl md:tracking-tighter xl:text-7xl'>iPhone 13 Pro</h1>
                    <p className='text-lg text-slate-600 md:text-2xl md:tracking-tight xl:text-slate-700'>Ponsel.Paling.Pro.</p>
                    <div className='mt-2 flex justify-center items-center'>
                        <a href="#" className='text-sky-500 mr-4 hover:underline md:text-lg md:text-sky-600 xl:text-xl'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                        <a href="#" className='text-sky-500 hover:underline md:text-lg md:text-sky-600 xl:text-xl'>Beli<i class='bx bx-chevron-right relative top-0.5'></i></a>
                    </div>
                    <div className='mt-1'>
                        <img src={Image1} alt="iphone13" className='md:hidden'/>
                        <img src={Image1_2} alt="iphone13" className='hidden md:inline'/>
                    </div>
                </div>

                <div className="md:pt-16 pt-8 flex flex-col items-center w-full text-center bg-slate-50 mt-3 overflow-hidden">
                    <p className='font-medium font-inter -mb-1 md:text-xl'>Baru</p>
                    <h1 className='font-semibold text-4xl text-slate-900 tracking-tight items-center flex md:text-6xl md:tracking-tighter xl:text-7xl'>iPhone<span className='text-base border-2 border-slate-900 rounded-lg px-1 font-bold tracking-normal text-center ml-1 mt-2 md:text-3xl md:px-0.5 md:rounded-xl md:border-4 md:ml-3 md:font-semibold'>SE</span></h1>
                    <p className='text-lg text-slate-700 md:text-2xl md:tracking-tight xl:3xl'>Kemampuan hebat yang bersahabat</p>
                    <div className='mt-2 flex justify-center items-center'>
                        <a href="#" className='text-sky-500 mr-4 hover:underline md:text-lg md:text-sky-600 xl:text-xl'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                        <a href="#" className='text-sky-500 hover:underline md:text-lg md:text-sky-600 xl:text-xl'>Beli<i class='bx bx-chevron-right relative top-0.5'></i></a>
                    </div>
                    <div className='mt-14 mb-20 relative -right-28 sm:right-0 md:mt-8'>
                        <img src={Image2} alt="iphone13"/>
                    </div>
                </div>

                <div className="md:pt-16 pt-9 flex flex-col items-center w-full text-center bg-black mt-2 xl:flex xl:flex-row xl:justify-evenly xl:pt-8">
                    <div className=''>
                        <h1 className='font-semibold text-3xl text-slate-50 tracking-tight items-center md:text-6xl md:tracking-tighter md:font-normal xl:text-7xl'>iPad<span className='font-lobster italic font-normal text-4xl tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-indigo-800 to-pink-300 md:text-6xl xl:text-7xl'> air</span></h1>
                        <p className='text-xl text-slate-50 md:text-2xl md:tracking-tight xl:text-3xl'>Ringan.Berwarna.Bertenaga</p>
                        <div className='mt-2 flex justify-center items-center'>
                            <a href="#" className='text-sky-500 mr-4 hover:underline md:text-lg md:text-sky-600 xl:text-xl'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                            <a href="#" className='text-sky-500 hover:underline md:text-lg md:text-sky-600 xl:text-xl'>Beli<i class='bx bx-chevron-right relative top-0.5'></i></a>
                        </div>
                    </div>
                    <div className='mt-4 mb-6 md:mb-3 xl:mt-0 xl:mb-0'>
                        <img src={Image3} alt="iphone13" className='md:hidden'/>
                        <img src={Image3_1} alt="iphone13" className='hidden md:inline xl:hidden'/>
                        <img src={Image3_2} alt="iphone13" className='hidden xl:inline'/>
                    </div>
                </div>

                <div className='md:flex md:gap-2 md:pl-6 xl:px-6'>
                    <div className="flex flex-col text-center bg-black mt-3 md:w-1/2 xl:justify-end">
                        <div style={{backgroundImage: `url(${Image4})`}} className='h-72 w-full bg-no-repeat bg-center bg-cover md:hidden' />
                        <div className='md:h-72 md:w-full' />
                        <h1 className='font-semibold mt-2 text-3xl text-cyan-100 tracking-tight items-center flex justify-center'><i class='bx bxl-apple text-4xl xl:text-6xl'></i>WWDC22</h1>
                        <p className='text-lg leading-5 text-cyan-100 mt-0.5 xl:text-xl'>
                        Worldwide Dvelopers <br/>
                        Conference segera hadir. <br className='xl:hidden'/>
                        Gabung bersama kami <br/>
                        secara online 7-11 Juni.
                        </p>
                        <div className='mt-4 mb-10 flex justify-center items-center md:mb-6'>
                            <a href="#" className='text-sky-500 mr-4 hover:underline text-lg'>Selengkapnya<i class='bx bx-right-arrow-alt -rotate-45' ></i></a>
                        </div>
                    </div>

                    <div className="pt-9 flex flex-col items-center w-full text-center bg-slate-50 mt-3 overflow-hidden md:w-1/2">
                        <h1 className='font-bold text-3xl text-slate-900 tracking-tight items-center flex xl:mt-8'><i class='bx bxl-apple' ></i>WATCH</h1>
                        <p className='text-sm font-bold tracking-wide'>SERIES 7</p>
                        <p className='text-xl text-slate-600 tracking-tight'>Layar terluas kami yang pernah ada.</p>
                        <div className='mt-2 flex justify-center items-center md:mt-1 xl:mb-4'>
                            <a href="#" className='text-sky-500 mr-4 hover:underline text-lg tracking-tight'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                            <a href="#" className='text-sky-500 hover:underline text-lg tracking-tight'>Beli<i class='bx bx-chevron-right relative top-0.5'></i></a>
                        </div>
                        <div className='mt-2 mb-3 md:mb-0'>
                            <img src={Image5} alt="iphone13" className='xl:hidden'/>
                            <img src={Image5_1} alt="iphone13" className='hidden xl:inline-block'/>
                        </div>
                    </div>
                </div>
                
                <div className="md:flex md:gap-2 md:pl-6 xl:px-6">
                    <div className="pt-8 flex flex-col items-center w-full text-center bg-slate-50 mt-2">
                        <h1 className='font-semibold text-4xl text-slate-900 tracking-tighter'>iPhone 13</h1>
                        <p className='text-xl tracking-tight text-slate-600 mt-0.5'>Kekuatan super baru di tangan Anda.</p>
                        <div className='mt-2 flex justify-center items-center md:mt-1'>
                            <a href="#" className='text-sky-500 mr-4 text-lg hover:underline tracking-tight'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                            <a href="#" className='text-sky-500 hover:underline text-lg tracking-tight'>Beli<i class='bx bx-chevron-right relative top-0.5'></i></a>
                        </div>
                        <div style={{backgroundImage: `url(${Image6})`}} className='h-80 w-full bg-no-repeat bg-center bg-cover mt-10 xl:hidden' />
                        <div style={{backgroundImage: `url(${Image6_1})`}} className='h-full w-full bg-no-repeat bg-top mt-10 hidden xl:inline-block 2xl:hidden' />
                        <div style={{backgroundImage: `url(${Image6_2})`}} className='h-full w-full bg-no-repeat bg-top mt-10 hidden 2xl:inline-block' />
                    </div>

                    <div className="pt-8 flex flex-col items-center w-full text-center bg-slate-50 mt-3">
                        <h1 className='font-semibold text-4xl text-slate-900 tracking-tighter'>Studio Display</h1>
                        <p className='text-xl tracking-tight text-slate-600 mt-0.5'>Tampilan indah yang berani.</p>
                        <div className='mt-2 flex justify-center items-center md:mt-1'>
                            <a href="#" className='text-sky-500 mr-4 text-lg hover:underline tracking-tight'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                            <a href="#" className='text-sky-500 hover:underline text-lg tracking-tight'>Beli<i class='bx bx-chevron-right relative top-0.5'></i></a>
                        </div>
                        <div className='mt-20 mb-11 xl:mt-14'>
                            <img src={Image7} alt="iphone13" className='xl:hidden'/>
                            <img src={Image7_1} alt="iphone13" className='xl:inline-block hidden'/>
                        </div>
                    </div>
                </div>

                <div className='md:flex md:gap-2 md:pl-6 xl:px-6'>
                    <div className="pt-10 flex flex-col items-center w-full text-center bg-slate-50 mt-3 relative bg-center md:w-1/2" style={{backgroundImage: `url(${Image8})`}}>
                        <h1 className='font-semibold text-4xl text-slate-900 tracking-tighter items-center flex justify-center xl:text-5xl xl:mt-5'><i class='bx bxl-apple text-4xl xl:text-5xl' ></i>Arcade</h1>
                        <p className='text-xl tracking-tight text-slate-600 mt-0.5 xl:text-2xl'>Mengundang semua pemain.</p>
                        <div className='mt-2 flex justify-center items-center'>
                            <a href="#" className='text-sky-500 mr-4 text-lg hover:underline tracking-tight xl:text-xl'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                            <a href="#" className='text-sky-500 hover:underline text-lg tracking-tight xl:text-xl'>Coba gratis*<i class='bx bx-right-arrow-alt -rotate-45'></i></a>
                        </div>
                        <div className='h-80 mt-9 xl:mt-20' />
                    </div>

                    <div className="flex flex-col text-center bg-black mt-3 md:w-1/2">
                        <div className="h-72 bg-center bg-contain bg-no-repeat md:hidden" style={{backgroundImage: `url(${Image9})`}}/>
                        <div className="h-72 bg-top bg-contain bg-no-repeat hidden md:inline-block xl:hidden" style={{backgroundImage: `url(${Image9})`}}/>
                        <div className="h-full w-full bg-top bg-no-repeat hidden xl:inline-block bg-contain 2xl:hidden" style={{backgroundImage: `url(${Image9_2})`}}/>
                        <div className="h-full w-full bg-top bg-no-repeat hidden 2xl:inline-block bg-contain" style={{backgroundImage: `url(${Image9_1})`}}/>
                        <p className='text-lg leading-5 text-slate-100 mt-0.5 md:mt-16 xl:mt-0 2xl:text-xl'>
                        Dapatkan Apple TV+ Selama tiga <br/>
                        Bulan gratis saat Anda membeli <br/>
                        Perangkat Apple.
                        </p>
                        <div className='mt-4 mb-10 flex justify-center items-center xl:mb-1 2xl:mb-12'>
                            <a href="#" className=' mr-4 text-lg hover:underline tracking-tight text-white'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                            <a href="#" className='text-white hover:underline text-lg tracking-tight'>Coba Gratis<i class='bx bx-right-arrow-alt -rotate-45'></i></a>
                        </div>
                    </div>
                </div>
                
                {/* footer */}
                <div className="mx-auto p-4 bg-slate-50 mt-4 text-xs text-slate-500 md:text-sm md:px-6 xl:px-20 2xl:px-60">
                    <p>*Rp 69.000/bulan setelah percobaan gratis. Satu paket langganan untuk tiap grup Keluarga Berbagi. Penawaran berlaku selama 3 bulan setelah aktivasi perangkat yang memenuhi syarat. Paket diperbarui otomatis, kecuali dibatalkan. Pembatasan dan syarat lainnya berlaku.</p>
                    <p className='mt-4'>Rp 69.000/bulan setelah percobaan gratis. Hanya satu penawaran per ID Apple dan hanya satu penawaran per keluarga jika Anda tergabung dalam grup Keluarga Berbagi, terlepas dari jumlah perangkat yang dibeli oleh Anda atau keluarga Anda. Penaw\id\iphone-13-pro\aran ini tidak tersedia jika Anda atau Keluarga Anda sudah pernah menerima penawaran Apple TV+ selama satu tahun gratis. Penawaran berlaku selama 3 bulan setelah aktivasi perangkat yang memenuhi syarat. Paket diperbarui otomatis, kecuali dibatalkan. Pembatasan dan syarat lainnya berlaku.</p>
                    <hr className='w-full border-x-2 my-4 mx-auto'/>
                    <div className="flex border-b-2 pb-2 justify-between hover:text-slate-800">
                        <a href="#">Belanja dan Belajar</a>
                        <i class='bx bx-plus'></i>
                    </div>
                    <div className="flex border-b-2 py-2 justify-between hover:text-slate-800">
                        <a href="#">layanan</a>
                        <i class='bx bx-plus'></i>
                    </div>
                    <div className="flex border-b-2 py-2 justify-between hover:text-slate-800">
                        <a href="#">Akun</a>
                        <i class='bx bx-plus'></i>
                    </div>
                    <div className="flex border-b-2 py-2 justify-between hover:text-slate-800">
                        <a href="#">Untuk Bisnis</a>
                        <i class='bx bx-plus'></i>
                    </div>
                    <div className="flex border-b-2 py-2 justify-between hover:text-slate-800">
                        <a href="#">Untuk Pendidikan</a>
                        <i class='bx bx-plus'></i>
                    </div>
                    <div className="flex border-b-2 py-2 justify-between hover:text-slate-800">
                        <a href="#">Nila-nilai Apple</a>
                        <i class='bx bx-plus'></i>
                    </div>
                    <div className="my-4">
                        <a href="#" className='text-sky-500 hover:underline'>Temukan retailer </a>
                        <p className='inline-block'>di dekat Anda.</p>
                    </div>
                    <a href='' className='hover:underline font-semibold mb-4 block'>Indonesia</a>
                    <p>Hak cipta <i class='bx bx-map'></i> 2022 Apple Inc. Seluruh hak cipta dilindungi undang-undang.</p>
                    <div className='flex mt-2 font-semibold mb-4'>
                        <a href="#" className='hover:underline pr-2 border-r-2'>Kebijakan Privasi</a>
                        <a href="#" className='hover:underline px-2 border-r-2'>Ketentuan penggunaan</a>
                        <a href="#" className='hover:underline px-2 border-r-2'>Legal</a>
                        <a href="#" className=' hover:underline pl-2'>Peta Situs</a>
                    </div>
                </div>

            </div>
        </>
    )
}