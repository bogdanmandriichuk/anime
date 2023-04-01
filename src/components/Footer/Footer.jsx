import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="mt-5, footer" >
            <Container className='pt-4'>
                <Row>
                    <Col md={4}>
                        <h5>Контакти</h5>
                        <p>Електронна пошта: example@mail.com</p>
                        <p>Телефон: +380123456789</p>
                    </Col>
                    <Col md={4}>
                        <h5>Про нас</h5>
                        <p>Ми - команда професіоналів, які надають послуги в області веб-розробки і дизайну.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Соціальні мережі</h5>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;