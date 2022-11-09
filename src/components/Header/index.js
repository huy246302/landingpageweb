import React from 'react'
import Logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="main-nav">
                            {/* <!-- ***** Logo Start ***** --> */}
                            <a href="index.html" class="logo">
                                <img src={Logo} alt="Chain App Dev" />
                            </a>
                            {/* <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** --> */}
                            <ul class="nav">
                                <li class="scroll-to-section"><a href="/" class="active">Home</a></li>
                                <li class="scroll-to-section"><a href="/service">Services</a></li>
                                <li class="scroll-to-section"><a href="/about">About</a></li>
                                <li class="scroll-to-section"><a href="/pricing">Pricing</a></li>
                                <li class="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
                                <li><div class="gradient-button"><a id="modal_trigger" href="#modal"><i class="fa fa-sign-in-alt"></i> Sign In Now</a></div></li>
                            </ul>
                            <a class='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/* <!-- ***** Menu End ***** --> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;