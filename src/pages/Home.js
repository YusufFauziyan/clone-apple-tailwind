import React, { useEffect, useState } from "react";

// image
import { Image1, Image1_2, Image6_3, Image6_4, Image18,  Image18_1,  Image18_2, Image19, Image19_1, Camera_1, Camera_2, Chip, Signal, Battery, FaceId, Image20, Image20_1, Image20_2, Image21, Image21_1, Image21_2, Magsafe, Magsafe_1, Magsafe_2, Airtag, Airtag_1, Airtag_2, Airpods, Airpods_1, Airpods_2, Privacy, Apps,} from '../components/Image';

import Footer from '../components/Footer'
import PhoneType from "../components/PhoneType"
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Home() {

    const [data, setData] = useState()

    const fetchData = async() => {
        const response = await axios.post("https://dev-scphonecmlcj.microgen.id/graphql" ,{
            query: `query{brands(where: {name:"IPhone"}){id name products{name}}}` 
        })
        setData(response.data.data.brands[0].products)
    }

    useEffect(() => {
        fetchData() 
    },[])

    return (
        <>
        <Navbar />
        <PhoneType data={data}/>
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

            <p className="w-full font-semibold tracking-tighter text-4xl text-center pt-16 pb-12 xl:text-5xl">Aksesori <br className="md:hidden"/> Unggulan</p>

            <div className="flex flex-col pt-9 bg-white h-[445px] md:container mx-auto relative xl:h-[530px]">
                <div className="w-60 text-center mx-auto md:ml-10 md:my-auto md:w-80 xl:ml-40 2xl:ml-72">
                    <p className="text-3xl font-semibold tracking-tighter pb-6 md:text-4xl xl:text-5xl">MagSafe</p>
                    <p className=" text-slate-600 md:text-lg pb-1 ">Langsung tempelkan ke dompet atau casing magnetik, atau keduanya. Dan dapatkan pengisian daya nirkabel yang lebih cepat.</p>
                    <img src={Magsafe} alt="" className="w-full mt-12 md:hidden" />
                </div>
                <img src={Magsafe_1} alt="" className="mt-12 hidden md:inline-block absolute right-5 bottom-0 xl:hidden" />
                <img src={Magsafe_2} alt="" className="mt-12 hidden xl:inline-block absolute right-5 bottom-0" />
            </div>

            <div className="flex flex-col pt-9 bg-white h-[510px] md:h-[375px] xl:h-[520px] mt-3 md:items-end md:container mx-auto relative overflow-hidden">
                <div className="w-60 text-center mx-auto md:mx-0 md:my-auto md:w-80 md:mr-10 xl:mr-32 2xl:mr-52">
                    <p className="text-3xl font-semibold tracking-tighter pb-4 md:text-4xl xl:text-5xl">AirTag</p>
                    <p className=" text-slate-600 md:text-lg xl:text-lg xl:font-semibold">Tempel satu di kunci Anda. Satu lagi di tas Anda. Jika barang hilang, cukup gunakan aplikasi Lacak.</p>
                    <a href="#" className='text-link hover:underline mt-2 inline-block xl:text-xl'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                </div>
                <img src={Airtag} alt="" className=" absolute bottom-0 md:hidden" />
                <img src={Airtag_1} alt="" className=" absolute hidden md:inline-block left-0 top-0 xl:hidden" />
                <img src={Airtag_2} alt="" className=" absolute hidden xl:inline-block left-0 top-0" />
            </div>

            <div className="flex flex-col pt-9 bg-white h-[400px] md:h-[450px] xl:h-[650px] mt-3 md:items-end md:container mx-auto overflow-hidden relative">
                <div className="w-60 text-center mx-auto md:mt-4 md:w-80">
                    <p className="text-3xl font-semibold tracking-tighter pb-4 md:text-4xl xl:text-5xl">AirPods</p>
                    <p className=" text-slate-600 md:text-lg xl:font-semibold xl:text-xl">Jelajahi semua model AirPods dan temukan yang terbaik untuk Anda.</p>
                    <a href="#" className='text-link hover:underline mt-2 inline-block xl:font-semibold xl:text-lg'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                </div>
                <img src={Airpods} alt="" className=" absolute bottom-0 left-1/2 right-1/2 -translate-x-60 md:hidden" />
                <img src={Airpods_1} alt="" className=" absolute bottom-0 md:inline-block hidden md:left-1/2 md:right-1/2 md:-translate-x-72 md:bottom-4 xl:hidden" />
                <img src={Airpods_2} alt="" className=" absolute bottom-0 xl:inline-block hidden xl:left-24 xl:bottom-4 2xl:left-56" />
            </div>

            <p className="w-full font-semibold tracking-tighter text-4xl text-center pt-16 pb-7 xl:text-5xl">Apa yang menjadikan <br />iPhone sebuah iPhone?</p>

            <div className="bg-white flex justify-center items-center flex-col text-center relative md:container mx-auto">
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
                <div className="flex flex-col pt-16 bg-white h-[430px] md:h-[380px] xl:h-[550px] 2xl:h-[650px] mt-3 md:container mx-auto relative overflow-hidden md:pt-8">
                    <div className="w-72 text-center mx-auto md:w-80 md:my-0 xl:w-96">
                        <p className="text-4xl font-semibold tracking-tighter pb-4 xl:text-5xl">Beralih ke iPhone<br/>begitu mudah.</p>
                        <a href="#" className='text-link hover:underline inline-block xl:text-lg'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                    </div>
                    <img src={Image21} alt="" className=" absolute bottom-0 md:hidden" />
                    <img src={Image21_1} alt="" className=" absolute bottom-0 md:inline-block hidden xl:hidden" />
                    <img src={Image21_2} alt="" className=" absolute bottom-0 xl:inline-block hidden xl:left-0 2xl:w-full" />
                </div>

                <div className="flex flex-col pt-16 bg-white h-[430px] mt-3 md:container mx-auto md:h-[380px] xl:h-[550px] 2xl:h-[650px] relative md:pt-0">
                    <div className="w-64 text-center mx-auto my-auto md:w-80 pt-20 md:pt-40">
                        <p className="text-4xl font-semibold tracking-tighter pb-4 xl:text-5xl">Privasi</p>
                        <p className=" text-slate-600 md:text-lg xl:text-xl">Anda yang menentukan apa yang Anda bagikan.</p>
                        <a href="#" className='text-link hover:underline inline-block xl:text-lg xl:mt-2'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                    </div>
                    <img src={Privacy} alt="" className=" absolute left-1/2 bottom-1/2 -translate-x-8 scale-125" />
                </div>
            </div>

            <p className="w-full font-semibold tracking-tighter text-4xl text-center pt-20 pb-9 xl:text-5xl">Dapatkan lebih dari <br /> iPhone Anda.</p>

            <div className="flex flex-col bg-white h-[510px] mt-3 container mx-auto relative md:flex-row md:justify-end md:items-center md:h-[380px]">
                    <div className="w-60 text-center mx-auto md:w-80 pt-10 md:mx-0 md:p-0 md:mr-6 xl:mr-40 2xl:mr-72">
                        <p className="text-4xl font-semibold text-slate-800 tracking-tighter md:text-5xl"><i class='bx bxl-apple text-4.5xl'></i>One</p>
                        <p className=" text-slate-600 font-semibold mt-4">Gabungkan hingga lima layanan Apple. Nikmati lebih banyak dengan harga lebih hemat.</p>
                        <div className="flex mt-4 justify-between md:justify-evenly">
                            <a href="#" className='text-link hover:underline inline-block md:font-semibold'>Coba gratis*<i class='bx bx-right-arrow-alt -rotate-45'></i></a>
                            <a href="#" className='text-link hover:underline inline-block md:font-semibold'>Selengkapnya<i class='bx bx-chevron-right relative top-0.5'></i></a>
                        </div>
                    </div>
                    <img src={Apps} alt="" className=" absolute bottom-10 left-1/2 right-1/2 -translate-x-40 md:left-20 md:right-0 md:translate-x-0 xl:left-40 2xl:left-60" />
            </div>

            {/* footer */}
            <Footer />

        
        </div>
        </>
  );
}