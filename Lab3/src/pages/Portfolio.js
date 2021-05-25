import React from "react";
import '../style.css';

const Portfolio = () => {
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
    <div class="page-title" style="background-image: url(images/page-title.png)">
        <h1>Portfolio</h1>
    </div>
    
    <section id="portfolio">
        <div class="container">
            <div class="center">
                <h2>Recent work</h2>
                <p class="lead">We will write some text here soon</p>
            </div>

            <div class="row">
                <div class="portfolio-items">
                    <div class="portfolio-item apps col-xs-12 col-sm-4 col-md-3 single-work">
                            <img class="img-responsive" src="images/portfolio/item-1.png" alt=""/>
                    </div>
                    <div class="portfolio-item joomla bootstrap col-xs-12 col-sm-4 col-md-3 single-work">
                            <img class="img-responsive" src="images/portfolio/item-2.png" alt=""/>                       
                    </div>
                    <div class="portfolio-item bootstrap wordpress col-xs-12 col-sm-4 col-md-3 single-work">
                            <img class="img-responsive" src="images/portfolio/item-3.png" alt=""/>
                    </div>
                    <div class="portfolio-item joomla wordpress apps col-xs-12 col-sm-4 col-md-3 single-work">
                            <img class="img-responsive" src="images/portfolio/item-4.png" alt=""/>
                    </div>
                    <div class="portfolio-item joomla html bootstrap col-xs-12 col-sm-4 col-md-3 single-work">
                            <img class="img-responsive" src="images/portfolio/item-5.png" alt=""/>
                    </div>
                    <div class="portfolio-item wordpress html apps col-xs-12 col-sm-4 col-md-3 single-work">
                            <img class="img-responsive" src="images/portfolio/item-1.png" alt=""/>
                    </div>
                    <div class="portfolio-item joomla html bootstrap col-xs-12 col-sm-4 col-md-3 single-work">
                            <img class="img-responsive" src="images/portfolio/item-6.png" alt=""/>
                    </div>
                    <div class="portfolio-item wordpress html apps col-xs-12 col-sm-4 col-md-3 single-work">
                            <img class="img-responsive" src="images/portfolio/item-2.png" alt=""/>
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

export default Portfolio;