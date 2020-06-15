import React,{Comment} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../assets/css/slick.css';


function Banner_slider() {
    return (
        <Carousel >
            <div>
                <img src="'../../assets/img/banner/banner1.jpg" />
            </div>
            <div>
                <img src="'../../assets/img/banner/banner2.jpg" />
            </div>  
        </Carousel>
    );
  }
 //ReactDOM.render(<Carousel />, document.querySelector('.slider_area'));

  export default Banner_slider;
