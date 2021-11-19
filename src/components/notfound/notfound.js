import React from 'react';
import {MDBContainer} from "mdbreact";
import notfound from '../../assets/error.png'
import styled from "styled-components";
import backgroundBanner from "../../assets/passion.png";
import moi from "../../assets/mypicture.png";

const Notfound = () => {
    return (
        <MDBContainer>
            <div>
                <p className="font-weight-bold">ERROR <span>404</span> page not found</p>
            </div>
            <Imglobal >
                <Img src={notfound} alt="404"/>
            </Imglobal>
        </MDBContainer>

    );
};

export default Notfound;


const Imglobal = styled.div`
  width: 100%;
  display: flex;
  height: 75vh;
`

const Img =styled.img`
  width:100%
`





















