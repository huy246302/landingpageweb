import {useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { productsData } from '../../data';

export function ItemDetailPage(props) {
    const product = productsData.find(element => element);
    console.log(product.prodName,'prodName');
    
    return (
        <div className="container">
            <div className="row product pricing-tables">
                <section class="section" id="product">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="left-images">
                                <img src={product.image} />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="right-content">
                                <h4>{product.prodName}</h4>
                                <span class="price">{product.salary} VNĐ</span>
                                <h4>Mô tả</h4>
                                <span>{product.description}</span>
                                <div class="quantity-content">
                                    <div class="left-content">
                                        <h6>Số lượng {product.quantity}</h6>
                                    </div>
                                    <div class="right-content">
                                        <div class="quantity buttons_added">
                                            <input type="button" value="-" class="minus" />
                                            <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                                            <input type="button" value="+" class="plus" />
                                        </div>
                                    </div>
                                </div>
                                <div class="total">
                                    <h4>Tổng cộng {product.salary} VNĐ</h4>
                                    <div class="main-border-button"><a href="#">Add To Cart</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </section>
            </div>
        </div>
    )
}
