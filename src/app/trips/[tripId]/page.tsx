import { prisma } from '@/lib/prisma'
import React from 'react'
import TripHeader from './components/TripHeader'
import TripReservation from './components/TripReservation'
import TripDescription from './components/TripDescription'
import TripHighlights from './components/TripHighlights'

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
            <TripHeader trip={trip} />
            {/* Reserva */}
            <TripReservation trip={trip} />
            <TripDescription description={trip.description} />
            <TripHighlights highlights={trip.highlights} />
        </div>
    )
}

export default TripDetails