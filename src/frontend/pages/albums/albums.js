import React,{Component} from 'react';
import Header from '../../../components/layout/frontend/header/header';
import Footer from '../../../components/layout/frontend/footer/footer';
import '../albums/albums.css';
import Gallery from "react-photo-gallery"; //IMPORT PHOTO GALLERY
import Carousel, { Modal, ModalGateway } from "react-images"; //IMPORT MODEL 
import { photos } from "../../pages/albums/photo";//IMPORT GALLERY PHOTOS

function Albums() {

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


  return (
        <div>
            <Header/>
            <div className="bradcam_area breadcam_bg_2 black_overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text text-center">
                                <h3>Albums</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="photography_skill_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-md-9">
                            <div className="section_title text-center">
                                <h3>Being Best Wedding Photographers in lucknow</h3>
                                <p>Photography is all about capturing the right moments that connect the emotions closely through the senses, and produce great pleasure. It is a humble job where everything is handled with delicacy and precision to get the moment captured the way it should be. It all comes with experience, patience and attention to detail.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
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
            <br></br>
            <section className="sample-text-area">
                <div className="container box_1170">
                    <h3 className="text-heading">We Capture Emotions and Happiness. That's Why We're Called Best Candid Photographers in lucknow</h3>
                    <p className="sample-text">
                    Who is the one who have deeper attention to detail and capture the minute of moments? It is none other than the candid photographer. Event happens, and with it, memories are created. And, photographers are those who capture everything in frames.<br></br>

                    <br></br>Every experienced destination wedding photographer or candid wedding photographer know that there are moments and viewpoints where so many things fall into place, that they become special and/or typical. Being behind the camera, it is our responsibility to frame the places, events, and people that are important, beautiful, or special.
                    
                    <br></br><br></br>We take it as a personal responsibility to frame and cast everything, holistically and distinctively. Our expertise in candid photography captures the emotions and moments just as they are. We believe in building stories and telling them frame by frame and moment by moment. We know you are more beautiful when you are natural. When we say natural, it means instinctive motion of sentiments and reactions. And, down the line, when all these moments converge on a single canvas, it gives bigger happiness.
                    </p>
                </div>
            </section>
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

export default Albums;