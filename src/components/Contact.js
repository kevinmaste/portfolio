import React, {useState} from 'react';
import {MDBCol, MDBContainer, MDBIcon, MDBInput, MDBMask, MDBRow, MDBView} from "mdbreact";
import contacts from "../assets/Contacttwo.gif"
import { Link, } from "react-scroll";
import styled from "styled-components";
import axios from "axios";
import {Alert} from "react-bootstrap";

const Contact = () => {
    const [name,setName] =useState()
    const [subject,setSubject]=useState()
    const [message,setMessage] = useState()
    const [colorChange,setColorChange] = useState(false)

    console.log("name: " + name)
    console.log("subject: " + subject)
    console.log("message: " + message)

    const refresh =()=>{
        setMessage('')
        setSubject('')
        setName('')
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        axios({
            method: 'POST',
            url: 'https://send-app-m.herokuapp.com/send',
            data:{
                name:name,
                objet:subject,
                message:message
            }
        })
            .then((response)=>{
                if (response.data.msg === 'success'){
                    setColorChange(true)
                    refresh()
                }else if (response.data.msg === 'fail'){
                    setColorChange(false)
                }
            })
    }
    return (
        <MDBContainer fluid >
            <MDBView src={contacts}>
                <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                    <h2>Contact</h2>
                    <h5>
                        You can contact me if you want for to tell me something, write below.
                    </h5>
                    <HoverLinks to="sectionContact" className="btn">
                        Contact
                    </HoverLinks>
                </MDBMask>
            </MDBView>
            <MDBContainer className="mt-4">
                <MDBRow className="justify-content-center" id="sectionContact">
                    <MDBCol md={6}>
                        <form action="" onSubmit={handleSubmit}>
                            {colorChange && <Alert variant="success"> Send</Alert>}
                            <p className="h5 text-center font-weight-bold mb-4">Write me</p>
                            <div className="grey-text">
                                <MDBInput value={name} onChange={(e => setName(e.target.value))} label="Your name" group type="text" validate error="wrong" success="right"/>
                                <MDBInput value={subject} onChange={(e => setSubject(e.target.value))} label="Subject"  group type="text" validate error="wrong" success="right"/>
                                <MDBInput value={message} onChange={(e => setMessage(e.target.value))} label="Your message"  group type="textarea" rows={3} validate error="wrong"/>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-amber">
                                    envoyer
                                    <MDBIcon far icon="paper-plane" className="ml-1"/>
                                </button>
                            </div>
                        </form>
                    </MDBCol>
                    <MDBCol md={6} className="">
                        <p className="h5 text-center mb-4 font-weight-bold" >Contact us me</p>
                        <div>
                            <MDBIcon icon="envelope" size={"2x"}/>
                            <p>E-mail:</p>
                            <p>kevinbitoumbou@gmail.com</p>
                        </div>
                        <div>
                            <MDBIcon icon="phone" size={"2x"}/>
                            <p>Phone</p>
                            <p>+33 7 81 18 83 67</p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBContainer>
    );
};

export default Contact;

const HoverLinks = styled(Link)`
  
  transition: background 2s ease-in-out;
  
  &:hover{
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(15,76,74,1) 23%, rgba(9,121,118,1) 35%, rgba(9,125,91,1) 45%, rgba(7,110,146,1) 55%, rgba(34,166,179,1) 66%, rgba(10,50,57,1) 78%);
  }
`