import React from 'react';
import {MDBCard, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdbreact";
import styled from "styled-components";
import jacques from './../assets/jacquesAmyot.jpg'
import supinfo from './../assets/supinfo.jpg'
import NavSection from "./navSection";

const Home = () => {
    return (
        <>
            <NavSection/>
            <main id="section1">
                <MDBContainer className="text-center my-5">
                    <p><strong>Welcome to my portefolio</strong></p>
                    <MDBRow>
                        <MDBCol md='6'>
                            <MDBCardJacques
                                className="card-image"
                            >
                                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                                    <div>
                                        <h5 className="pink-text d-inline-flex">
                                            <MDBIcon icon="school"/><span>School</span>
                                        </h5>
                                        <MDBCardTitle tag={"h3"} className="pt-2">
                                            <strong>Jacques Amyot</strong>
                                        </MDBCardTitle>
                                        <p>
                                            Jacques Amyot, c'est dans ce lycée que j'ai fait mon
                                            baccalauréat scientifiques spécialité Science-Physique, au cours de l'année 2016-2017.
                                        </p>
                                    </div>
                                </div>
                            </MDBCardJacques>
                        </MDBCol>

                        <MDBCol md="6">
                            <MDBCardSupinfo className="card-image">
                                <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
                                    <div>
                                        <h5 className="pink-text d-inline-flex">
                                            <MDBIcon icon="school"/><span>School</span>
                                        </h5>
                                        <MDBCardTitle tag={"h3"} className="pt-2">
                                            <strong>Supinfo</strong>
                                        </MDBCardTitle>
                                        <p>
                                            Supinfo, c'est dans cette école que je passe actuellement
                                            mon cursus universitaire afin de devenir ingénieur dans le domaine de l'informatique.
                                        </p>
                                    </div>
                                </div>
                            </MDBCardSupinfo>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </main>
        </>
    );
};

export default Home;


const MDBCardSupinfo = styled(MDBCard)`
  background-image: url(${supinfo});
  background-repeat: no-repeat;
  background-size:cover;

`
const MDBCardJacques = styled(MDBCard)`
  background-image: url(${jacques});
  background-repeat: no-repeat;
  background-size:cover;
`




