import React from "react";
import Image11 from '../assets/image11.png'
import Image12 from '../assets/image12.png'
import Image13 from '../assets/image13.png'
import Image14 from '../assets/image14.png'
import Image15 from '../assets/image15.png'
import Image16 from '../assets/image16.png'
import Image17 from '../assets/image17.png'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function PhoneType() {

  const [left, setLeft] = React.useState(false)
  const [right, seRight] = React.useState(true)

  // slider
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
    setLeft(false)
    seRight(true)
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
    setLeft(true)
    seRight(false)
  };


  return (
    <>
        <div className="relative flex items-center">
            <div id="slider" className="w-full overflow-x-hidden scroll whitespace-nowrap scroll-smooth bg-[#FBFBFD] h-30  md:flex md:justify-evenly md:px-8 md:items-center xl:container md:mx-auto xl:px-32 2xl:px-64">
                <MdChevronLeft className={`first-letter:opacity-50 cursor-pointer hover:opacity-100 top-1/3 z-10 md:hidden ${left ? "absolute" : "hidden"} `} onClick={slideLeft} size={20} />

                <a href="#" className="inline-block text-center py-2 px-4">
                    <img src={Image11} alt="" className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"/>
                    <p className="text-sm text-p mt-2">iPhone 13 Pro</p>
                    <p className="text-xs text-orange-700">Baru</p>
                </a>
                <a href="#" className="inline-block text-center py-2 px-4">
                    <img src={Image11} alt="" className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"/>
                    <p className="text-sm text-p mt-2">iPhone 13</p>
                    <p className="text-xs text-orange-700">Baru</p>
                </a>
                <a href="#" className="inline-block text-center py-2 px-4">
                    <img src={Image12} alt="" className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"/>
                    <p className="text-sm text-p mt-2">iPhone SE</p>
                    <p className="text-xs text-orange-700">Baru</p>
                </a>
                <a href="#" className="inline-block text-center py-2 px-4">
                    <img src={Image11} alt="" className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"/>
                    <p className="text-sm text-p mt-2">iPhone 12</p>
                    <p className="text-xs text-orange-700">&nbsp;</p>
                </a>
                <a href="#" className="inline-block text-center py-2 px-4">
                    <img src={Image13} alt="" className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"/>
                    <p className="text-sm text-p mt-2">iPhone 11</p>
                    <p className="text-xs text-orange-700">&nbsp;</p>
                </a>
                <a href="#" className="inline-block text-center py-2 px-4">
                    <img src={Image14} alt="" className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"/>
                    <p className="text-sm text-p mt-2">Bandingkan</p>
                    <p className="text-xs text-orange-700">&nbsp;</p>
                </a>
                <a href="#" className="inline-block text-center py-2 px-4">
                    <img src={Image15} alt="" className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"/>
                    <p className="text-sm text-p mt-2">AirPods</p>
                    <p className="text-xs text-orange-700">&nbsp;</p>
                </a>
                <a href="#" className="inline-block text-center py-2 px-4">
                    <img src={Image16} alt="" className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"/>
                    <p className="text-sm text-p mt-2">AirPods</p>
                    <p className="text-xs text-orange-700">&nbsp;</p>
                </a>
                <a href="#" className="inline-block text-center py-2 px-4">
                    <img src={Image17} alt="" className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"/>
                    <p className="text-sm text-p mt-2">IOS 15</p>
                    <p className="text-xs text-orange-700">&nbsp;</p>
                </a>
                
                <MdChevronRight className={`opacity-50 cursor-pointer hover:opacity-100 right-0 top-1/3 z-10 md:hidden ${right ? "absolute" : "hidden"}`} onClick={slideRight} size={20} />
            </div>
        </div>
    </>
  );
}