import React, { useRef } from 'react'

import {motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


// define my experiences

const myExperiences = [
    {
        position: "Software Engineer",
        company: "Google",
        companyLink: "https://www.google.com",
        time: "2022-Present",
        address: "Mountain View, CA",
        work: "Worked on a team responsible for developing new features for Google's search engine, including \
         improving the accuracy and relevance of search results and developing new tools \
         for data analysis and visualization."
    },
    {
        position: "Intern",
        company: "Facebook",
        companyLink: "https://www.facebook.com",
        time: "Summer 2021",
        address: "Menlo Park, CA",
        work: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and \
        share short-form video content, including designing and implementing a new user interface and developing \
        the backend infrastructure to support the feature."
    },
    {
        position: "Software Develope",
        company: "Amazon",
        companyLink: "",
        time: "2020-2021",
        address: "Seattle, WA",
        work: "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such \
        as product recommendations and user reviews, and optimizing the app's performance and reliability."
    },
    {
        position: "Software Developer Intern",
        company: "Microsoft",
        companyLink: "https://www.microsoft.com",
        time: "Summer 2019",
        address: "Redmond, WA",
        work: "Worked on a team responsible for developing new features for Microsoft's Windows operating system, \
        including implementing a new user interface for a system settings panel and optimizing the performance of \
        a core system component."
    },
    {
        position: "Teaching Assistant",
        company: "MIT",
        companyLink: "https://www.mit.com",
        time: "Fall 2018",
        address: "Massachusetts Ave, Cambridge, MA",
        work: "Assisted in teaching a course on computer programming, held office hours to help students with assignments, \
        and graded exams and assignments."
    }
]


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-medium text-2xl dark:text-light'>{position} &nbsp; 
            <a href={companyLink} 
             target='_blank'
             className='text-primary capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light'>{time} | {address}</span>
            <p className='font-medium w-full dark:text-light'>{work}</p>
        </motion.div>
    </li>
}


const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset:["start end","center start"]
        }
    )

  return (
    <div className='my-40'>
        <h2 className='font-bold text-6xl mb-32 w-full text-center dark:text-light'>Experience</h2>
        <div className='w-[75%] mx-auto relative'>
            <motion.div
            style={{scaleY: scrollYProgress}}
            ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                {
                    myExperiences.map((exp, index)=> (
                        <Details 
                            position={exp.position} 
                            company={exp.company} 
                            companyLink={exp.companyLink}
                            time={exp.time}
                            address={exp.address}
                            work={exp.work}
                            key={index}
                        />
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Experience