import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const FeaturedProject = ({type, title, summary, img, link, github})=> {
    return (<article>
        <Link href={link} target='_blank'>
            <Image src={img} alt={title} className='w-full h-auto' />
            <div>
                <span>{type}</span>
                <Link href={link} target='_blank'><h2>{title}</h2></Link>
            </div>
        </Link>
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
                        <div className='col-span-12'>Featured Projects</div>
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