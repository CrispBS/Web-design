import React from "react";
import axios from 'axios';

import '../style.css';

export default class UserProfile extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data[0];
        this.setState({ persons });
      })
  }

  render() {
    return (
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
    <div class="container">
        <div class="row gutters">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
            <div class="card-body">
                <div class="account-settings">
                    <div class="user-profile">
                        <div class="user-avatar">
                            <img src="images/avatar.jpg"/>
                        </div>
                        <h5 class="user-name">{this.state.persons.name}</h5>
                    </div>
                        <h4 class="mb-2 text-primary">About</h4>
                        <p>I'm Serhiy. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
                </div>
            </div>
        </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
            <div class="card-body">
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h4 class="mb-2 text-primary">Personal Details</h4>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        
                            <label for="eMail">Full Name</label>
                            <div class="form-control">
                            <p>{this.state.persons.username}</p>
                            </div>
                        
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label for="eMail">Email</label>
                            <div class="form-control">
                                <p>{this.state.persons.email}</p>
                                </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <div class="form-control">
                            <p>{this.state.persons.phone}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label for="website">Website</label>
                            <div class="form-control">
                                <p>{this.state.persons.website}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h4 class="mt-3 mb-2 text-primary">Address</h4>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label for="ciTy">City</label>
                            <div class="form-control">
                                <p>Kyiv</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label for="Street">Street</label>
                            <div class="form-control">
                                <p>Khreshchatyk</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        </div>
    </div>    

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
  }
};