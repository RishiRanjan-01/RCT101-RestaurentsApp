import React from "react";

const Restaurent = ({ restaurent }) => {
  return (
    <div className="card" key={restaurent.id}>
      <img width="254" height="160px" src={restaurent.image} />
      <div className="restaurant-details">
        <div className="restaurant-title">{restaurent.name}</div>
        <div className="restaurant-subtitle">
          {restaurent.category.join(",")}
        </div>
        <div>
          {restaurent.Payment_method.card?"card Payment":"Online Paymnet | UPI"}
        </div>
      </div>
      <div className="restaurant-info">
        <div className="restaurant-ratings">
          <i className="material-icons star-icon">star</i> {restaurent.rating}
        </div>
        .
        <div className="restaurant-delivery-timings">
          {" "}
          {restaurent.deliveryTimings}
        </div>{" "}
        .<div className="restaurant-cost-for-two">Cost For Two Rs {restaurent.costfortwo}</div>
      </div>
      <div className="offer-banner">
        <span className="material-icons"> local_offer </span>
        <span className="offer-text">{restaurent.offers.join("|")}</span>
      </div>
    </div>
  );
};

export default Restaurent;
