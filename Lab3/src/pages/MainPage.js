import React from "react";
import {useHistory} from 'react-router-dom';
import '../style.css';

const MainPage = () => {
  const history = useHistory();

  const handleRedirect = (url) => () => {
    if(url) {
      history.push(url);
    }
  }

  return(
    <>
      <header id="header">
        <nav class="navbar navbar-inverse" role="banner">
            <div class="container">
                <a class="navbar-brand" href="index.html"><img src="images/logo.jpg" alt="logo"/> </a>
                <div class="collapse navbar-collapse navbar-right">
                    <ul class="nav navbar-nav">
                    <section className="router-section">
                        <button onClick={handleRedirect('/about')} className="router-link">About Us</button>
                        <button onClick={handleRedirect('/portfolio')} className="router-link">Portfolio</button>
                        <button onClick={handleRedirect('/calculator')} className="router-link">Calculator</button>
                        <button onClick={handleRedirect('/info')} className="router-link">User profile</button>
                        <button onClick={handleRedirect('/register')} className="router-link">Register</button>
                        <button onClick={handleRedirect('/signIn')} className="router-link">Sign in</button>
                    </section>    
                    </ul>
                </div>
            </div> 
        </nav>
    </header> 
    <section id="main-slider" class="no-margin">
        <div class="main slide">
            <div class="item active" style="background-image: url(images/slider/bg2.jpg)">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="main-content">
                                <h1 >Help Finding Information Online</h1>
                                <p>Every new computer that’s brought home from the store has an operating system installed onto it.</p>
                                <a class="btn-slide" href="#">Learn More</a>
                                <a class="btn-slide white" href="#">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
             </div>   
        </div>  
    </section>


    <section id="feature">
        <div class="container">
            <div class="center fadeInDown">
                <h2>Features</h2>
                <p class="lead">We will write some text here soon</p>
            </div>

            <div class="row">
                <div class="features">
                    <div class="col-md-3 col-sm-4 fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <div class="feature-wrap">
                            <div class="icon">
                                <i class="fa fa-rocket"></i>
                            </div>
                            <h2>Fast</h2>
                            <p>We will write some text here soon</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <div class="feature-wrap">
                            <div class="icon">
                                <i class="fa fa-check"></i>
                            </div>
                            <h2>Easy</h2>
                            <p>We will write some text here soon</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <div class="feature-wrap">
                            <div class="icon">
                                <i class="fa fa-bullhorn"></i>
                            </div>
                            <h2>Cheap</h2>
                            <p>We will write some text here soon</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <div class="feature-wrap">
                            <div class="icon">
                                <i class="fa fa-arrows"></i>
                            </div>
                            <h2>Editable</h2>
                            <p>We will write some text here soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="recent-works">
        <div class="container">
            <div class="center fadeInDown">
                <h2>Recent Works</h2>
                <p class="lead">We will write some text here soon</p>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 single-work">
                    <div class="recent-work-wrap">
                        <img class="img-fluid" src="images/portfolio/item-1.png" alt=""/>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 single-work">
                    <div class="recent-work-wrap">
                        <img class="img-fluid" src="images/portfolio/item-2.png" alt=""/>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 single-work">
                    <div class="recent-work-wrap">
                        <img class="img-fluid" src="images/portfolio/item-3.png" alt=""/>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 single-work">
                    <div class="recent-work-wrap">
                        <img class="img-fluid" src="images/portfolio/item-4.png" alt=""/>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 single-work">
                    <div class="recent-work-wrap">
                        <img class="img-fluid" src="images/portfolio/item-5.png" alt=""/>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 single-work">
                    <div class="recent-work-wrap">
                        <img class="img-fluid" src="images/portfolio/item-6.png" alt=""/>
                    </div>
                </div>
            </div>
            <div class="clearfix text-center">
                <br><br><br>
                <a class="btn btn-primary btn-lg">Show More</a>
                </br></br></br>
            </div>
        </div>
    </section>


    <section id="services" class="service-item">
        <div class="container">
            <div class="center fadeInDown">
                <h2>Our Service</h2>
                <p class="lead">We will write some text here soon</p>
            </div>

            <div class="row">

                <div class="col-sm-6 col-md-4">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-fluid" src="images/services/ux.svg"/>
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">UI/UX Design</h3>
                            <p>We will write some text here soon</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-fluid" src="images/services/web.svg"/>
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Web Design</h3>
                            <p>We will write some text here soon</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-fluid" src="images/services/motion.svg"/>
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Motion Graphics</h3>
                            <p>We will write some text here soon</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-fluid" src="images/services/mobile-ui.svg"/>
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Mobile UI/UX</h3>
                            <p>We will write some text here soon</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-fluid" src="images/services/web-app.svg"/>
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Web Applications</h3>
                            <p>We will write some text here soon</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4">
                    <div class="media services-wrap fadeInDown">
                        <div class="pull-left">
                            <img class="img-fluid" src="images/services/mobile-ui.svg"/>
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">SEO Marketing</h3>
                            <p>We will write some text here soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="partner">
        <div class="container">
            <div class="center fadeInDown">
                <h2>Our Partners</h2>
                <p class="lead">We will write some text here soon</p>
            </div>
            <div class="partners">
                <ul>
                    <li>
                        <a href="#"><img class="img-responsive fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="images/partners/brand-1.png"/></a>
                    </li>
                    <li>
                        <a href="#"><img class="img-responsive fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms" src="images/partners/brand-2.png"/></a>
                    </li>
                    <li>
                        <a href="#"><img class="img-responsive fadeInDown" data-wow-duration="1000ms" data-wow-delay="900ms" src="images/partners/brand-3.png"/></a>
                    </li>
                    <li>
                        <a href="#"><img class="img-responsive fadeInDown" data-wow-duration="1000ms" data-wow-delay="1200ms" src="images/partners/brand-4.png"/></a>
                    </li>
                    <li>
                        <a href="#"><img class="img-responsive fadeInDown" data-wow-duration="1000ms" data-wow-delay="1500ms" src="images/partners/brand-5.png"/></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>



    <section id="bottom">
        <div class="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div class="row">

                <div class="col-md-2">
                    <a href="#" class="footer-logo">
                        <img src="images/logo-black.png" alt="logo"/>
                    </a>
                </div>
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="widget">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="about-us.html">About us</a></li>
                                    <li><a href="about-us.html#team-area">Meet the team</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="widget">
                                <h3>Developers</h3>
                                <ul>
                                    <li><a href="#">Web Development</a></li>
                                    <li><a href="#">SEO Marketing</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Email Marketing</a></li>
                                    <li><a href="#">Article Writing</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="widget">
                                <h3>Our Partners</h3>
                                <ul>
                                    <li><a href="#">Adipisicing Elit</a></li>
                                    <li><a href="#">Eiusmod</a></li>
                                    <li><a href="#">Tempor</a></li>
                                    <li><a href="#">Veniam</a></li>
                                    <li><a href="#">Exercitation</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  

    <footer id="footer" class="midnight-blue">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    &copy; 2021 <a target="_blank" href="#" title="Our Company">Cortale</a>. All Rights Reserved.
                </div>
                <div class="col-sm-6">
                <ul class="pull-right">
                    <section className="router-section">
                        <button onClick={handleRedirect('/about')} className="router-link">About Us</button>
                        <button onClick={handleRedirect('/portfolio')} className="router-link">Portfolio</button>
                        <button onClick={handleRedirect('/calculator')} className="router-link">Calculator</button>
                        <button onClick={handleRedirect('/info')} className="router-link">User profile</button>
                        <button onClick={handleRedirect('/register')} className="router-link">Register</button>
                        <button onClick={handleRedirect('/signIn')} className="router-link">Sign in</button>
                    </section>
                </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
};

export default MainPage;