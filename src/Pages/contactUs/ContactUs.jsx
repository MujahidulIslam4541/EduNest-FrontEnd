import React from 'react'
import contactImage from '../../assets/conatct2.jpg'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPhoneVolume } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { IoLocation, IoShareSocial } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div>
      <div className='w-full h-60 bg-blue-400 rounded'>
      </div>
      <div className='max-w-4xl mx-auto border grid grid-cols-1 md:grid-cols-3 gap-4'>

        {/* left section */}
        <div className=''>
          <img src={contactImage} alt="" />
          <h2><FaPhoneVolume /> Phone : <span>+880 1853744541</span></h2>
          <h2><MdEmail /> E-mail : mirifat4541@gmail.com</h2>
          <p><IoShareSocial /> Social : <FaFacebook /> <FaInstagramSquare />
            <FaLinkedin />     <FaXTwitter />     </p>
            <h2><IoLocation /> Location :Bhola Barishal Bangladesh</h2>
        </div>





        {/* right section */}
        <div className='col-span-2 '>
          <form action="">
            {/* Name */}
            <div>
              <label className='font-medium label'>Name </label>
              <input type="text" name='name' placeholder='Enter Your Name' className='input input-border w-full' />
            </div>
            {/* email */}
            <div>
              <label className='font-medium label'>Email </label>
              <input type="email" name='email' placeholder='Enter Your Email' className='input input-border w-full' />
            </div>
            {/* Subject */}
            <div>
              <label className='font-medium label'>Subject </label>
              <input type="text" name='subject' placeholder='Enter Your subject' className='input input-border w-full' />
            </div>
            {/* Description */}
            <div>
              <label className='font-medium label'>Your Massage </label>
              <textarea name="massage" id="" rows={8} placeholder='Enter Your Massage' className='w-full'></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
