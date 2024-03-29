import React from "react";
import '../style.css';

const AboutUs = () => {
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
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="simple-calculator.html">Simple calculator</a></li>
                        <li><a href="engineering-сalculator.html">Engr сalculator</a></li>   
                        <li><a href="userprofile.html">User profile</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="signin.html">Sign in</a></li>
                    </section>    
                    </ul>
                </div>
            </div> 
        </nav>
    </header> 
    <div class="page-title" style="background-image: url(images/page-title.png)">
        <h1>About us</h1>
    </div>

    <section id="about-us">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="about-img">
                        <img src="images/about-img.png" alt=""/>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="about-content">
                        <h2>Who we are</h2>
                        <p>Photographs are a way of preserving a moment in our lives for the rest of our lives. Many of us have at least been tempted at the flashy array of photo printers which seemingly leap off the shelves at even the least tech-savvy. It surely seems old fashioned to talk about 35mm film and non-digital cameras in today’s day and age.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="team-area">
        <div class="container">
            <div class="center fadeInDown">
                <h2>Our Team</h2>
                <p class="lead">We will write some text here soon</p>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 single-team">
                    <div class="inner">
                        <div class="team-img">
                            <img src="images/team1.png" alt=""/>
                        </div>
                        <div class="team-content">
                            <h4>Jeffery Poole</h4>
                            <span class="desg">UI/UX Designer</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 single-team">
                    <div class="inner">
                        <div class="team-img">
                            <img src="images/team2.png" alt=""/>
                        </div>
                        <div class="team-content">
                            <h4>Isabelle Dean</h4>
                            <span class="desg">UI/UX Designer</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 single-team">
                    <div class="inner">
                        <div class="team-img">
                            <img src="images/team3.png" alt=""/>
                        </div>
                        <div class="team-content">
                            <h4>Mike Kennedy</h4>
                            <span class="desg">UI/UX Designer</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 single-team">
                    <div class="inner">
                        <div class="team-img">
                            <img src="images/team4.png" alt=""/>
                        </div>
                        <div class="team-content">
                            <h4>Edwin Gross</h4>
                            <span class="desg">UI/UX Designer</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 single-team">
                    <div class="inner">
                        <div class="team-img">
                            <img src="images/team5.png" alt=""/>
                        </div>
                        <div class="team-content">
                            <h4>Mable Schwartz</h4>
                            <span class="desg">UI/UX Designer</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 single-team">
                    <div class="inner">
                        <div class="team-img">
                            <img src="images/team6.png" alt=""/>
                        </div>
                        <div class="team-content">
                            <h4>Adele Washington</h4>
                            <span class="desg">UI/UX Designer</span>
                        </div>
                    </div>
                </div>
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
                        <button onClick={handleRedirect('/registration')} className="router-link">About Us</button>
                        <button onClick={handleRedirect('/signIn')} className="router-link">Sign In</button>
                        <button onClick={handleRedirect('/info')} className="router-link">User Info</button>
                        <button onClick={handleRedirect('/about')} className="router-link">About App</button>
                        <button onClick={handleRedirect('/calculator')} className="router-link">Calculator</button>
                        <li class="active"><a href="index.html">Home</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="simple-calculator.html">Simple calculator</a></li>
                        <li><a href="engineering-сalculator.html">Engr сalculator</a></li>   
                        <li><a href="userprofile.html">User profile</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="signin.html">Sign in</a></li>
                    </section>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="signin.html">Sign in</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
};

export default AboutUs;