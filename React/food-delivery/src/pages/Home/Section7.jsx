import React from 'react'
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Section7 = () => {
    return (
        <>
            <section className="contact_section">
                <Container>
                    <Row className='justify-content-center'>
                        <Col sm={8} className='text-center'>
                            <h4>We Guarantee</h4>
                            <h2>30 Minutes Delivery!</h2>
                            <p>Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                                dolor primis libero tempus, blandit a cursus varius luctus neque
                                magna
                            </p>
                            <Link to="/" className=' btn_red px-4 py-2 rounded-0'>Call: 767-187-9587</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section7
