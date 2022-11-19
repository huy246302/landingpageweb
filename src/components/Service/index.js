import React from 'react'
import logo4 from '../../assets/images/heading-line-dec.png'
const Service = () => {
    return (
        <div id="services" className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h4>Có nhiều <em>Ưu đãi &amp; tính năng</em> cho bạn</h4>
                            <img src={logo4} alt="" />
                            <p>Nếu bạn cần những templates HTML cần thiết cho dự án của bạn, hãy ghé thăm <a rel="nofollow" href="https://www.toocss.com/" target="_blank">TooCSS</a> Blog.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="service-item first-service">
                            <div className="icon"></div>
                            <h4>Duy trì và cập nhập app</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item second-service">
                            <div className="icon"></div>
                            <h4>Tốc độ xử lý nhanh của app</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item third-service">
                            <div className="icon"></div>
                            <h4>Xử lý đa luồng</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item fourth-service">
                            <div className="icon"></div>
                            <h4>24/7 trợ giúp &amp; hỗ trợ</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service