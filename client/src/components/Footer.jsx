import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-4 py-2 mt-18'>
        <img src={assets.logo} alt='' width={150}></img>

        <p className='flex-1 border-l border-gray-500 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Imaginary | All Right Reserved</p>

        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt='' width={35}/>
            <img src={assets.twitter_icon} alt='' width={35}/>
            <img src={assets.instagram_icon} alt='' width={35}/>

        </div>
      
    </div>
  )
}

export default Footer
