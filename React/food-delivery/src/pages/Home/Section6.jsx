import React from 'react'
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'
import { Link } from "react-router-dom";
import User1 from "../../Food_Assets/assets/blog/review-author-1.jpg"
import User2 from "../../Food_Assets/assets/blog/review-author-2.jpg"
import User3 from "../../Food_Assets/assets/blog/review-author-3.jpg"
import User4 from "../../Food_Assets/assets/blog/review-author-5.jpg"

const Section6 = () => {
    return (
        <>
            <section className="blog_section">
                <Container>
                    <Row>
                        <Carousel >
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User1} alt="user-1" className='img-fluid' />
                                    </div>
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "
                                    </p>
                                    <div className="item_rating mb-2" >
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User2} alt="user-2" className='img-fluid' />
                                    </div>
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "
                                    </p>
                                    <div className="item_rating mb-2" >
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User3} alt="brand-1" className='img-fluid' />
                                    </div>
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "
                                    </p>
                                    <div className="item_rating mb-2" >
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User4} alt="brand-1" className='img-fluid' />
                                    </div>
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "
                                    </p>
                                    <div className="item_rating mb-2" >
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section6
