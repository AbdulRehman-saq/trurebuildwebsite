import React from "react";
import ScrollVelocity from "./ScrollVelocity";

const ServicesBanner = () => {
  return (
    <div>
      <div className="py-8 flex items-center justify-center">
        <ScrollVelocity
          texts={["Our Services", "Quality Work On Time"]}
          velocity={120}
        />
      </div>
    </div>
  );
};

export default ServicesBanner;
