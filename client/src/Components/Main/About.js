import React from 'react'

const About = () => {
  return (
    <div className='px-44'>
      <p className='text-4xl font-bold text-center underline mt-4'>About PulseConnect</p>
      <br />
      <p className='text-lg'>PulseConnect serves as a platform for individuals to register as blood donors, facilitating both blood donation requests and donations. It also empowers blood banks to efficiently manage their stocks by overseeing pending donations, requests, scheduling blood camps, and managing them. The system authenticates users and blood banks using their mobile numbers as usernames and passwords to access additional functionalities.</p>
      <br />
      <p className='text-lg'>Key features include:</p>
      <ul className='list-disc pl-8'>
        <li>Efficient management and tracking of blood donations</li>
        <li>Facilitating connections between donors and recipients in need</li>
        <li>Providing real-time updates on blood shortages and requirements</li>
      </ul>
      <br />
      <p className='text-lg'>The platform comprises both a user-facing interface and a comprehensive interface tailored for blood banks to streamline data management processes.</p>
      <p className='text-right text-5xl'>
        <br />
      </p>
    </div>
  )
}

export default About