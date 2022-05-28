import React from "react";

const Filters = ({Filters,newFilter ,filterby}) => {
  return (
    <div className="container restaurants">
      <h1>50 restaurants</h1>
      <div className="restaurant-options">
        {Object.entries(Filters).map(([key,value])=> 
          <div  className="restaurant-option" onClick={()=>newFilter(key)} >{value}</div>
          )}
      </div>
    </div>
  );
};

export default Filters;
