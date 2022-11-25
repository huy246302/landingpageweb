import React from 'react'
import Logo6 from '../../assets/images/heading-line-dec.png'
import Logo7 from '../../assets/images/about-right-dec.png'

const About = () => {
    return (
        <div id="about" className="about-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="section-heading">
                            <h4>Về <em>những gì nhóm làm</em></h4>
                            <img src={Logo6} alt="" />
                            <p>Qua quá trình 3 tháng trao đổi và giải quyết,nhóm em đã làm những công việc cần thiết để lập trình nên web app đặt hàng foody</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">Xử lý các vấn đề</a></h4>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">24/7 hỗ trợ &amp; trợ giúp</a></h4>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">Duy trì app</a></h4>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">Phát triển các chức năng</a></h4>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="gradient-button">
                                    <a href="#">Bắt đầu 14-Day dùng thử</a>
                                </div>
                                <span>*Không cần thẻ tín dụng</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-image">
                            <img src={Logo7} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About