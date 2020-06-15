import React, { Component }  from 'react';
import '../footer/footer.css';
//import '../../../../assets/js/vendor/jquery-1.12.4.min.js';
import '../../../../assets/js/vendor/modernizr-3.5.0.min.js';
import '../../../../assets/js/popper.min.js';
// import '../../../../assets/js/owl.carousel.min.js';
// import '../../../../assets/js/isotope.pkgd.min.js';
// import '../../../../assets/js/waypoints.min.js';
// import '../../../../assets/js/jquery.counterup.min.js';
// import '../../../../assets/js/imagesloaded.pkgd.min.js';
// import '../../../../assets/js/scrollIt.js';
// import '../../../../assets/js/jquery.scrollUp.min.js';
// import '../../../../assets/js/wow.min.js';
// import '../../../../assets/js/nice-select.min.js';
// import '../../../../assets/js/jquery.slicknav.min.js';
// import '../../../../assets/js/jquery.magnific-popup.min.js';
// import '../../../../assets/js/plugins.js';
// import '../../../../assets/js/gijgo.min.js';
// import '../../../../assets/js/jquery.ajaxchimp.min.js';
// import '../../../../assets/js/mail-script.js';
//import '../../../../assets/js/main.js';



function Footer() {

    return (
        <footer className="footer">
            <div className="copy-right_text">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-md-8">
                            <p className="copy_right ">
                                    Copyright &copy;Lucknow wedding studios
                            </p>
                        </div>
                        <div className="col-xl-5 col-md-4">
                            <div className="socail_links">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/lucknowweddingstudio/">
                                            <i className="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UC5U91LTdm-WEJkSeUl91ohQ">
                                            <i className="ti-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/lucknow_wedding_studio/">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;