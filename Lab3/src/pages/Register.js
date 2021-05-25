import React from "react";
import '../style.css';
import axios from 'axios';

export default class Register extends React.Component {
  state = {
    name: '',
    email: '',
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
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

    <div class="text-center">
    <main class="form-register">
      <div class="text-center">
          <form className="form-registration" onSubmit={this.handleSubmit}>
            <h1 class="h1 mb-3 fw-normal">Create Account</h1>
            <input type="fullname" id="inputFullName" class="form-control" placeholder="Enter Full Name" required/>
            <input type="inputEmail" id="inputEmail" class="form-control" placeholder="Enter email address" required autofocus onChange={this.handleChangeName}/>
            <input type="inputpassword" id="inputpassword" class="form-control" placeholder="Enter password" required autofocus/>
            <input id="inputPhoneNumber" class="form-control" placeholder="Enter phone number" required/>
            <input id="inputWebsiter" class="form-control" placeholder="Enter website" required/>
            <input type="text" id="inputCity" class="form-control" placeholder="Enter City" required/>
            <input type="text" id="inputStreet" class="form-control" placeholder="Enter Street" required/>
            <input class="w-100 btn btn-lg btn-primary" type="button" value="Create Account" id="confirm"/>
          </form>
          <div class="row mt-3">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div id="error" class="h4 text-center text-danger"></div>
            </div>
          </div>  
          </div>
    </main>
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
                </ul>
              </div>
          </div>
      </div>
    </footer>
    </>
    )
  }
}