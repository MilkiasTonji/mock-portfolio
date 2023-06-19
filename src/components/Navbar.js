import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'

const CustomLink = ({href, title, className=""})=> {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group ${router.asPath === href ? 'font-bold' : ''}`}>
            {title}
            <span className={`
                h-[3px] inline-block bg-blue-500 absolute left-0 
                -bottom-0.5 rounded-md group-hover:w-full transition-[width] ease-in duration-300
                ${router.asPath === href ? 'w-full font-bold' : 'w-0'}
            `}>
            &nbsp;</span>
        </Link>
    )
}


const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
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
        <nav>
            <Link href="/" target={'_blank'}>T</Link>
            <Link href="/" target={'_blank'}>T</Link>
            <Link href="/" target={'_blank'}>T</Link>
            <Link href="/" target={'_blank'}>T</Link>
            <Link href="/" target={'_blank'}>T</Link>
            <Link href="/" target={'_blank'}>T</Link>

        </nav>
    </header>
  )
}

export default Navbar