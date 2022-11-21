import React from 'react';
import Box from '@mui/material/Box';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Aos from 'aos';
import "aos/dist/aos.css";



function Banner(props) {
    React.useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    return (
        <>
            <Box className='banner'>
                <LazyLoadImage src="/images/1.jpg" alt="" />
                <div className="banner-text">
                    <h3 data-aos="fade-up" data-aos-duration="1000">Lorem ipsum Dummy Text</h3>
                    <p data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus blanditiis delectus, <br />sapiente praesentium distinctio voluptate est ipsa, rerum dolores modi architecto necessitatibus eum iste asperiores, numquam non corrupti. Maiores.</p>
                </div>
            </Box>
            <Box className='section'>
                <div className="hero-banner">
                    <LazyLoadImage src="/images/2.jpg" alt="" />
                    <div className="banner-text">
                        <h3 data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                        >Lorem ipsum Dummy Text</h3>
                        <p data-aos="fade-up"
                            data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus blanditiis delectus, <br />sapiente praesentium distinctio voluptate est ipsa, <br />rerum dolores modi architecto necessitatibus eum iste asperiores, <br />numquam non corrupti. Maiores.</p>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default Banner;