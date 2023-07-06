import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import projectImage1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import { motion } from 'framer-motion'


const myProjects = [
    {
        type: "Featured Project",
        title: "Crypto Screener Application",
        summary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \
        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \
        local currency.",
        img: projectImage1,
        link: "https://www.featured-comps.com/featured",
        github: "https://www.github.com/MilkiasTonji/project-name",
        techStacks: ["HTML", "CSS", "TAILWIND CSS", "REACT.JS", "NODE.JS", "EXPRESS.JS", "TYPESCRIPT"]
    },
    {
        type: "Normal Project",
        title: "Crypto Screener Application",
        summary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \
        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \
        local currency.",
        img: projectImage1,
        link: "https://www.featured-comps.com/featured",
        github: "https://www.github.com/MilkiasTonji/project-name",
        techStacks: ["HTML", "CSS", "TAILWIND CSS", "REACT.JS", "NODE.JS", "EXPRESS.JS", "TYPESCRIPT"]
    },
    {
        type: "Normal Project",
        title: "Crypto Screener Application",
        summary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \
        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \
        local currency.",
        img: projectImage1,
        link: "https://www.featured-comps.com/featured",
        github: "https://www.github.com/MilkiasTonji/project-name",
        techStacks: ["HTML", "CSS", "TAILWIND CSS", "REACT.JS", "NODE.JS", "EXPRESS.JS", "TYPESCRIPT"]
    },
    {
        type: "Featured Project",
        title: "Crypto Screener Application",
        summary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \
        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \
        local currency.",
        img: projectImage1,
        link: "https://www.featured-comps.com/featured",
        github: "https://www.github.com/MilkiasTonji/project-name",
        techStacks: ["HTML", "CSS", "TAILWIND CSS", "REACT.JS", "NODE.JS", "EXPRESS.JS", "TYPESCRIPT"]
    },
]




// instead of image now use FramerImage component
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, techStacks }) => {
    return (<article className={`w-full flex items-center border border-solid border-dark bg-light dark:bg-dark dark:border-light relative rounded-br-2xl ${type === "Featured Project" ?
        'justify-between rounded-3xl shadow-2xl p-10' : 'flex flex-col justify-center rounded-2xl p-6'
        }`}>
        
        <div className={`absolute top-0 -right-3  bg-dark dark:bg-light rounded-br-3xl -z-10 w-[101%] h-[103%]  ${type==="Featured Project" ? 'rounded-[2.5rem]' : 'rounded-[2rem]'}`} />

        <Link href={link} target='_blank' 
            className={`${type === "Featured Project" ? 'w-1/2 cursor-pointer overflow-hidden rounded-lg'
            : 'w-full'}`}>
            <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale: 1.05}}
                transition={{duration: 0.2}}
            /> 
        </Link>
        <div className={`${type== 'Featured Project' ? 'w-1/2 flex flex-col items-start justify-between pl-6' 
        : 'w-full mt-4'}`}>
            <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className={`my-2 w-full text-left font-bold dark:text-light ${type==="Featured Project" ? 'text-3xl' : 'text-2xl'}`}>{title}</h2>
            </Link>
            
            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            
            <div className='flex flex-col'>
                <div className='flex flex-wrap items-center gap-4 '>
                    <h3 className='mt-2 w-full text-left text-2xl font-bold dark:text-light'>Tech Stacks</h3>
                    {
                        techStacks.map((tech, index) => (
                            <div key={`${index}-${tech}`} className='flex gap-4'>
                                <span className='p-2 px-4 border-primary dark:border-primaryDark dark:text-light border-solid border-[1px] rounded-lg'>{tech}</span>
                            </div>
                        ))
                    }
                </div>
                <div className='mt-2 flex items-start justify-end'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon className={'dark:text-light'} /></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light
                    dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </div>

    </article>)
}

const projects = () => {
    return (
        <>
            <Head>
                <title> Milkias Tonji | Projects </title>
                <meta name='description' content='any description' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Imagination Trumps Knowledge!"} className='text-4xl mb-16' />
                    <div className='grid grid-cols-12 gap-24'>
                        {
                            myProjects.map((project, index) => (
                                <div className={`${project.type === "Featured Project" ? 'col-span-12' : 'col-span-6'}`}>
                                    <FeaturedProject
                                        type={project.type}
                                        title={project.title}
                                        summary={project.summary}
                                        img={project.img}
                                        github={project.github}
                                        link={project.link}
                                        techStacks={project.techStacks}
                                        key={index}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects