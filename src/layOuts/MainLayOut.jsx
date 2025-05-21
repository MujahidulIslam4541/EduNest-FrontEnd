import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


const MainLayOut = () => {
    return (
        <div >
            <Navbar></Navbar>
            <section className='min-h-96'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default MainLayOut
