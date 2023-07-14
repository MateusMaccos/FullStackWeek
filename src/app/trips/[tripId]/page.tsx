import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import React from 'react'

const getTripDetails = async (tripId: string) => {
    const trip = await prisma.trip.findUnique({
        where: {
            id: tripId
        }
    })
    return trip
}
//00:21:18
const TripDetails = async ({ params }: { params: { tripId: string } }) => {
    const trip = await getTripDetails(params.tripId)

    if (!trip) return null

    return (
        <div className='container mx-auto'>
            <div className="relative h-[280px] w-full">
                <Image src={trip?.coverImage} fill alt={trip.name} />
            </div>
        </div>
    )
}

export default TripDetails