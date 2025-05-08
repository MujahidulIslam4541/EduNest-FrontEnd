import React from 'react'
import contactImage from '../../assets/conatct2.jpg'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPhoneVolume } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { IoLocation, IoShareSocial } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div>

      {/* Include Google Map */}
      <div className="max-w-6xl mx-auto mt-10 p-4">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">📍 Find Us Here</h3>

        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14724.596863378994!2d90.6336029316512!3d22.685488518360557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754d44be3791f4b%3A0xdf8a000125a851b9!2sBhola!5e0!3m2!1sen!2sbd!4v1746681648761!5m2!1sen!2sbd"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map - Bhola"
          ></iframe>
        </div>
      </div>








      <div className=" max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 rounded-xl shadow-xl">

        {/* Left Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-6 text-gray-800">
          <img src={contactImage} alt="Contact" className="w-full h-48 object-cover rounded-lg" />

          <div className="flex items-center gap-3 text-base font-medium">
            <FaPhoneVolume className="text-blue-600 text-xl" />
            <span>Phone: <span className="text-gray-700 font-semibold">+880 1853744541</span></span>
          </div>

          <div className="flex items-center gap-3 text-base font-medium">
            <MdEmail className="text-red-500 text-xl" />
            <span>Email: <span className="text-gray-700 font-semibold">mirifat4541@gmail.com</span></span>
          </div>

          <div className="flex items-center gap-3 text-base font-medium">
            <IoLocation className="text-green-600 text-xl" />
            <span>Location: <span className="text-gray-700 font-semibold">Bhola, Barishal, Bangladesh</span></span>
          </div>

          <div className="flex items-center gap-3 text-base font-medium">
            <IoShareSocial className="text-purple-500 text-xl" />
            <span>Social:</span>
            <div className="flex gap-3 text-2xl text-gray-600">
              <FaFacebook className="hover:text-blue-600 transition" />
              <FaInstagramSquare className="hover:text-pink-500 transition" />
              <FaLinkedin className="hover:text-blue-800 transition" />
              <FaXTwitter className="hover:text-black transition" />
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="col-span-2">
          <form className="bg-white p-8 rounded-2xl shadow-md space-y-5">
            {/* Name */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Name</label>
              <input type="text" name="name" placeholder="Enter Your Name" className="input w-full input-bordered" />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" placeholder="Enter Your Email" className="input w-full input-bordered" />
            </div>

            {/* Subject */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" name="subject" placeholder="Enter Your Subject" className="input w-full input-bordered" />
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Your Message</label>
              <textarea name="message" rows={6} placeholder="Enter Your Message" className="textarea w-full textarea-bordered"></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ContactUs
