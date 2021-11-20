import React from 'react';
import {MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBMask, MDBRow, MDBView} from "mdbreact";
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
                    Projets personnels réalisés, afin de progresser davantage avec le frameworks JavaScript REACTJS
                </p>
                <MDBRow className="text-center">
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1">
                            <img src={ccstranning} alt="one" className="img-fluid"/>
                            {/*mettre un a href="#!"*/}
                            <MDBMask overlaye="white-slight"/>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">CSS Trainning</h4>
                            <p className="grey-text">
                                {/*verifiez les fautes d'hortographe*/}
                                Exercice réalisé pour s'entraîner au css , afin de progresser davantage et ainsi de devenir meilleur en ce qui le concerne.
                            </p>
                            <a className="btn btn-cyan" rel="noreferrer noopener" href="https://github.com/kevinmaste/learn">
                                <MDBIcon icon="clone"  className="left"/> Github link
                            </a>
                        </MDBCardBody>
                    </MDBCol>
                    {/* Part 2 */}
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1">
                            <img src={ecommerce} alt="one" className="img-fluid"/>
                            {/*mettre un a href="#!"*/}
                            <MDBMask overlaye="white-slight"/>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">E-commerce</h4>
                            <p className="grey-text">
                                {/*verifiez les fautes d'hortographe*/}
                                Site E-commerce réalisé à l'aide de ReactJS, Material UI, Firebase pour l'authentification avec Google, parti d'un défi.
                            </p>
                            <a className="btn btn-cyan" rel="noreferrer noopener" href="https://github.com/kevinmaste/webMarket">
                                <MDBIcon icon="clone"  className="left"/> Github link
                            </a>
                        </MDBCardBody>
                    </MDBCol>
                    {/* Part 3 */}
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1">
                            <img src={startbucket} alt="one" className="img-fluid"/>
                            {/*mettre un a href="#!"*/}
                            <MDBMask overlaye="white-slight"/>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">Starbucks Projet</h4>
                            <p className="grey-text">
                                {/*verifiez les fautes d'hortographe*/}
                                Le but, était de reproduire l'interface graphique deStartbucks toujours dans le but de progressé et de devenir meilleur.
                            </p>
                            <a className="btn btn-cyan" rel="noreferrer noopener" href="https://github.com/kevinmaste/starbucks-clone">
                                <MDBIcon icon="clone"  className="left"/> Github link
                            </a>
                        </MDBCardBody>
                    </MDBCol>
                    {/* Part 4*/}
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mt-2">
                        <MDBView className="overlay rounded z-depth-1">
                            <img src={dom} alt="one" className="img-fluid"/>
                            {/*mettre un a href="#!"*/}
                            <MDBMask overlaye="white-slight"/>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">Digital Expert</h4>
                            <p className="grey-text">
                                {/*verifiez les fautes d'hortographe*/}
                                Projet réalisé en Wordpress pour une entreprise de Webmarketing dans le but de faire connaître leurs activités sur Internet.
                            </p>
                            <a className="btn btn-cyan" rel="noreferrer noopener" href="https://www.dom-com-digital-expert.com/">
                                <MDBIcon icon="clone"  className="left"/> Link
                            </a>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </section>
        </MDBContainer>
    );
};

export default Projet;