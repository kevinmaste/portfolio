import React from 'react';
import {MDBBtn, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBMask, MDBRow, MDBView} from "mdbreact";
import ccstranning from './../assets/csstest.png'
import ecommerce from './../assets/cedcomerce.png'
import startbucket from './../assets/startbuck projet.png'
import dom from './../assets/dom.png'
//je peut creer une boucle pour l'automatisation on verra ça plus tard

const Projet = () => {
    return (
        <MDBContainer>
            <section id={"sectionPorject"} className="text-center my-5">
                <h2 className="h1-responsive font-weight-bold my-5">
                    Projects
                </h2>
                <p className="grey-text w-responsive mx-auto mb-57">
                    Projets personnel réalisé , afin de progressé d'avantage avec le frameworks javascript
                    REACTJS
                </p>
                <MDBRow className="text-center">
                    <MDBCol lg={4} md={12} className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1">
                            <img src={ccstranning} alt="one" className="img-fluid"/>
                            {/*mettre un a href="#!"*/}
                            <MDBMask overlaye="white-slight"/>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">CSS Trainning</h4>
                            <p className="grey-text">
                                {/*verifiez les fautes d'hortographe*/}
                                Exercice réalisé pour s'entrainer au css , afin de progressé d'avantage
                                et ainsi de devenir meilleur en ce qui le concerne.
                            </p>
                            <MDBBtn color="indigo" size="sm">
                                <MDBIcon icon="clone"  className="left"/> Github link
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCol>
                    {/* Part 2 */}
                    <MDBCol lg={4} md={12} className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1">
                            <img src={ecommerce} alt="one" className="img-fluid"/>
                            {/*mettre un a href="#!"*/}
                            <MDBMask overlaye="white-slight"/>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">E-commerce</h4>
                            <p className="grey-text">
                                {/*verifiez les fautes d'hortographe*/}
                                Site E-commerce réalisé a l'aide de Reactjs ,Material UI,
                                Firebase pour l'autentification avec Google, parti d'un défis .
                            </p>
                            <MDBBtn color="indigo" size="sm">
                                <MDBIcon icon="clone"  className="left"/> Github link
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCol>
                    {/* Part 3 */}
                    <MDBCol lg={4} md={12} className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1">
                            <img src={startbucket} alt="one" className="img-fluid"/>
                            {/*mettre un a href="#!"*/}
                            <MDBMask overlaye="white-slight"/>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">Startbuck Projet</h4>
                            <p className="grey-text">
                                {/*verifiez les fautes d'hortographe*/}
                                Le but, était de reproduire l'interface graphique de Startbuck
                                toujours dans le but de progréssé et devenir meilleur.
                            </p>
                            <MDBBtn color="indigo" size="sm">
                                <MDBIcon icon="clone"  className="left"/> Github link
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCol>
                    {/* Part 4*/}
                    <MDBCol lg={4} md={12} className="mb-lg-0 mb-4 mt-2">
                        <MDBView className="overlay rounded z-depth-1">
                            <img src={dom} alt="one" className="img-fluid"/>
                            {/*mettre un a href="#!"*/}
                            <MDBMask overlaye="white-slight"/>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">Digital Expert</h4>
                            <p className="grey-text">
                                {/*verifiez les fautes d'hortographe*/}
                                Projet réalisé en Wordpress pour une entreprise de Webmarketing dans le but
                                de faire connaitre leurs activité sur internet
                            </p>
                            <MDBBtn color="indigo" size="sm">
                                <MDBIcon icon="clone"  className="left"/> Link
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </section>
        </MDBContainer>
    );
};

export default Projet;