import React from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { IoCar } from "react-icons/io5";
import { PiHandHeart,PiDressLight } from "react-icons/pi";
import { BsBalloon,BsCreditCard2Front } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";


export const categoryIcons = {
    'Gıda' : <CiForkAndKnife className='md:size-5 text-blue-800'/>,
    'Ulaşım': <IoCar className='md:size-5 text-blue-800'/>,
    'Sağlık': <PiHandHeart className='md:size-5 text-blue-800'/>,
    'Eğlence': <BsBalloon className='md:size-5 text-blue-800'/>,
    'Fatura': <RiBillLine className='md:size-5 text-blue-800'/>,
    'Kişisel Bakım': <MdOutlineSelfImprovement className='md:size-5 text-blue-800'/>,
    'Giyim': <PiDressLight className='md:size-5 text-blue-800'/>,
    'Kırtasiye': <LuNotebookPen className='md:size-5 text-blue-800'/>,
    'Kredi Kartı': <BsCreditCard2Front className='md:size-5 text-blue-800'/>
  }