import React from 'react';
import styled from "styled-components";
import banner from "./../assets/firstlook.gif"
import { MDBIcon, MDBMask, MDBView} from "mdbreact";
import { Link, } from "react-scroll";



const NavSection = () => {

    return (
        <>
            <header>
                <MDBView src={banner}>
                    <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                        <h2>Web Developper Junior</h2>
                        <h5>
                            You can leave the comment in the comment section , or send me a message if
                            you appreciate the web site
                        </h5>
                        <p>I'm searching an Alternance</p><br />
                        <ButtonUI to={"section1"} smooth={true}  className="btn btn-cyan">
                          Click
                        <MyIcon icon="caret-down"/>
                        </ButtonUI>
                    </MDBMask>
                </MDBView>
            </header>
        </>
    );
};

export default NavSection;

const MyIcon = styled(MDBIcon)`
  transition: transform 2s ease-in-out;
    &:hover{
      transform: rotate(180deg);
    }
`

const ButtonUI = styled(Link)`
  border-radius: 50px;
  transition: background-color 2s ease-in-out;
  &:hover{
    background-color:blueviolet !important;
  }
`
