import React from 'react';
import {MDBAnimation, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import moi from "./../assets/mypicture.png"
import backgroundBanner from "./../assets/passion.png"
import styled from "styled-components";
import Projet from "./projet";
import Skills from "./skills";
import {Link} from "react-scroll"
import resume from "./../assets/Kevin_bitoumbou.pdf"

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
                        <MDBAnimation type="bounce" delay=".4s">
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
                                            Mon nom est Kevin Bitoumbou-Biboka, ??tudiant en Informatique. Je suis actuellement ?? la recherche d'une alternance/contrat pro, passionn?? et ayant envie d'avancer ,
                                            je suis pr??t ?? m'investir , ?? apprendre et ?? apporter mon savoir au sein d'une entreprise.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </MDBAnimation>
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