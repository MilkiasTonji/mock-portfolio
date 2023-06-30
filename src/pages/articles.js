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

            <main>
                <Layout className='pt-16'>
                    <AnimatedText text={"Words Can Change The World!"} className='mb-16 text-6xl'/>
                </Layout>
            </main>
        </>
    )
}

export default articles