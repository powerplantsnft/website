import React from "react";

import Logo from '../../assets/logo.jpg'
import il from '../../assets/CenterPic.png'

//import css
import './header.css';

import {
    Container,
    Navbar,
    Nav,
} from 'react-bootstrap';


import './footer.css';

//import social icons
import {
    BsTwitter,
    BsDiscord,
    BsInstagram
} from 'react-icons/bs';
//import components
import YButton from "../basic/YButton";
function onMintClick() {
    document.getElementById("mint").scrollIntoView();
    // alert("Your dick is hard!");
}
function onTeamClick() {
    document.getElementById("team").scrollIntoView();
}
function onRoadClick() {
    document.getElementById("roadmap").scrollIntoView();
}
function onWhitelistClick() {
    document.getElementById("whitelist").scrollIntoView();
}

function onSocialsClick() {
    document.getElementById("socials").scrollIntoView();
}

function openSea() {
    window.open("https://opensea.io/");
}
class Header extends React.Component {
    render() {
        return (
            <>

                <div className='header-control'>
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand href="#home" style={{paddingTop: 10}}>
                                <img src={il} width={289} height={115.1} alt='logo' />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav style={{backgroundColor: "black", borderRadius: 0, padding: "0 20px 0 20px"}}>
                                    <Nav.Link className="bruh" style={{ fontWeight: 900, backgroundColor: "black", borderRadius: 30 }}
                                        onClick={onMintClick} >MINT</Nav.Link>
                                    <Nav.Link className="bruh" style={{ fontWeight: 900, backgroundColor: "black", borderRadius: 30 }}
                                        onClick={onRoadClick}>ROADMAP</Nav.Link>
                                    <Nav.Link className="bruh" style={{ fontWeight: 900, backgroundColor: "black", borderRadius: 30 }}
                                        onClick={onTeamClick} >TEAM</Nav.Link>
                                    
                                    {/* onClick={() => window.location.replace('/#roadmap')} >ROADMAP</Nav.Link> */}

                                    {/* <Nav.Link className="bruh" style={{ fontWeight: 900, backgroundColor: "black", borderRadius: 30 }}
                                        onClick={onWhitelistClick} >WHITELIST</Nav.Link> */}
                                    {/* <Nav.Link> */}

                                    <Nav.Link className="bruh" style={{ fontWeight: 900, backgroundColor: "black",borderRadius: 30  }}
                                        onClick={openSea}>OPENSEA</Nav.Link>
                                        {/* <text style={{ width: 20 }}></text>
                                    <Nav.Link><a style={{ backgroundColor: "#32CD32", padding: 10.5, margin: 0,borderRadius: 30,textDecoration: "none", color: "white"}} target="_blank" rel="noopener noreferrer" href="https://instagram.com/dickpixnft"> <BsInstagram size={32} /></a></Nav.Link>
                                    <Nav.Link><a style={{ backgroundColor: "#32CD32", padding: 10.5, margin: 0,borderRadius: 30,textDecoration: "none", color: "white"}} target="_blank" rel="noopener noreferrer" href="https://twitter.com/thedickpixnft"> <BsTwitter size={32} /></a></Nav.Link>
                                    <Nav.Link><a style={{ backgroundColor: "#32CD32", padding: 10.5, margin: 0,borderRadius: 30,textDecoration: "none", color: "white"}} target="_blank" rel="noopener noreferrer" href="https://discord.gg/SgJyg5Wx/"> <BsDiscord size={32} />   </a></Nav.Link> */}

                                    <text style={{ width: 0 }}></text>
                                    <div>
                                        {/* <a style={{ backgroundColor: "#32CD32", padding: 20, textDecoration: "none", color: "white", paddingRight: 10 }} target="_blank" rel="noopener noreferrer" href="https://instagram.com/dickpixnft"> <BsInstagram size={32} /></a>
                                        <a style={{ backgroundColor: "#32CD32", padding: 20, textDecoration: "none", color: "white", paddingLeft: 10, paddingRight: 10 }} target="_blank" rel="noopener noreferrer" href="https://twitter.com/thedickpixnft"> <BsTwitter size={32} /></a>
                                        <a style={{ backgroundColor: "#32CD32", padding: 20, textDecoration: "none", color: "white", paddingLeft: 10 }} target="_blank" rel="noopener noreferrer" href="https://discord.gg/SgJyg5Wx/"> <BsDiscord size={32} />   </a> */}
                                    </div>
                                    {/* <a href="https://google.com/"><YButton text='OPENSEA' /></a>
                                    </Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className='header-content'>
                        {/* <h1><img className="thePicture" src={il} /></h1> */}
                        <div className='header-content-buttons-container'>
                            {/* <YButton text='DISCORD' /> &nbsp;
                        <YButton text='TWITTER' /> */}
                        </div>
                    </div>
                    <div></div>
                </div>
            </>
        );
    }
}

export default Header;