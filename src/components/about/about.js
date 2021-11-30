import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/about.gif';
import YButton from "../basic/YButton";

//import CSS
import './about.css';
class About extends React.Component {
    render() {
        return (
            <div className='about-control' style={{backgroundColor: "white"}}>
                <Container>
                    <Row>
                        <Col md={6} xs={12} className='about-description'>
                            <header>
                                <span>10000</span> PLANTS<br/>
                                <span>FOR A </span> GOOD CAUSE<br/>
                            </header>
                            <p>
                            Power Plants was developed by a group of 5 friends who all share an appreciation for nature. Our commitment to this project stretches far beyond a successful release, we want to build a community that benefits our planet. From exploring nature to exploring blockchain, we see no boundaries.
                            </p>
                            
                            {/* <div><YButton text='COMING SOON' /></div> */}
                        </Col>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{border: "solid black 2px", borderRadius: 0}}src={AboutGif} alt='about gif' />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;