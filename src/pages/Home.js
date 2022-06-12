import React from "react";
import Image1 from '../assets/image1.png'
import Image1_2 from '../assets/image1-2.png'
import Image6_3 from '../assets/image6-3.png'
import Image6_4 from '../assets/image6-4.png'
import Image18 from '../assets/image-18.png'
import Image18_1 from '../assets/image-18-1.png'
import Image18_2 from '../assets/image-18-2.png'
import Image19 from '../assets/image-19.png'
import Image19_1 from '../assets/image-19-1.png'
import Camera_1 from '../assets/kamera-1.png'
import Camera_2 from '../assets/kamera-2.png'
import Chip from '../assets/processor-1.png'
import Signal from '../assets/signal.png'
import Battery from '../assets/battery.png'
import FaceId from '../assets/faceId.png'
import Image20 from '../assets/image-20.png'
import Image20_1 from '../assets/image-20-1.png'
import Image20_2 from '../assets/image-20-2.png'


export default function Navbar() {

  return (
    <>
      <div className="bg-[#F2F2F2] ">
        <div className="h-[675px] md:h-[580px] flex flex-col justify-end items-center xl:h-[878px] bg-white">
            <p className="font-semibold text-lg tracking-tighter md:text-xl xl:text-3xl">iPhone 13 Pro</p>
            <p className="text-4.5xl leading-tight  font-semibold tracking-tighter md:text-5xl  md:leading-snug xl:text-6xl xl:leading-normal">Ponsel. Paling. Pro.</p>
            <div className="">
                <button className="my-3 text-white font-medium bg-[#0077ED] rounded-full py-2 px-4 hover:bg-opacity-95 tracking-wide xl:mr-10 block mx-auto xl:inline-block">Beli</button>
                <a href="#" className='text-link hover:underline text-lg xl:text-xl xl:font-semibold xl:font-inter'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
            </div>
            <div className="text-center">
                <img src={Image1} alt="iphone" className="md:hidden" />
                <img src={Image1_2} alt="iphone" className="hidden md:inline-block md:w-[50%] xl:w-full"/>
            </div>
        </div>

        <div className="h-[575px] md:h-[603px] flex flex-col justify-end items-center xl:h-[763px] bg-white mt-3">
            <p className="font-semibold text-lg tracking-tighter md:text-xl xl:text-2xl">iPhone 13</p>
            <p className="text-4.5xl font-semibold tracking-tighter md:text-5xl leading-tight text-center md:-leading-4 xl:text-5xl xl:tracking-tight">Kekuatan super baru <br className='hidden xl:inline'/> di <br className='xl:hidden'/>tangan Anda.</p>
            <div className="">
                <button className="my-3 text-white font-medium bg-[#0077ED] rounded-full py-2 px-4 hover:bg-opacity-95 tracking-wide md:my-6 xl:mr-10 block mx-auto xl:inline-block">Beli</button>
                <a href="#" className='text-link hover:underline text-lg xl:text-xl xl:font-semibold xl:font-inter'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
            </div>
            <div className="text-center mt-9 md:mt-4">
                <img src={Image6_3} alt="iphone" className="xl:hidden" />
                <img src={Image6_4} alt="iphone" className="hidden xl:inline-block" />
            </div>
        </div>

        <div className="h-[783px] flex flex-col justify-end items-center bg-white xl:bg-[#FBFBFD] mt-3 md:h-[810px] xl:flex-row xl:justify-between xl:w-full xl:h-[820px]">
            <div className="text-center xl:w-full">
                <p className="text-sm text-orange-700">Baru</p>
                <p className="font-semibold text-lg tracking-tighter md:text-xl xl:text-2xl">iPhone <span className='text-xs border border-slate-900 rounded-md px-0.5 font-semibold tracking-tight text-center mt-2'>SE</span></p>
                <p className="text-4.5xl text-[#375FD9] font-semibold tracking-tighter md:text-5xl leading-tight text-center md:-leading-4 xl:text-5xl xl:tracking-tight">Kemampuan hebat <br className=''/>yang bersahabat.</p>
                <div className="">
                    <button className="my-3 text-white font-medium bg-[#0077ED] rounded-full py-2 px-4 hover:bg-opacity-95 tracking-wide md:my-6 xl:mr-10 block mx-auto xl:inline-block">Beli</button>
                    <a href="#" className='text-link hover:underline text-lg xl:text-xl xl:font-semibold xl:font-inter'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                </div>
            </div>
            
            <img src={Image18_2} alt="iphone" className="h-full hidden xl:inline-block"/>
            <div className="text-center mt-9  h-[470px] w-full xl:hidden">
                <img src={Image18_1} alt="iphone" className="h-full w-full md:hidden"/>
                <img src={Image18} alt="iphone" className="h-full w-full hidden md:inline-block xl:hidden"/>
                <img src={Image18_2} alt="iphone" className="h-full w-full hidden xl:inline-block"/>
            </div>
        </div>

        <div className="bg-white pt-16">
            <p className="text-4xl font-semibold tracking-tighter md:text-5xl -leading-4 text-center md:-leading-4 xl:text-5xl xl:tracking-tight">iPhone mana yang <br className=''/>tepat untuk Anda?</p>
            {/* Phone Spec */}
            <div className="text-center mt-8 w-full flex justify-evenly items-center md:justify-center">
                {/* card phone */}
                <div className="flex flex-col md:mr-20">
                    <div className="mx-auto">
                        <img src={Image19} alt="iphone" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                    </div>
                    <div className="flex w-full justify-center my-8">
                        <div className="w-4 h-4 mr-2 rounded-full bg-[#576855] shadow-md"></div>
                        <div className="w-4 h-4 mr-2 rounded-full bg-[#F1F2ED] shadow-md"></div>
                        <div className="w-4 h-4 mr-2 rounded-full bg-[#FAE7CF] shadow-md"></div>
                        <div className="w-4 h-4 mr-2 rounded-full bg-[#54524F] shadow-md"></div>
                        <div className="w-4 h-4 rounded-full bg-[#A7C1D9] shadow-md"></div>
                    </div>
                    <div>
                        <p className="text-sm text-orange-700">Baru</p>
                        <p className="font-semibold text-2xl tracking-tighter">iPhone 13 Pro</p>
                        <p className="py-2 text-lg text-slate-500 tracking-tighter">iPhone paling <br className="" /> maksimal.</p>
                    </div>
                    <div className="border-b border-slate-400 pb-10">
                        <button className="mb-1 mt-2 text-sm text-white bg-[#0077ED] rounded-full py-0.5 px-3 hover:bg-opacity-95 tracking-wide block mx-auto ">Beli</button>
                        <a href="#" className='text-link hover:underline font-medium text-sm  font-inter'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                    </div>
                    <div className="pt-10 mx-auto h-[750px] border-b border-slate-400 flex flex-col items-center justify-around">
                        <div className="">
                            <p className="font-semibold text-lg font-inter">6,7" atau 6,1"</p>
                            <p className="text-slate-500 tracking-tighter">Layar OLED menyeluruh <br className="" />dengan ProMotion</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="mx-auto">
                                <img src={Camera_1} alt="" />
                            </div>
                            <p className="tracking-tighter leading-tight">Sistem kamera Pro</p>
                            <p className="text-slate-500 tracking-tighter leading-tight">Telefoto, Wide, Ultra Wide</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="mx-auto">
                                <img src={Chip} alt="" />
                            </div>
                            <p className="tracking-tighter leading-tight">Chip A15 Bionic</p>
                            <p className="text-slate-500 tracking-tighter leading-tight">GPU 5‑core</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="mx-auto">
                                <img src={Signal} alt="" />
                            </div>
                            <p className="tracking-tighter leading-tight text-slate-700">Seluler 5G super cepat</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="mx-auto">
                                <img src={Battery} alt="" />
                            </div>
                            <p className="tracking-tighter leading-tight text-slate-700">Pemutaran video hingga
                            <br />28 jam3</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="mx-auto">
                                <img src={FaceId} alt="" />
                            </div>
                            <p className="text-slate-700 tracking-tighter leading-tight">Face ID</p>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mx-auto mt-5">
                        <img src={Image19_1} alt="iphone" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                    </div>
                    <div className="flex w-full justify-center my-8">
                        <div className="w-4 h-4 mr-2 rounded-full bg-[#576855] shadow-md"></div>
                        <div className="w-4 h-4 mr-2 rounded-full bg-[#FADDD6] shadow-md"></div>
                        <div className="w-4 h-4 mr-2 rounded-full bg-[#276787] shadow-md"></div>
                        <div className="w-4 h-4 mr-2 rounded-full bg-[#BF0613] shadow-md"></div>
                        <div className="w-4 h-4 rounded-full bg-[#232A31] shadow-md"></div>
                    </div>
                    <div>
                        <p className="text-sm text-orange-700">Baru</p>
                        <p className="font-semibold text-2xl tracking-tighter">iPhone 13</p>
                        <p className="py-2 text-lg text-slate-500 tracking-tighter">iPhone penuh <br className="" /> tenaga.</p>
                    </div>
                    <div className="border-b border-slate-400 pb-10">
                        <button className="mb-1 mt-2 text-sm text-white bg-[#0077ED] rounded-full py-0.5 px-3 hover:bg-opacity-95 tracking-wide block mx-auto ">Beli</button>
                        <a href="#" className='text-link hover:underline font-medium text-sm  font-inter'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                    </div>
                    <div className="pt-10 mx-auto h-[750px] border-b border-slate-400 flex flex-col items-center justify-around">
                        <div className="">
                            <p className="font-semibold text-lg font-inter">6,1" atau 5,4"</p>
                            <p className="text-slate-500 tracking-tighter">Layar OLED menyeluruh <br className="" />&#160;</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="mx-auto">
                                <img src={Camera_2} alt="" />
                            </div>
                            <p className="tracking-tighter leading-tight">Sistem kamera ganda canggih</p>
                            <p className="text-slate-500 tracking-tighter leading-tight">Telefoto, Wide, Ultra Wide</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="mx-auto">
                                <img src={Chip} alt="" />
                            </div>
                            <p className="tracking-tighter leading-tight">Chip A15 Bionic</p>
                            <p className="text-slate-500 tracking-tighter leading-tight">GPU 5‑core</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="mx-auto">
                                <img src={Signal} alt="" />
                            </div>
                            <p className="tracking-tighter leading-tight text-slate-700">Seluler 5G super cepat</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="mx-auto">
                                <img src={Battery} alt="" />
                            </div>
                            <p className="tracking-tighter leading-tight text-slate-700">Pemutaran video hingga
                            <br />28 jam3</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="mx-auto">
                                <img src={FaceId} alt="" />
                            </div>
                            <p className="text-slate-700 tracking-tighter leading-tight">Face ID</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end card phone */}
            <a href="#" className='text-link hover:underline w-full my-10 inline-block text-center text-xl tracking-tighter'>Bandingkan semua model iPhone<i class='bx bx-chevron-right relative top-0.5'></i></a>
        </div>

        <p className="w-full font-semibold tracking-tighter text-4xl text-center pt-16 pb-12 xl:text-5xl">Aksesoris <br /> Unggulan</p>

        <div className="flex flex-col pt-9 bg-white h-[445px] container mx-auto">
            <div className="w-60 text-center mx-auto md:ml-10 md:my-auto md:w-80">
                <p className="text-3xl font-semibold tracking-tighter pb-6 md:text-4xl">MagSafe</p>
                <p className=" text-slate-600 md:text-lg">Langsung tempelkan ke dompet atau casing magnetik, atau keduanya. Dan dapatkan pengisian daya nirkabel yang lebih cepat.</p>
            </div>
        </div>

        <div className="flex flex-col pt-9 bg-white h-[580px] mt-3 md:items-end container mx-auto">
            <div className="w-60 text-center mx-auto md:mx-0 md:my-auto md:w-80 md:mr-10">
                <p className="text-3xl font-semibold tracking-tighter pb-4 md:text-4xl">AirTag</p>
                <p className=" text-slate-600 md:text-lg">Tempel satu di kunci Anda. Satu lagi di tas Anda. Jika barang hilang, cukup gunakan aplikasi Lacak.</p>
                <a href="#" className='text-link hover:underline mt-2 inline-block'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
            </div>
        </div>

        <div className="flex flex-col pt-9 bg-white h-[350px] md:h-[580px] mt-3 md:items-end container mx-auto">
            <div className="w-60 text-center mx-auto md:my-auto md:w-80">
                <p className="text-3xl font-semibold tracking-tighter pb-4 md:text-4xl">AirPods</p>
                <p className=" text-slate-600 md:text-lg">Jelajahi semua model AirPods dan temukan yang terbaik untuk Anda.</p>
                <a href="#" className='text-link hover:underline mt-2 inline-block'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
            </div>
        </div>

        <p className="w-full font-semibold tracking-tighter text-4xl text-center pt-16 pb-7 xl:text-5xl">Apa yang menjadikan <br />iPhone sebuah iPhone?</p>

        <div className="bg-white flex justify-center items-center flex-col text-center relative container mx-auto">
            <img src={Image20} alt="" className="bg-no-repeat bg-center bg-cover w-full h-full md:hidden"/>
            <img src={Image20_1} alt="" className="bg-no-repeat bg-center bg-cover w-full h-full hidden md:inline-block xl:hidden"/>
            <img src={Image20_2} alt="" className="bg-no-repeat bg-center bg-cover w-full h-full hidden xl:inline-block"/>
            <div className="flex justify-center items-center flex-col text-center w-full absolute h-full">
                <p className="font-semibold text-4xl md:text-5xl">iOS 15</p>
                <div className="pt-4 md:text-lg">
                    <p>Semakin terhubung.</p>
                    <p>Semakin fokus.</p>
                </div>
                <a href="#" className='text-link hover:underline mt-2 inline-block mb-8'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
            </div>
        </div>

        <div className="md:flex md:container md:mx-auto md:gap-3">
            <div className="flex flex-col pt-16 bg-white h-[450px] mt-3 container mx-auto">
                <div className="w-72 text-center mx-auto md:w-80 md:my-0 xl:w-96">
                    <p className="text-4xl font-semibold tracking-tighter pb-4 xl:text-5xl">Beralih ke iPhone<br/>begitu mudah.</p>
                    <a href="#" className='text-link hover:underline inline-block xl:text-lg'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                </div>
            </div>

            <div className="flex flex-col pt-16 bg-white h-[450px] mt-3 container mx-auto">
                <div className="w-64 text-center mx-auto my-auto md:w-80 pt-20 md:pt-40">
                    <p className="text-4xl font-semibold tracking-tighter pb-4 xl:text-5xl">Privasi</p>
                    <p className=" text-slate-600 md:text-lg xl:text-lg">Anda yang menentukan apa yang Anda bagikan.</p>
                    <a href="#" className='text-link hover:underline inline-block'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                </div>
            </div>
        </div>

        <p className="w-full font-semibold tracking-tighter text-4xl text-center pt-20 pb-9 xl:text-5xl">Dapatkan lebih dari <br /> iPhone Anda.</p>

        <div className="flex flex-col pt-16 bg-white h-[510px] mt-3 container mx-auto">
                <div className="w-64 text-center mx-auto my-auto md:w-80 pt-20 md:pt-40">
                    <p className="text-4xl font-semibold tracking-tighter pb-4 xl:text-5xl">Privasi</p>
                    <p className=" text-slate-600 md:text-lg xl:text-lg">Anda yang menentukan apa yang Anda bagikan.</p>
                    <a href="#" className='text-link hover:underline inline-block'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                </div>
        </div>

        <div className="flex flex-col pt-9 bg-white h-[950px] md:h-[580px] mt-4 md:items-end container mx-auto">
            <div className="w-60 text-center mx-auto md:my-auto md:w-80">
                <p className="text-3xl font-semibold tracking-tighter pb-4 md:text-4xl">AirPods</p>
                <p className=" text-slate-600 md:text-lg">Jelajahi semua model AirPods dan temukan yang terbaik untuk Anda.</p>
                <a href="#" className='text-link hover:underline mt-2 inline-block'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
            </div>
        </div>
       
      </div>
    </>
  );
}