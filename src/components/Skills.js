import React from 'react'

import {motion} from 'framer-motion'

const mySkills = [
  "WEB",
  "CSS",
  "REACT.JS",
  "NODE.JS"
]

const Skill = ({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute ' 
    whileHover={{scale: 1.05}}
    initial={{x: 0, y: 0}}
    animate={{x: x, y: y}}
    transition={{duration: 1.5}}
    >
      {name}
    </motion.div>
  )
}



const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
      
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark'
      whileHover={{scale: 1.05}}
    >
        WEB
    </motion.div>
    <Skill name={"CSS"} x="-5vw" y={"-10vw"} />
      
       {/* {
        mySkills.map((sk, index)=> (
          <Skill name={sk} x="-5vw" y={"-10vw"} key={index} />
        ))
       } */}
    </div>
    </>
  )
}

export default Skills