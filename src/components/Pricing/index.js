import React from 'react'
import heading_line_dec from '../../assets/images/heading-line-dec.png'
import pricing_table_01 from '../../assets/images/pricing-table-01.png'

const Pricing = () => {
    return (
        <div id="pricing" className="pricing-tables">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading">
                            <h4>Chúng tôi có những <em>mức giá</em> mà bạn có thể có</h4>
                            <img src={heading_line_dec} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-item-regular">
                            <span className="price">$12</span>
                            <h4>Mức giá cơ bản</h4>
                            <div className="icon">
                                <img src={pricing_table_01} alt="" />
                            </div>
                            <ul>
                                <li>Sử dụng các chức năng cơ bản</li>
                                <li>20 TB kho dữ liệu</li>
                                <li className="non-function">Hỗ trợ vĩnh viễn</li>
                                <li className="non-function">Chức năng Premium</li>
                                <li className="non-function">Tốc độ đường truyền cao</li>
                                <li className="non-function">Nhiều sự lực chọn</li>
                            </ul>
                            <div className="border-button">
                                <a href="#">Mua chức năng này</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-item-pro">
                            <span className="price">$25</span>
                            <h4>Mức giá đầy đủ</h4>
                            <div className="icon">
                                <img src={pricing_table_01} alt="" />
                            </div>
                            <ul>
                                <li>Sử dụng các chức năng cơ bản</li>
                                <li>50 TB kho dữ liệu</li>
                                <li>Hỗ trợ vĩnh viễn</li>
                                <li>Chức năng Premium</li>
                                <li className="non-function">Tốc độ đường truyền cao</li>
                                <li className="non-function">Nhiều sự lực chọn</li>
                            </ul>
                            <div className="border-button">
                                <a href="#">Mua chức năng này</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-item-regular">
                            <span className="price">$66</span>
                            <h4>Mức giá cao cấp</h4>
                            <div className="icon">
                                <img src={pricing_table_01} alt="" />
                            </div>
                            <ul>
                                <li>Sử dụng các chức năng cơ bản</li>
                                <li>120 TB kho dữ liệu</li>
                                <li>Hỗ trợ vĩnh viễn</li>
                                <li>Chức năng Premium</li>
                                <li>Tốc độ đường truyền cao</li>
                                <li>Nhiều sự lực chọn</li>
                            </ul>
                            <div className="border-button">
                                <a href="#">Mua chức năng này</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing