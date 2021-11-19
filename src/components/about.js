import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import moi from "./../assets/mypicture.png"
import backgroundBanner from "./../assets/passion.png"
import styled from "styled-components";
import Projet from "./projet";
import Skills from "./skills";
import {Link} from "react-scroll"
import resume from "./../assets/Kevin_bitoumboucv.pdf"

const About = () => {
    return (
        <>
            {/*voir le probleme du responsive*/}

            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <div className="d-flex justify-content-center bg-dark fixed-bottom">
                            {/* Revoir ce que propose le module */}
                            <NewLink to="sectionPorject" className="btn mr-2 text-white font-weight-bold">Projects</NewLink>
                            <NewLink to="sectionSkills" className="btn mr-2 text-white font-weight-bold">Skills</NewLink>
                            <Newa href={resume} download className="btn mr-2 text-white font-weight-bold">Resume</Newa>
                        </div>
                    </MDBCol>

                </MDBRow>
                <MDBRow className='justify-content-center mt-5'>
                    <MDBColNew>
                        <section>
                            <div className="card card-cascade wider reverse my-4">
                                <div className="view view-cascade overlay">
                                    <img src={backgroundBanner} alt="background" className="img-fluid"/>

                                        <div className="mask rgba-white-slight waves-effect waves-light"></div>

                                </div>
                                <div className="card-body card-body-cascade text-center">
                                    <h4 className="card-title">ABOUT ME</h4>
                                    <h5 className="indigo-text">Mes Projets - Mes Competances - Mes Hobbits</h5>
                                    <ImgNew src={moi} alt="my head" className="rounded-circle"/>
                                    <p className="card-text">
                                        Mon nom est Kevin Bitoumbou-Biboka, étudiant en
                                        Informatique. Je suis actuellement à la recherche d'une
                                        alternance/contrat pro, passionné et ayant envie d'avancer , je
                                        suis prêt à m'investir , à apprendre et à apporter mon savoir au
                                        sein d'une entreprise.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </MDBColNew>
                </MDBRow>
                <Projet/>
                <Skills/>
            </MDBContainer>

            {/*mettre les projets */}

        </>
    );
};

export default About;

const MDBCardImageNew = styled(MDBCardImage)`
  height: 20rem;
`

const MDBColNew = styled(MDBCol)`
  max-width: 40rem;

`

const ImgNew = styled.img`
  width:100px;
  height:100px
`

const Newa=styled.a`
    &:hover{
      background-color:cadetblue;
    }
`
const NewLink=styled(Link)`
  &:hover{
    background-color:cadetblue;
  }
`