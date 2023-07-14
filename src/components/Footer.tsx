import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-walterwhite p-5 justify-center flex flex-col items-center '>
            <Image src='/LogoFTW.png' alt='FullStackWeek' width={133} height={23} />
            <p className='text-sm font-medium mt-1 text-primaryDarker'>Todos os direitos reservados.</p>
        </div>
    )
}

export default Footer