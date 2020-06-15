import React,{Component} from 'react';
import Header from '../../../components/layout/frontend/header/header';  //IMPORT HEADER
import Footer from '../../../components/layout/frontend/footer/footer'; //IMPORT FOOTER
import Banner_slider from '../../../components/banner_slider/slider'; //IMPORT SLIDER
import Gallery from "react-photo-gallery"; //IMPORT PHOTO GALLERY
import Carousel, { Modal, ModalGateway } from "react-images"; //IMPORT MODEL 
import { photos } from "./photos";//IMPORT GALLERY PHOTOS
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';

function Home() {

     //Page start from top
     var htmlBody = document.getElementsByTagName("html")[0];
     htmlBody.scrollTop = 0;

    const [currentImage, setCurrentImage] = React.useState(0);
    const [viewerIsOpen, setViewerIsOpen] = React.useState(false);
  
    const openLightbox = React.useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    // SET META DATA
    const meta = {
        title: 'Lucknow wedding studios :: Best wedding photographer in Lucknow',
        description: 'Best wedding photographer in Lucknow',
        meta: {
            charset: 'utf-8',
            name: {
            keywords: 'Lucknow Wedding Studio, photographer in Lucknow, Best wedding photographer in Lucknow, cool photos, bride photography, Cinematic wedding teaser, Best wedding photographer in Lucknow, Cinematic wedding videographer, wedding highlights, North indian wedding videos, Wedding Planner in Lucknow, Wedding Planner in Gomti Nagar, Candid Photographer in Lucknow, Cinematic Video in Lucknow, Pre-Wedding Photographer in Lucknow, Sikh Wedding Photographer in Lucknow, Muslim Wedding Photographer in Lucknow, Maternity photoshoot in lucknow, Blogger Shoot in Lucknow, Destination wedding photography in lucknow, Best Photographer in Lucknow, Product Photoshoot, Food Photoshoot, Holiday Photoshoot, Indoor Photography, NewBorn Photoshoot, Baby Photoshoot, Real estate Photography, Interior photography and exterior photography, Social media photography, sports photography, time-lapse photography Traveler photography, underwater photography, Wildlife photographers,Lucknow Wedding Studio,Cinematic wedding teaser,Best wedding photographer in Lucknow,Cinematic wedding videographer,wedding highlights,North indian wedding videos,Wedding Planner in Lucknow,Wedding Planner in Gomti Nagar,Candid Photographer in Lucknow,Cinematic Video in Lucknow,Pre-Wedding Photographer in Lucknow,Sikh Wedding Photographer in Lucknow,Muslim Wedding Photographer in Lucknow,Maternity photoshoot in lucknow,Blogger Shoot in Lucknow'
            }
        }
    };
    

  return (
        <div>
            <DocumentMeta {...meta}>
            </DocumentMeta>
            <Header/>
                <div className="slider_area">
                    <div className="slider_active owl-carousel">
                         <Banner_slider/> 
                    </div>
                </div>
                <div className="photography_skill_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-11 col-md-12">
                                <div className="section_title text-center">
                                    <h3>INDIAN WEDDING PHOTOGRAPHY & VIDEO FOR THE MODERN COUPLE</h3>
                                    <p>We can conquer the world with our candid wedding photographs!!The best shots are clicked when the one who is being clicked is unaware of it. Yes, the best shots are the natural ones, the candid ones. The one where you are as yourself. Your<strong> natural shot</strong> is your best pose. Our <strong>candid photography</strong> unit is an expert in <strong>candid wedding photography</strong>. They are always alert in capturing you and your better half in the right natural pose.</p><p>Our <strong>candid wedding photography</strong> services allow the bride and groom to be themselves and totally absorb in the biggest moment of their life letting others know about their relationship goals and love.</p>
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
                                    <h3>Wedding Planner </h3>
                                    <p>Our team is always there to provide a complete solution which makes the day more memorable<br></br>  to procure the required experience that helps you in speculating on us to tell the story.<br></br>  We are even kept in several situations where we encounter unusual time constraints <br></br> and issues with lighting.<br></br>
                                    </p>
                                    Need help? Request a call back from us  <a href="https://api.whatsapp.com/send?phone=07394019474" className="boxed-btn3"> Yes, Call Me </a>
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery_area">
                   <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="section_title text-center mb-50">
                                    <h3>Gallery</h3>
                                    <p>Lucknow wedding photographers provides a wide range of specialized photography and videography services to suit any wedding-related occasion. We handle everything from basic on-location shoots to complex aerial shots using multiple remote-controlled helicams. Our experienced photographers and videographers work with state-of-the-art equipment. We capture the finest details of any event ranging from an engagement ceremony to a post-wedding shoot.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Gallery photos={photos} onClick={openLightbox} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                                />
                            </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                    <div className="home_know_more">
                    <Link className="black_btn" to="albums.html">Load more..</Link>
                    </div>
                </div>

                <div className="team_area">
                    <div className="container">
                        <div className="border_bottom">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single_team">
                                        <div className="team_thumb">
                                            <img src="../assets/img/team/CandidPhotography.jpg" alt="" />
                                        </div>
                                        <div className="team_info text-center">
                                            <h3>Candid Photography</h3>
                                            <p>The best shots are clicked when the one who is being clicked is unaware of it. Yes, the best shots are the natural ones, the candid ones. The one where you are as yourself. Your natural shot is your best pose. Our candid photography unit is an expert in candid wedding photography.</p>
                                            <div className="social_link">
                                                <ul>
                                                    <li><a href="https://www.facebook.com/lucknowweddingstudio/">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li><a href="https://www.youtube.com/channel/UC5U91LTdm-WEJkSeUl91ohQ">
                                                            <i className="ti-youtube"></i>
                                                        </a>
                                                    </li>
                                                    <li><a href="https://www.instagram.com/lucknow_wedding_studio/">
                                                            <i className="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single_team">
                                        <div className="team_thumb">
                                            <img src="../assets/img/team/Cinematography.jpg" alt="" />
                                        </div>
                                        <div className="team_info text-center">
                                            <h3>Cinematography</h3>
                                            <p> Here, we create behind the lens a perfect summary from the sets of your wedding. A beautiful depiction of the scenes from your wedding, worth forever, the feelings, the emotions, the people who matter; our expert photographers and designers blend it in all in the perfect cinematic wedding film for you.</p>
                                            <div className="social_link">
                                                <ul>
                                                    <li><a href="https://www.facebook.com/lucknowweddingstudio/">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li><a href="https://www.youtube.com/channel/UC5U91LTdm-WEJkSeUl91ohQ">
                                                            <i className="ti-youtube"></i>
                                                        </a>
                                                    </li>
                                                    <li><a href="https://www.instagram.com/lucknow_wedding_studio/">
                                                            <i className="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single_team">
                                        <div className="team_thumb">
                                            <img src="../assets/img/team/Prewedding.jpg" alt="" />
                                        </div>
                                        <div className="team_info text-center">
                                            <h3>Pre-wedding</h3>
                                            <p>The couples have different desires, they like to travel, visit places, go on a hike and some are likely to prefer nature over everything, hills and lush green mountains will be perfect for them. Some to be wed couples like an adventurous trip and some are excited to visit enchanting beaches. And some get more romantic when they seek escape amid the snowclad hills.</p>
                                            <div className="social_link">
                                                <ul>
                                                    <li><a href="https://www.facebook.com/lucknowweddingstudio/">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li><a href="https://www.youtube.com/channel/UC5U91LTdm-WEJkSeUl91ohQ">
                                                            <i className="ti-youtube"></i>
                                                        </a>
                                                    </li>
                                                    <li><a href="https://www.instagram.com/lucknow_wedding_studio/">
                                                            <i className="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single_team">
                                        <div className="team_thumb">
                                            <img src="../assets/img/team/Traditionalwedding.jpg" alt="" />
                                        </div>
                                        <div className="team_info text-center">
                                            <h3>Traditional wedding</h3>
                                            <p>Our team of best traditional wedding photographers in Lucknow are equipped with the necessary talent and resources to accompany you and your other half along with family and guests to your wedding traditional and make the affair a memorable one through beautiful traditional wedding photography.</p>
                                            <div className="social_link">
                                                <ul>
                                                    <li><a href="https://www.facebook.com/lucknowweddingstudio/">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li><a href="https://www.youtube.com/channel/UC5U91LTdm-WEJkSeUl91ohQ">
                                                            <i className="ti-youtube"></i>
                                                        </a>
                                                    </li>
                                                    <li><a href="https://www.instagram.com/lucknow_wedding_studio/">
                                                            <i className="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         
                <div className="instragram_area">
                    <div className="single_instagram">
                        <img src="img/instragram/1.png" alt="" />
                        <div className="ovrelay">
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="single_instagram">
                        <img src="img/instragram/2.png" alt="" />
                        <div className="ovrelay">
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="single_instagram">
                        <img src="img/instragram/3.png" alt="" />
                        <div className="ovrelay">
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="single_instagram">
                        <img src="img/instragram/4.png" alt="" />
                        <div className="ovrelay">
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="single_instagram">
                        <img src="img/instragram/5.png" alt="" />
                        <div className="ovrelay">
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="single_instagram">
                        <img src="img/instragram/6.png" alt="" />
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

export default Home;
