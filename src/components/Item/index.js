import React from 'react';
import sampleImage from '../../img/images.jpg';

const ItemRow = () => {
  return (
    <div id="item" className="row product pricing-tables">
      <div className="col-md-2">
        <img src={sampleImage} alt="Sample" height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>Blue T-Shirt</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-md-2 product-price">
        $19.99
      </div>
    </div>
  );
}

export default ItemRow;