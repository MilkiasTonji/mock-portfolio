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
                <Layout>
                    <div>Articles</div>
                </Layout>
            </main>
        </>
    )
}

export default articles