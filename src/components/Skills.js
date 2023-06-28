import React from 'react'

import { motion } from 'framer-motion'

const mySkills = [
  { name: "CSS", x: "-5vw", y: "-10vw" },
  { name: "REACT.JS", x: "5vw", y: "10vw" },
  { name: "NODE.JS", x: "-10vw", y: "-15vw" },
  { name: "Angular", x: "10vw", y: "15vw" },
  { name: "JAVASCRIPT", x: "-15vw", y: "-20vw" },
  { name: "HTML", x: "15vw", y: "20vw" },
  { name: "CSS3", x: "-17vw", y: "0vw" },
  { name: "GO", x: "16vw", y: "0vw" },
  { name: "EXPRESS", x: "24vw", y: "5vw" },
  { name: "MYSQL", x: "-24vw", y: "5vw" },
  { name: "MONGODB", x: "-29vw", y: "0vw" },
  { name: "REACT HOOKS", x: "29vw", y: "0vw" },
  { name: "LARAVEL", x: "38vw", y: "-5vw" },
  { name: "PHP", x: "-38vw", y: "-5vw" },
  { name: "DOCKER", x: "-7vw", y: "10vw" },
  { name: "RESTful API", x: "-12vw", y: "15vw" },
  { name: "gRPC", x: "-19vw", y: "20vw" },
  { name: "NEXT.js", x: "7vw", y: "-10vw" },
  { name: "TYPESCRIPT", x: "12vw", y: "-15vw" },
  { name: "TAILWIND CSS", x: "19vw", y: "-20vw" },
]

const Skill = ({ name, x, y }) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute '
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once: true}}
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