import React from "react";
import Restaurent from "./Restaurent";
const Restaurents = ({ restaurents }) => {
  return (
    <div className="container divider">
      <div className="cards">
        {restaurents.map((restaurent) => (
          <Restaurent key={restaurent.id} restaurent={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Restaurents;
