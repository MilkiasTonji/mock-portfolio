import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import projectImage1 from '../../public/images/projects/crypto-screener-cover-image.jpg';


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
]


const FeaturedProject = ({ type, title, summary, img, link, github, techStacks }) => {
    return (<article className='w-full flex items-center justify-between rounded-3xl
    border border-solid border-dark bg-light shadow-2xl p-10'>
        <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
            <Image src={img} alt={title} className='w-full h-auto' /> </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
            <span className='text-primary font-medium text-xl'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'><h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2></Link>
            <p className='my-2 font-medium text-dark'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                '>Visit Project</Link>
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
                    <AnimatedText text={"Imagination Trumps Knowledge!"} className='text-6xl' />
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