import React,{Component,useState} from 'react';
//IMPORT CSS FILES 
import '../../../../assets/css/bootstrap.min.css';
import '../../../../assets/css/magnific-popup.css';
import '../../../../assets/css/font-awesome.min.css';
import '../../../../assets/css/themify-icons.css';
import '../../../../assets/css/nice-select.css';
import '../../../../assets/css/flaticon.css';
import '../../../../assets/css/gijgo.css';
import '../../../../assets/css/animate.min.css';
import '../../../../assets/css/slicknav.css';
import '../../../../assets/css/style.css';
import '../header/header.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';


function Header() {

	

	// const [fruit, setFruit] = useState('banana');
	// var fruitStateVariable = useState('banana'); // Returns a pair
	// console.log(fruitStateVariable[0]);
	// console.log(fruitStateVariable[1]);

    // MANAGE HEADER BAR
	$(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
        $("#sticky-header").removeClass("sticky");
        $('#back-top').fadeIn(500);
        } else {
        $("#sticky-header").addClass("sticky");
        $('#back-top').fadeIn(500);
        }
	});

	$('#slicknav_menu').hide();

    //MOBILE MENU HANDLER EVENT
	let mobileMenuHandler = (e) => {
		//alert('Hello PMK');
		//alert(e.target.value + ' button is clicked');
		$(this).hide();
	}

	const [mobile_menu_open, setOpen] = useState(false);

	//const [count, setCount] = useState(0);
	
  return (
	<header>
	   <div className="header-area ">
		 <div id="sticky-header" className="main-header-area">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-xl-3 col-lg-2">
						<div className="logo">
						   <img src="../../../../assets/img/logo.png" alt="" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-7">
						<div className="main-menu  d-none d-lg-block">

						{/* <div>
							<p>You clicked {count} times</p>
							<button onClick={() => setCount(count + 1)}>
								Click me
							</button>
						</div> */}
						
							<nav>
								<ul id="menu">
									<li><Link to="/">home</Link></li>
									<li><Link to="about.html">About</Link></li>
									<li><Link to="albums.html">Albums</Link></li>
									<li><Link to="#">Blog</Link></li>
									<li><Link to="contact.html">Contact</Link></li>
								</ul>
							</nav>
						</div>
					</div>
					<div className="col-xl-3 col-lg-3 d-none d-lg-block">
						<div className="social_links">
							<ul>
								<li><a href="https://www.facebook.com/lucknowweddingstudio/"> <i className="fa fa-facebook"></i> </a></li>
								<li><a href="https://www.youtube.com/channel/UC5U91LTdm-WEJkSeUl91ohQ"> <i className="fa fa-youtube-play"></i> </a></li>
								<li><a href="https://www.instagram.com/lucknow_wedding_studio/"> <i className="fa fa-instagram"></i> </a></li>
							</ul>
						</div>
					</div>
					<div className="col-12">
					  <div className="mobile_menu d-block d-lg-none">
						<div className="slicknav_menu">
								<a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed"  onClick={() => { setOpen(!mobile_menu_open); }}>
										<span className="slicknav_menutxt">MENU</span>
										<span className="slicknav_icon"><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span>
								</a>
								<ul  className='{mobile_menu_open ? "mobile_menu_open" : null} ' id="slicknav_menu"  aria-hidden="true" role="menu">
								<li><Link to="/">home</Link></li>
									<li><Link to="about.html">About</Link></li>
									<li><Link to="albums.html">Albums</Link></li>
									<li><Link to="#">Blog</Link></li>
									<li><Link to="contact.html">Contact</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

  );
}

export default Header;
