import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-[1px] border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center'>
                    Build with <span className='text-primary text-2xl px-1'>&#9825;</span> by 
                    <Link href={"https://www.hayospire.com"} target={'_blank'} className='underline underline-offset-2 px-1'>Hayospire</Link>
                    
                </div>
            <Link href={"https://www.hayospire.com"} target={'_blank'}>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer