import React from 'react'
import Banner from '../Banner/Banner'
import Courses from '../Courses/Courses'
import HowItWork from '../HowItWork/HowItWork'
import Instructors from '../Instructors/Instructors'
import FAQ from '../FAQ/FAQ'
// import Testimonials from '../testimonials/testimonials'



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Courses></Courses>
      <HowItWork></HowItWork>
      {/* <Testimonials></Testimonials> */}
      <Instructors></Instructors>
      <FAQ></FAQ>
    </div>
  )
}

export default Home
