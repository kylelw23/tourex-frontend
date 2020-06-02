import React from 'react'
import TourFilter from './TourFilter'
import TourList from './TourList'
import {TourexConsumer} from '../../Store/context';

export default function TourGuideContainer() {
    return(
        <TourexConsumer>
            {
                (value) => {
                    // Desconstruction
                    const{tourguides} = value;
                return (
                        <div>
                        <TourFilter />
                        <TourList tourguides={ tourguides }/>
                        </div>
                )
            }}
        </TourexConsumer>
    )
}