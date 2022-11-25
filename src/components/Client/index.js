import React from 'react'
import headinglinedec from '../../assets/images/heading-line-dec.png'
import quote from '../../assets/images/quote.png'
import client_image from '../../assets/images/client-image.jpg'

const Client = () => {
    return (
        <div id="clients" className="the-clients">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading">
                            <h4>những <em>thành viên</em> làm app dev</h4>
                            <img src={headinglinedec} alt="" />
                            <p>Đây là những thành viên làm nên dev app</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="naccs">
                            <div className="grid">
                                <div className="row">
                                    <div className="align-self-center">
                                        <div className="menu">
                                            <div>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <h4>Vỏ Phát Tài</h4>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                                            <span className="category">Backend</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span className="rating">5</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <h4>Nguyễn Huy</h4>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                                            <span className="category">Frontend</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span className="rating">5</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <h4>Trần Tấn Tài</h4>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                                            <span className="category">Frontend</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span className="rating">5</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <h4>Trần Quang Khải</h4>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                                            <span className="category">Backend</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span className="rating">5</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <ul className="nacc">
                                            <li>
                                                <div>
                                                    <div className="thumb">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="client-content">
                                                                    <img src={quote} alt="" />
                                                                    <p>“CTO, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan
                                                                        lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”</p>
                                                                </div>
                                                                <div className="down-content">
                                                                    <img src={client_image} alt="" />
                                                                    <div className="right-content">
                                                                        <h4>Jake H. Nyo</h4>
                                                                        <span>CTO of Digital Company</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="thumb">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="client-content">
                                                                    <img src={quote} alt="" />
                                                                    <p>“May, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan
                                                                        lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”</p>
                                                                </div>
                                                                <div className="down-content">
                                                                    <img src={client_image} alt="" />
                                                                    <div className="right-content">
                                                                        <h4>May C.</h4>
                                                                        <span>Founder of Catherina Co.</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="thumb">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="client-content">
                                                                    <img src={quote} alt="" />
                                                                    <p>“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan
                                                                        lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”</p>
                                                                </div>
                                                                <div className="down-content">
                                                                    <img src={client_image} alt="" />
                                                                    <div className="right-content">
                                                                        <h4>Random Staff</h4>
                                                                        <span>Manager, Digital Company</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="thumb">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="client-content">
                                                                    <img src={quote} alt="" />
                                                                    <p>“Mark, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan
                                                                        lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”</p>
                                                                </div>
                                                                <div className="down-content">
                                                                    <img src={client_image} alt="" />
                                                                    <div className="right-content">
                                                                        <h4>Mark Am</h4>
                                                                        <span>CTO, Amber Do Company</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client