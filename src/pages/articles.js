import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import article3 from '../../public/images/articles/create modal component in react using react portals.png'


import { motion } from 'framer-motion'

// instead of image now use FramerImage component
const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative'>
            <div className={`absolute top-0 -right-3  bg-dark rounded-br-3xl -z-10 w-[101%] h-[103%] rounded-2xl`} />
            <Link href={link} target='_blank'
                className={`'w-full inline-block cursor-pointer overflow-hidden rounded-lg'`}>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline mt-4'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const Article = ({img, title, date, link}) => {
    return <li>
        <Link href={link} target='_blank'>{title}</Link>
        <span>{date}</span>
    </li>
}

const articles = () => {
    return (
        <>
            <Head>
                <title> Milkias Tonji | Articles </title>
                <meta name='description' content='any description' />
            </Head>

            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Words Can Change The World!"} className='mb-16 text-6xl' />
                    <ul className='grid grid-cols-2 gap-16'>
                        <FeaturedArticle
                            title={"Build A Custom Pagination Component In Reactjs From Scratch"}
                            summary={"Learn how to build a custom pagination component in ReactJS from scratch. \
                            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."}
                            time={"9 min read"}
                            link={"/"}
                            img={article1}
                        />
                        <FeaturedArticle
                            title={"Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"}
                            summary={`Learn how to create stunning loading screens in React with 3 different methods. \ 
                            Discover how to use React-Loading, React-Lottie & build a custom loading screen. \
                            Improve the user experience.`}
                            time={"10 min read"}
                            link={"/"}
                            img={article2}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                    <ul>
                        <Article
                            title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"}
                            img={article3}
                            date={"March 22, 2023"}
                            link={"/"}   
                        />
                         <Article
                            title={"Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"}
                            img={article3}
                            date={"March 22, 2023"}
                            link={"/"}   
                        />
                         <Article
                            title={"Creating An Efficient Modal Component In React Using Hooks And Portals"}
                            img={article3}
                            date={"March 22, 2023"}
                            link={"/"}   
                        />
                         <Article
                            title={"Build A Fabulous Todo List App With React, Redux And Framer-Motion"}
                            img={article3}
                            date={"March 22, 2023"}
                            link={"/"}   
                        />
                        <Article
                            title={"Redux Simplified: A Beginner's Guide For Web Developers"}
                            img={article3}
                            date={"March 22, 2023"}
                            link={"/"}   
                        />
                        <Article
                            title={"What Is Higher Order Component (Hoc) In React?"}
                            img={article3}
                            date={"March 22, 2023"}
                            link={"/"}   
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles