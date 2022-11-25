import React from 'react';
import { employeesData } from '../../data';

export const ItemPage = () => {
return(
  <>    
    <div className="container">
      <div className="row product pricing-tables">
          <ul className="product-list">
          {employeesData.map(content=> (
            <li>
              <a href={'/item/'+content.id}>
                <div className="product">
                    <div className="product-image">
                        <img src={content.image} alt={"khong co hinh"}/>
                    </div>
                    <div className="product-imformation">
                        <h4>{content.firstName}</h4>
                        <h4>{content.lastName}</h4>
                        <h4>{content.email}</h4>
                        <h4>${content.salary}</h4>
                        <h4>{content.date}</h4>
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
