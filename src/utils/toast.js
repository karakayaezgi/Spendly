import { toast } from 'react-toastify'

export const toastAdd = () => {
    toast.success('Harcama eklendi!')
}
export const toastDelete = () =>
  toast.warn('Harcama silindi!')

export const toastUpdate = () =>
  toast.info('Harcama güncellendi!')

export const toastError = (msg = 'Bir hata oluştu.') =>
  toast.error(msg)