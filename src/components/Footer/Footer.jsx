import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <div>
                    <img src="\src\assets\Edu-Nest-Main-Logo-1.png" alt="" className='w-40 h-10' />
                </div>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://www.facebook.com/'><FaFacebook size={30} /></Link>
                        <Link to='https://www.linkedin.com/feed/'><FaLinkedin size={30} /></Link>
                        <Link to='https://x.com/home'><FaSquareXTwitter size={30} /></Link>
                        <Link to='https://www.youtube.com/'><FaYoutube size={30} /></Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Mujahidul Islam Rifat</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer
