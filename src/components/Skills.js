import React from 'react'

import { motion } from 'framer-motion'

const mySkills = [
  { name: "CSS", x: "-5vw", y: "-10vw" },
  { name: "REACT.JS", x: "10vw", y: "10vw" },
  { name: "NODE.JS", x: "-10vw", y: "-20vw" },
  { name: "Angular", x: "30vw", y: "15vw" },
  { name: "JAVASCRIPT", x: "-15vw", y: "-30vw" },
  { name: "HTML", x: "15vw", y: "30vw" },
  { name: "CSS3", x: "-17vw", y: "0vw" },
  { name: "GOLANG", x: "0vw", y: "30vw" },
  { name: "EXPRESS", x: "10vw", y: "20vw" },
  { name: "MYSQL", x: "-30vw", y: "5vw" },
  { name: "MONGODB", x: "-29vw", y: "-8vw" },
  { name: "REACT HOOKS", x: "25vw", y: "0vw" },
  { name: "LARAVEL", x: "38vw", y: "-15vw" },
  { name: "PHP", x: "-38vw", y: "-15vw" },
  { name: "DOCKER", x: "-10vw", y: "10vw" },
  { name: "RESTful API", x: "-25vw", y: "20vw" },
  { name: "gRPC", x: "-19vw", y: "30vw" },
  { name: "NEXT.js", x: "7vw", y: "-10vw" },
  { name: "TYPESCRIPT", x: "12vw", y: "-20vw" },
  { name: "TAILWIND CSS", x: "19vw", y: "-30vw" },
]

const Skill = ({ name, x, y }) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:border-dark dark:border dark:text-dark xs:border-none
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light
    xs:font-bold
    '
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  )
}



const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-40 w-full text-center dark:text-light md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight 
      dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'
      >
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light/75 
        dark:text-dark text-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-sm xs:p-2'
          whileHover={{ scale: 1.05 }}
        >
          WEB
        </motion.div>
        {/* <Skill name={"CSS"} x="-5vw" y={"-10vw"} /> */}

        {
          mySkills.map((sk, index) => (
            <Skill name={sk.name} x={sk.x} y={sk.y} key={index} />
          ))
        }
      </div>
    </>
  )
}

export default Skills