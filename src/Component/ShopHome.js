import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { product } from '../core/product';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Aos from 'aos';
import "aos/dist/aos.css";




function ShopHome(props) {
    React.useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="section">
            <div className="container">
                <div className="shop-home">
                    <div className="heading text-center">
                        <h1 data-aos="fade-up" data-aos-duration="1000">Shop Home Bars</h1>
                        <h3 data-aos="fade-up" data-aos-duration="1000">Choose from a variety of different styles to suit your home</h3>
                    </div>
                    <Grid container spacing={3} mt={4}>
                        {product.map((item, i) =>
                            <Grid item md={4} mb={4}>
                                <div className="product-details">
                                    <LazyLoadImage src={item.img} alt="" data-aos="fade-up" data-aos-duration="1000" />
                                    <p data-aos="fade-up" data-aos-duration="1000"><strike>{item.offPrice}</strike></p>
                                    <h2 data-aos="fade-up" data-aos-duration="1000">{item.mainPrice}</h2>
                                    <h3 data-aos="fade-up" data-aos-duration="1000">{item.productName}</h3>
                                    <Button variant='contained' data-aos="fade-up" data-aos-duration="1000">Buy Now ></Button>
                                </div>
                            </Grid>
                        )}
                    </Grid>
                </div>
                <Grid container spacing={10} mt={2} className="text-center">
                    {
                        [...Array(2)].map((item, i) =>
                            <Grid item md={6} mb={4} key={i}>
                                <div className="dummy-content">
                                    <LazyLoadImage src="/images/3.jpg" alt="" data-aos="fade-up"
                                        data-aos-duration="2000" />
                                    <h2 className='mb-1 mt-1' data-aos="fade-up"
                                        data-aos-duration="2000">lorem Dummy text</h2>
                                    <p data-aos="fade-up"
                                        data-aos-duration="2000">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, veritatis suscipit! Quae pariatur sed fugit, optio omnis architecto, sequi aspernatur ea ab mollitia minima. Itaque rem illo et reiciendis officiis.</p>
                                </div>
                            </Grid>
                        )
                    }
                </Grid>
                <div className="section">
                    {[...Array(4)].map((element, index) => {
                        if (index % 2 === 0) {
                            return <><div className='dummy-ele align-content'>
                                <div className="dummy-content-img">
                                    <LazyLoadImage src="/images/3.jpg" alt="" data-aos="fade-up"
                                        data-aos-duration="2000" />
                                </div>

                                <div className='dummy-para' >
                                    <h2 className='mb-1 mt-1' data-aos="fade-up"
                                        data-aos-duration="2000">lorem Dummy text</h2>
                                    <p data-aos="fade-up"
                                        data-aos-duration="2000">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, veritatis suscipit! Quae pariatur sed fugit, optio omnis architecto, sequi aspernatur ea ab mollitia minima. Itaque rem illo et reiciendis officiis.</p>
                                </div>
                            </div>

                            </>
                        }
                        return <>
                            <div className='dummy-ele align-content'>
                                <div className='dummy-para' >
                                    <h2 className='mb-1 mt-1' data-aos="fade-up"
                                        data-aos-duration="2000">lorem Dummy text</h2>
                                    <p data-aos="fade-up"
                                        data-aos-duration="2000">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, veritatis suscipit! Quae pariatur sed fugit, optio omnis architecto, sequi aspernatur ea ab mollitia minima. Itaque rem illo et reiciendis officiis.</p>
                                </div>
                                <div className="dummy-content-img">
                                    <LazyLoadImage src="/images/3.jpg" alt="" data-aos="fade-up"
                                        data-aos-duration="2000" />
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    );
}

export default ShopHome;