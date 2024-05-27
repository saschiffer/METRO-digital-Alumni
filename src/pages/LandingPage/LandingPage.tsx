// LandingPage.tsx
import React from 'react';
import './LandingPage.css';
import { HeaderLoginComponent } from "../../components/Header Login/Header Login";

export const LandingPageComponent: React.FC = () => {

    return (
        <div className='containerLandingPage'>
            <HeaderLoginComponent/>
            <div className="container__bodyLandogPage">
                <div className="bodyItemLandingPage">
                    <div className="titleLandingPage"> Wissensdatenbank </div>
                    <div className="subTitleLandingPage"> Alle Prozesse, alle Tools, alles was du brauchst! </div>
                </div>
                <div className="bodyItemLandingPage">
                    <div className="themeImageLandingPage">
                        <div className="ImageLandingPage">
                            <div className="decorationLandingPage">
                                <img className="decoImageLandingPage" src="slogan.png" alt="Slogan" />
                                <img className="decoImageLandingPage" src="Sketch.png" alt="Sketch" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
