import React from "react";
import TourGuideFilter from "./TourGuideFilter";
import TourGuideList from "./TourGuideList";
import { TourexConsumer } from "../../Store/context";

export default function TourGuideContainer() {
  return (
    <TourexConsumer>
      {(value) => {
        // Desconstruction
        const { tourguides } = value;
        return (
          <div>
            <TourGuideFilter />
            <TourGuideList tourguides={tourguides} />
          </div>
        );
      }}
    </TourexConsumer>
  );
}
