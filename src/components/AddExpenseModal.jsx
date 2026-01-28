import React from 'react'

const AddExpenseModal = ({onCloseModal}) => {
  return (

    <div className='fixed inset-0 z-50 flex justify-center items-center '>
      <div className='bg-black/50 absolute inset-0'></div>
      <div className='relative shadow rounded-2xl p-5 sm:w-[400px] w-[350px] bg-white'>
        <strong className='text-xl'>Harcama Ekle</strong>
        <form className='flex flex-col gap-4 mt-4'>
          <div className='flex flex-col'>
            <label htmlFor='title'>Başlık</label>
            <input className='outline-0 p-2 rounded-xl border border-gray-200' name='title' id='title' type="text" placeholder='Başlık' />
          </div>
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
          <div className='flex flex-col'>
            <label htmlFor='amount'>Tutar</label>
            <input className='outline-0 p-2 rounded-xl border border-gray-200' id='amount' type="number" placeholder='Tutar' />
          </div>
          <div className='w-full'>
            <input className='outline-0 p-2 rounded-xl border border-gray-200' type="date" id="date" />
          </div>
          <div className='flex gap-2 justify-end'>
            <button onClick={onCloseModal} className='p-2 rounded-xl border border-gray-200 cursor-pointer' type='button'>Kapat</button>
            <button className='p-2 rounded-xl border border-gray-200 cursor-pointer' type='submit'>Kaydet</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default AddExpenseModal
