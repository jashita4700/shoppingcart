import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faMinus,
  faPlus,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const Items = ({ description, title, img, price, amount }) => {
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <FontAwesomeIcon icon={faMinus} />
          <input type="text" placeholder="2" />
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <div className="remove-item">
          <FontAwesomeIcon icon={faClose} size={"2x"} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
