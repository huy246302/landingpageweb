import React, { useState, useEffect } from 'react';
import { productsData } from '../../data';

export const ItemPage = () => {
return(
  <>    
    <div className="container">
      <div className="row pricing-tables">
          <ul className="product-list">
          {productsData.map(content=> (
            <li>
              <a href={'/item/'+content.id}>
                <div className="product row">
                    <div className="col-md-2 product-image">
                        <img src={content.image} alt={"khong co hinh"}/>
                    </div>
                    <div className="col-md-6 product-imformation">
                      <h4>{content.prodName}</h4>
                      <h4>Xuất xứ:{content.description}</h4>
                      <h4>Ngày nhập:{content.date}</h4>
                    </div>
                    <div className='col-md-2 product-price'>
                      <h4>{content.price} VNĐ</h4>
                    </div>
                </div>
              </a>
            </li>
              ))
          }
          </ul>
      </div>
    
    </div>
</>
  )
}
