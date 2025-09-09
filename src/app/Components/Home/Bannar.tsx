import Image from 'next/image'
import React from 'react'
import bannar from "@/../public/footer1.jpg"

export default function Bannar() {
    return (
        <div className="w-full bg-gradient-to-b shadow-md rounded-md text-center relative">
            <Image
            src={bannar}
            alt='Bannar'
            width={1024}
            height={800}
            className='w-full object-contain'
            />
        </div>
    )
}
