import React from 'react';
import {MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow} from "mdbreact";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/all";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {

    const scrollToUp =()=>{
        scroll.scrollToTop();
    }
    return (
        <MDBFooter color="cyan" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow className="justify-content-end">
                    <MDBCol md="6">
                        <h5 className="title">Content</h5>
                        <p>
                            This web site was created by me, for this I used mdbreact and bootstrap for the frontend.
                        </p>
                    </MDBCol>
                    <MDBCol md="6" className="d-flex flex-column align-items-center">
                        <h5 className="title">Social network</h5>
                        <ul className="d-inline-flex">
                            <li className="list-unstyled">
                                <LinkPositionsNew href="https://www.linkedin.com/in/kevin-bitoumbou-biboka-6966b0156/" rel="noreferrer noopener" target="_blank">
                                    <BsLinkedinNew/>
                                </LinkPositionsNew>
                            </li>
                            <li className="list-unstyled">
                                <LinkPositionsNew href="https://github.com/kevinmaste" rel="noreferrer noopener" target="_blank">
                                    <BsGithubNew />
                                </LinkPositionsNew>
                            </li>
                            <li className="list-unstyled">
                                <LinkPositionsSpecial href="https://www.instagram.com/keykey6388/?hl=fr" rel="noreferrer noopener" target="_blank">
                                    <BsInstagramNew/>
                                </LinkPositionsSpecial>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6">
                        {/*'href="#firstsection" ';Mettre une petite  animation hover et au niveau mettre un props pour que sa depende de la page */}
                        <Link to="" onClick={scrollToUp} rel="noreferrer noopener">
                            <MDBIcon icon="caret-square-up" size="3x"/>
                        </Link>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: kevdev.jsk
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default Footer;


const BsLinkedinNew = styled(BsLinkedin)`
  width: 2em;
  height: 2em;
`
const BsGithubNew = styled(BsGithub)`
  width: 2em;
  height: 2em;
`

const BsInstagramNew = styled(BsInstagram)`
  width: 2em;
  height: 2em;
`
const LinkPositionsNew = styled.a`
  margin-right: 10px;
`
const LinkPositionsSpecial = styled.a`
  margin-right: 40px;
`