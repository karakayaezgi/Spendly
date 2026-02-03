import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Filters = ({searchText, setSearchText, setSelectedCategory, selectedCategory, selectedSort, setSelectedSort}) => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center gap-3 shadow rounded-2xl p-5 my-5'>
      <div className='flex w-full p-2 items-center gap-2 border border-gray-200 rounded-2xl'>
        <input onChange={(e) => setSearchText(e.target.value)} value={searchText} className='outline-0 w-full ' type="text" placeholder='Harcamalarda ara...' />
        <IoIosSearch className='size-5 cursor-pointer' />
      </div>
      <div className='grid grid-cols-2 place-self-center gap-2'>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className='outline-0 p-2 rounded-xl border border-gray-200' name="category">
            <option value="">Tüm Kategoriler</option>
            <option value="Gıda">Gıda</option>
            <option value="Ulaşım">Ulaşım</option>
            <option value="Sağlık">Sağlık</option>
            <option value="Eğlence">Eğlence</option>
            <option value="Fatura">Fatura</option>
            <option value="Giyim">Giyim</option>
            <option value="Kırtasiye">Kırtasiye</option>
            <option value="Kredi Kartı">Kredi Kartı</option>
        </select>
        <select value={selectedSort} onChange={(e) => setSelectedSort(e.target.value)} className='outline-0 p-2 rounded-xl border border-gray-200' name="date">
          <option value="">Varsayılan(Tarih)</option>
          <option value="eskiden yeniye">Eski (eskiden yeniye)</option>
          <option value="yeniden eskiye">Yeni (yeniden eskiye)</option>
        </select>
      </div>
      
    </div>
  )
}

export default Filters