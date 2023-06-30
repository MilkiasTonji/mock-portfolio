import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const articles = () => {
    return (
        <>
            <Head>
                <title> Milkias Tonji | Articles </title>
                <meta name='description' content='any description' />
            </Head>

            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Words Can Change The World!"} className='mb-16 text-6xl'/>
                    <ul className='grid grid-cols-12 gap-16'>
                        <li>Featured articles-1</li>
                        <li>Featured articles-2</li>
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles