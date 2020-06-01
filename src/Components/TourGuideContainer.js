import React from 'react'
import TourGuideFilter from './TourGuideFilter'
import TourGuideList from './TourGuideList'

export default function TourGuideContainer() {
    return(
        <div>
            <TourGuideFilter/>
            <TourGuideList/>
        </div>
    );
}