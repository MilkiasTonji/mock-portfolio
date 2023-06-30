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
        skills: ["",""]
    },
    {
        type: "Normal Project",
        title: "Crypto Screener Application",
        summary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \
        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \
        local currency.",
        img: projectImage1,
        link: "https://www.featured-comps.com/featured",
        github: "https://www.github.com/MilkiasTonji/project-name"
    },
    {
        type: "Normal Project",
        title: "Crypto Screener Application",
        summary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \
        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \
        local currency.",
        img: projectImage1,
        link: "https://www.featured-comps.com/featured",
        github: "https://www.github.com/MilkiasTonji/project-name"
    },
    {
        type: "Normal Project",
        title: "Crypto Screener Application",
        summary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \
        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \
        local currency.",
        img: projectImage1,
        link: "https://www.featured-comps.com/featured",
        github: "https://www.github.com/MilkiasTonji/project-name"
    },
]


const FeaturedProject = ({type, title, summary, img, link, github})=> {
    return (<article>
        <Link href={link} target='_blank'>
            <Image src={img} alt={title} className='w-full h-auto' /> </Link>
            <div>
                <span>{type}</span>
                <Link href={link} target='_blank'><h2>{title}</h2></Link>
                <p>{summary}</p>
                <div>
                <Link href={github} target='_blank'><GithubIcon /></Link>
                <Link href={link} target='_blank'>Visit Project</Link>
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
                                myProjects.map((project, index)=> (
                                    <div className={`${project.type === "Featured Project" ? 'col-span-12' : 'col-span-6'}`}>
                                         <FeaturedProject 
                                            type={project.type}
                                            title={project.title}
                                            summary={project.summary}
                                            img={project.img}
                                            github={project.github}
                                            link={project.link}
                                            key={index}
                                         />
                                    </div>
                                ))
                            }
                        <div className='col-span-12'>
                          
                        </div>
                        <div className='col-span-6'>Projects-1</div>
                        <div className='col-span-6'>Projects-2</div>
                           {/* second part of the project */}
                        <div className='col-span-12'>Featured Projects</div>
                        <div className='col-span-6'>Projects-3</div>
                        <div className='col-span-6'>Projects-4</div>

                   </div>
                </Layout>
            </main>
        </>
    )
}

export default projects