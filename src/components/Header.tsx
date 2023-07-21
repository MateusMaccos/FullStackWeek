'use client'

import React from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false)

    const { } = useRouter()

    const { status, data } = useSession()

    const handleLoginClick = () => signIn()

    const handleLogoutClick = () => {
        setMenuIsOpen(false)
        signOut()
    }

    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen)

    const handleMyTripsClick = () => {

    }

    return (
        <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
            <Link href='/'>
                <div className='relative h-[32px] w-[182px]'>
                    <Image src="/LogoFTW.png" alt='FullStackWeek' fill />
                </div>
            </Link>
            {status === "unauthenticated" && (
                <button className='text-primary text-sm font-semibold' onClick={handleLoginClick}>Login</button>
            )}
            {status === "authenticated" && data.user && (
                <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
                    <AiOutlineMenu className='cursor-pointer' size={16} onClick={handleMenuClick} />
                    <Image height={35} width={35} alt={data.user.name!} src={data.user.image!} className='rounded-full shadow-md' />

                    {menuIsOpen && (
                        <div className="z-50 absolute top-14 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
                            <Link href="/my-trips" onClick={() => setMenuIsOpen(false)}>
                                <button className='text-primary pb-2 border-b border-l-grayLighter border-solid text-xs font-semibold'>
                                    Minhas Viagens
                                </button>
                            </Link>
                            <button className='text-primary pt-2 text-xs font-semibold' onClick={handleLogoutClick}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Header