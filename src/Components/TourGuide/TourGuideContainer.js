import React from 'react'
import TourGuideFilter from './TourGuideFilter'
import TourGuideList from './TourGuideList'
import {TourGuideConsumer} from '../../Store/context';

export default function TourGuideContainer() {
    return(
        <TourGuideConsumer>
            {
                (value) => {
                    // Desconstruction
                    const{tourguides} = value;
                return (
                        <div>
                        <TourGuideFilter />
                        <TourGuideList tourguides={ tourguides }/>
                        </div>
                )
            }}
        </TourGuideConsumer>
    )
}