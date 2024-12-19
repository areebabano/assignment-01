import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        {/* Header  */}
       <header className='w-full fixed shadow-md py-6 top-0 z-50'>
       <div className='container mx-auto flex items-center justify-between px-4 relative'>
        {/* Logo  */}
       <Link href="/">
       <div className='absolute top-[-20px] left-10 transform translate-y-[20px]'>
       <Image
       src="/logo.png"
       alt='Governors Initiative Logo'
       height={90}
       width={90}
       className='object-cover'
       />
       </div>
       </Link>

       {/* Title  */}
       <h1 className='text-xl font-bold ml-[80px]'>Tuition Free Education Program on Latest Technologies</h1>

       {/* Navigation  */}
       <nav>
        <ul className='flex space-x-10 text-white'>
            <li><Link href="/" className='text-lg'>Home</Link></li>
            <li><Link href="/apply" className='text-lg'>Apply</Link></li>
            <li><Link href="/jobs" className='text-lg'>Jobs</Link></li>
            <li><Link href="/result" className='text-lg'>Result</Link></li>
            <li><Link href="/courses" className='text-lg'>Courses</Link></li>
        </ul>
       </nav>
       </div>
       </header>
    </div>
  )
}

export default Header