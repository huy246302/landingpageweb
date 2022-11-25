import React from 'react'
import Logo3 from '../../assets/images/slider-dec.png'

const Banner = () => {
    return (
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h2>Đặt hàng mớt nhất từ web Foody</h2>
                                            <p>Foody là một app landing page được thiết kế mới mẻ và độc đáo,phù hợp với nhu cầu người dùng</p>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="white-button first-button scroll-to-section">
                                                <a href="#contact">Download từ ios<i className="fab fa-apple"></i></a>
                                            </div>
                                            <div className="white-button scroll-to-section">
                                                <a href="#contact">Download từ android<i className="fab fa-google-play"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src={Logo3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;