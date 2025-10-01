import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo mt-20 sm:mt-0">
        What I offer
      </h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className="text-center mx-auto mb-12 mt-5 max-w-2xl font-ovo">
        I am a Full Stack Developer with hands-on expertise in Core Java, React,
        Node.js, PHP, and SQL. Experienced in building scalable web applications
        and end-to-end projects including invoicing systems, ERP solutions, and
        real-time dashboards. Skilled in both frontend and backend development
        with a focus on clean architecture and practical problem-solving.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 
                       hover:shadow-[var(--shadow-black)] cursor-pointer 
                       hover:bg-[var(--color-light-hover)] hover:-translate-y-1 
                       duration-500"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-xl my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5"
            >
              Read More{" "}
              <Image
                src={assets.right_arrow}
                alt="arrow"
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
