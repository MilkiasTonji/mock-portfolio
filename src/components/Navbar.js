import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, LinkedInIcon, GithubIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group ${router.asPath === href ? 'font-bold' : ''}`}>
            {title}
            <span className={`
                h-[3px] inline-block bg-blue-500 absolute left-0 dark:bg-light
                -bottom-0.5 rounded-md group-hover:w-full transition-[width] ease-in duration-300
                ${router.asPath === href ? 'w-full font-bold' : 'w-0'}
            `}>
                &nbsp;</span>
        </Link>
    )
}


const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOPen] = useState(false);

    const handleClick = () => {
        setIsOPen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
            <button className='flex flex-col justify-center items-center'
                onClick={handleClick}
            >
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1': '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0': 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1': 'translate-y-0.5'}`}></span>
            </button>
            <nav className='flex gap-4'>
                <CustomLink href="/" title={"Home"} className='' />
                <CustomLink href="/about" title={"About"} className='' />
                <CustomLink href="/projects" title={"Projects"} className='' />
                <CustomLink href="/articles" title={"Articles"} className='' />
            </nav>
            {/* bring logo component here */}
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
            <nav className='flex items-center justify-center flex-wrap gap-4'>
                <motion.a href="https://www.twitter.com/MilkiasTonji" target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6'
                ><TwitterIcon /></motion.a>
                <motion.a href="https://www.linkedin.com/MilkiasTonji" target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6'
                ><LinkedInIcon /></motion.a>
                <motion.a href="https://www.linkedin.com/MilkiasTonji" target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6'
                ><GithubIcon /></motion.a>
                <motion.a href="https://www.linkedin.com/MilkiasTonji" target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6'
                ><PinterestIcon /></motion.a>
                <motion.a href="https://www.linkedin.com/MilkiasTonji" target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6'
                ><DribbbleIcon /></motion.a>

            <buttton
                className={`cursor-pointer w-10 h-10 flex items-center justify-center ml-3 rounded-full p-1
                ${mode==="light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                onClick={()=> setMode(mode === "light" ? "dark": "light")}
            >
                {
                    mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-light"} />
                }
            </buttton>
            </nav>
        </header>
    )
}

export default Navbar