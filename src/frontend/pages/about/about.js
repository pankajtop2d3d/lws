import React,{Component} from 'react';
import Header from '../../../components/layout/frontend/header/header';
import Footer from '../../../components/layout/frontend/footer/footer';
import '../about/about.css';
import { Link } from 'react-router-dom';

function About() {

  //Page start from top
  var htmlBody = document.getElementsByTagName("html")[0];
  htmlBody.scrollTop = 0;
  
  return (
        <div>
            <Header/>
            <div className="bradcam_area bradcam_bg_1 black_overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text text-center">
                                <h3>About Us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wild_photography">
                <div className="container-fluid p-0">
                    <div className="row no-gutters align-items-center ">
                        <div className="col-lg-6">
                            <div className="wildlife_photo">
                            <img src="../assets/img/photography/1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_title">
                                <h3>INDIAN WEDDING PHOTOGRAPHY & VIDEO FOR THE MODERN COUPLE</h3>
                                <p>Welcome to Lucknow wedding photographers! We are a boutique Candid Wedding Photography Studio based out of Lucknow, India and are known for a fun, off-beat and modern approach to creating stories from the best day in your life. we started photographing Indian weddings in 2008, and since then have created hundreds of unique love stories across the world. We are passionate, hard-working and an incredibly motivated team; we love Indian weddings, and can’t wait to be a part of yours!</p>
                                <Link className="black_btn" to="contact.html">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="photography_skill_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-md-9">
                            <div className="section_title text-center">
                                <h3>World class photographers</h3>
                                <p>We can conquer the world with our candid wedding photographs!!The best shots are clicked when the one who is being clicked is unaware of it. Yes, the best shots are the natural ones, the candid ones. The one where you are as yourself. Your natural shot is your best pose. Our candid photography unit is an expert in candid wedding photography. They are always alert in capturing you and your better half in the right natural pose.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="instragram_area">
                <div className="single_instagram">
                    <img src="../../assets/img/instragram/1.png" alt="" />
                    <div className="ovrelay">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="single_instagram">
                    <img src="../../assets/img/instragram/2.png" alt="" />
                    <div className="ovrelay">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="single_instagram">
                    <img src="../../assets/img/instragram/3.png" alt="" />
                    <div className="ovrelay">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="single_instagram">
                    <img src="../../assets/img/instragram/4.png" alt="" />
                    <div className="ovrelay">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="single_instagram">
                    <img src="../../assets/img/instragram/5.png" alt="" />
                    <div className="ovrelay">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="single_instagram">
                    <img src="../../assets/img/instragram/6.png" alt="" />
                    <div className="ovrelay">
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
          <Footer/>	
        </div>
  );
}

export default About;