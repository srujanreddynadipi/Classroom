import React from 'react'
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'
import { Link } from "react-router-dom";
import StoreIos from "../../Food_Assets/assets/shop/appstore.png"
import StoreGoogle from "../../Food_Assets/assets/shop/googleplay.png"
import DownloadImage from "../../Food_Assets/assets/shop/e-shop.png"
import Brand1 from "../../Food_Assets/assets/brands/brand-11.png"
import Brand2 from "../../Food_Assets/assets/brands/brand-12.png"
import Brand3 from "../../Food_Assets/assets/brands/brand-13.png"
import Brand4 from "../../Food_Assets/assets/brands/brand-14.png"
import Brand5 from "../../Food_Assets/assets/brands/brand-15.png"
import Brand6 from "../../Food_Assets/assets/brands/brand-16.png"
import Brand7 from "../../Food_Assets/assets/brands/brand-17.png"
import Brand8 from "../../Food_Assets/assets/brands/brand-18.png"



const Section5 = () => {
    return (
        <>
            <section className='shop_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                            <h4>Download mobile App and</h4>
                            <h2>save up to 20%</h2>
                            <p>Aliquam a augue suscipit, luctus neque purus ipsum and neque
                                dolor primis libero tempus, blandit varius
                            </p>
                            <Link to="/">
                                <img src={StoreIos} alt="IOS" className='img-fluid store me-3' />
                            </Link>
                            <Link to="/">
                                <img src={StoreGoogle} alt="ANDROID" className='img-fluid  store me-3' />
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <img src={DownloadImage} alt="e-shop" className='img-fluid ' />
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="brand_section">
                <Container>
                    <Row>
                        <Carousel >
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="brand-img">
                                            <img src={Brand3} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand4} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand5} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand6} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand7} alt="brand-1" className='img-fluid' />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand8} alt="brand-1" className='img-fluid' />
                                        </div>
                                    </div>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section5
