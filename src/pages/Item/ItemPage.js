import React from 'react';
import { employeesData } from '../../data';

export const ItemPage = () => {
  const list = [{
    id: 1,
    name:'Dell latitude i5',
    image:'https://i.imgur.com/ILEU18M.jpg',
    ram:'8GB',
    ssd:'256GB',
    price:'299'
   },
   {
    id: 2,
    name:'Lenovo Altitude i7',
    image:'https://i.imgur.com/2kePJmX.jpg',
    ram:'4GB',
    ssd:'128GB',
    price:'199'
   },
    {
    id: 3,
    name:'Microsoft Surface Pro',
    image:'https://i.imgur.com/ILEU18M.jpg',
    ram:'16GB',
    ssd:'512GB',
    price:'499'
   },
    {
    id: 4,
    name:'Dell Xtreame 5',
    image:'https://i.imgur.com/2kePJmX.jpg',
    ram:'8GB',
    ssd:'256GB',
    price:'299'
   }
   ];

return(
  <>    
    <div className="container">
      <div className="row product pricing-tables">
          <ul className="product-list">
          {list.map(content=> (
            <li>
              <a href={'/item/'+content.id}>
                <div className="product">
                    <div className="product-image">
                        <img src={content.image} alt={"khong co hinh"}/>
                    </div>
                    <div className="product-imformation">
                        <h4>{content.name}</h4>
                        <div className="specification">
                          <span>{content.ram} RAM</span>
                          <small className="line"></small>
                          <span>{content.ssd} SSD</span>
                        </div>
                        <span>${content.price}</span>
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
