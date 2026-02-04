import React from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { IoCar } from "react-icons/io5";
import { PiHandHeart,PiDressLight } from "react-icons/pi";
import { BsBalloon,BsCreditCard2Front } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";


export const categoryIcons = {
    'Gıda' : <CiForkAndKnife className='size-5'/>,
    'Ulaşım': <IoCar className='size-5'/>,
    'Sağlık': <PiHandHeart className='size-5'/>,
    'Eğlence': <BsBalloon className='size-5'/>,
    'Fatura': <RiBillLine className='size-5'/>,
    'Kişisel Bakım': <MdOutlineSelfImprovement className='size-5'/>,
    'Giyim': <PiDressLight className='size-5'/>,
    'Kırtasiye': <LuNotebookPen className='size-5'/>,
    'Kredi Kartı': <BsCreditCard2Front className='size-5'/>
  }