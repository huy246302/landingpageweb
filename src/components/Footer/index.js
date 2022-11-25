import React from 'react'
import Logo2 from '../../assets/images/white-logo.png'

const Footer = () => {
    return (

        <footer id="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading">
                            <h4>Gia nhập danh sách nhận mail để nhận tin tức &amp; thông tin mới nhất</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-3">
                        <form id="search" action="#" method="GET">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <fieldset>
                                        <input type="address" name="address" className="email" placeholder="Địa chỉ email..." autoComplete="on" required />
                                    </fieldset>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <fieldset>
                                        <button type="submit" className="main-button">Đăng ký theo dõi <i className="fa fa-angle-right"></i></button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="footer-widget">
                            <h4>Liên hệ</h4>
                            {/* <p>Rio de Janeiro - RJ, 22795-008, Brazil</p> */}
                            <p><a href="#">123456789</a></p>
                            <p><a href="#">info@company.co</a></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer-widget">
                            <h4>Thông tin về nhóm</h4>
                                <li><a href="/">Trang chủ</a></li>
                                <li><a href="/service">Dịch vụ</a></li>
                                <li><a href="/about">Thông tin</a></li>
                                <li><a href="/pricing">Mức giá</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;