import React from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import skills from "./../assets/skills.mp4"
import styled from "styled-components";
const Skills = () => {
    return (
        <MDBContainer>
            <section id="sectionSkills" className="text-center my-5">
                <h2 className="h1-responsive font-weight-bold my-5">
                    Skills
                </h2>
                <MDBRow>
                    <MDBCol>
                        <Newvideo autoPlay muted loop>
                            <source src={skills} type="video/mp4"/>
                            Sorry , your browser doesn't support embedded videos
                        </Newvideo>
                    </MDBCol>
                </MDBRow>
            </section>
        </MDBContainer>
    );
};

export default Skills;

const Newvideo = styled.video`
    max-width: 100%;
`

