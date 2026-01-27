import React from 'react'
import { IoIosSearch } from "react-icons/io";
const Filters = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center gap-3 shadow rounded-2xl p-5 my-5'>
      <div className='flex w-full p-2 items-center gap-2 border border-gray-200 rounded-2xl'>
        <IoIosSearch className='size-5' />
        <input className='outline-0 w-full ' type="text" placeholder='Harcamalarda ara...'/>
      </div>
      <div className='grid grid-cols-3 place-self-center gap-2'>
        <select className='outline-0 p-2 rounded-xl border border-gray-200' name="">
          <option value="">Kategori</option>
          <option value="Gıda">Gıda</option>
          <option value="Ulaşım">Ulaşım</option>
          <option value="Sağlık">Sağlık</option>
          <option value="Eğlence">Eğlence</option>
          <option value="Fatura">Fatura</option>
          <option value="Giyim">Giyim</option>
          <option value="Kredi Kartı">Kredi Kartı</option>
        </select>
        <select className='outline-0 p-2 rounded-xl border border-gray-200' name="">
          <option value="">Sırala</option>
          <option value="azdan çoğa">Fiyat (azdan çoğa)</option>
          <option value="çoktan aza">Fiyat (çoktan aza)</option>
        </select>
        <select className='outline-0 p-2 rounded-xl border border-gray-200' name="">
          <option value="Tarih">Tarih</option>
          <option value="eskiden yeniye">Eski (eskiden yeniye)</option>
          <option value="yeniden eskiye">Yeni (yeniden eskiye)</option>
        </select>
      </div>
    </div>
  )
}

export default Filters