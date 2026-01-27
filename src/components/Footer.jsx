import React from 'react'
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='flex items-center justify-around p-5 border-t border-t-gray-200'>
      <p className='text-xs md:text-md'>
        © 2026 Spendly. Bütün Hakları saklıdır.
      </p>
      <div className='flex items-center gap-2 md:gap-10'>
        <VscGithubAlt className='md:size-5 size-3'/>
        <SlSocialLinkedin className='md:size-5 size-3'/>
        <FaXTwitter className='md:size-5 size-3'/>
      </div>
    </div>
  )
}

export default Footer
