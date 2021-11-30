import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';

//import Assets
import il from '../../assets/about.gif';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: 'Placeholder',
                    title: 'Placeholder',
                    content: 'Placeholder'
                },
                {
                    tag: 'Placeholder',
                    title: 'Placeholder',
                    content: 'Placeholder'
                },
                {
                    tag: 'Placeholder',
                    title: 'Placeholder',
                    content: 'Placeholder'
                },
                {
                    tag: 'Placeholder',
                    title: 'Placeholder',
                    content: 'Placeholder'
                },
                {
                    tag: 'Placeholder',
                    title: 'Placeholder',
                    content: 'Placeholder'
                },
                {
                    tag: 'Placeholder',
                    title: 'Placeholder',
                    content: 'Placeholder'
                },
                {
                    tag: 'Placeholder',
                    title: 'Placeholder',
                    content: 'Placeholder'
                },
                {
                    tag: 'Placeholder',
                    title: 'Placeholder',
                    content: 'Placeholder'
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{textAlign: "center"}}>
                <Container >
                    <header style={{fontWeight: 900}}><span>POWER PLANTS</span> ROAD MAP</header>
                    <p className='roadmap-description'>
                    Our Roadmap is under construction!Placeholder
                    </p>
                    <Row style={{alignContent: "center", justifyContent: "center", textAlign: "center"}}>
                        <Col xs={12} md={6}>
                            <img src={il}/>
                        </Col>
                        <Col  style={{color: "black", alignContent: "center", justifyContent: "center", textAlign: "center"}}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return(
                                        <RoadMapItem style={{textAlign: "center", color: "black"}}key={index}
                                            tag= {item.tag}
                                            title= {item.title}
                                            content= {item.content} />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
}

export default RoadMap;