import Image from 'next/image'
import Layout from '../components/Layout'
import Head from 'next/head'

import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'

import {LinkArrow} from '../components/Icons'
import HireMe from '../components/HireMe'

import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Milkias Tonji - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className='flex flex-col items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='milkiasTonjiPic'
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
              />
              </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text={"Turning Vision Into Reality With Code And Design."}
               className='!text-6xl !text-left xl:!text-5xl lg:!text-center md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/dummy.pdf" target='_blank'
                  className='flex items-center bg-dark text-light p-2.5 px-6 
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base'
                  download={true}
                  >Resume <LinkArrow className={"w-6 ml-1"} /> </Link>
                  <Link href="mailto:mikytonji1362@gmail.com" target='_blank'
                  className='flex items-center text-dark ml-3 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark
                   hover:text-light border border-solid border-dark dark:text-light dark:border-light hover:dark:bg-light hover:dark:text-dark md:p-2 md:px-4 md:text-base'
                  >Contact Me</Link>
                </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-12 bottom-16 inline-block w-16 md:hidden'>
          <Image src={lightBulb} alt='MilkiasTonji' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
