// ManualSickness.tsx
import React from 'react';
import './ManualPage.css';
import { screenshots } from "../../Data/Sickness/Screenshots";
import { textContent } from "../../Data/Sickness/TextContent";
import { HeaderLogoutComponent } from "../../components/Header Logout/Header Logout";
import { ManualComponent} from "../../components/Manual/Manual";
import {Link} from "react-router-dom";
import {intros} from "../../Data/Sickness/Intros";


const ManualsData = [{
    title: "Ich bin Krank - Was nun?",
    icon: "#",
    category: "processes",
    hrefs: [
        "https://fa-ewii-saasfaprod1.fa.ocs.oraclecloud.com/fscmUI/faces/FuseWelcome?_adf.ctrl-state=i8r9wj4t4_1&_adf.no-new-window-redirect=true&_afrLoop=538949162905498&_afrFS=16&_afrMT=screen&_afrMFW=1920&_afrMFH=911&_afrMFDW=1920&_afrMFDH=1080&_afrMFC=8&_afrMFCI=0&_afrMFM=0&_afrMFR=96&_afrMFG=0&_afrMFS=0&_afrMFO=0",
        "https://www.w3.org/Provider/Style/dummy.html",
        "https://www.w3.org/Provider/Style/dummy.html",
    ],
    linkTexts: [
        "Krankheit mit elektronischer Bescheinigung (eAU)",
        "Krankheit mit Attest (gilt auch für Kinderkrank-Attest)",
        "Krankheit ohne Attest",
    ],
}];

//Array mit den Datenpaaren
const ManualContent: { screenshot: string; text: string; intro: string;}[] = textContent.map((screenshot, index) => ({
    screenshot: screenshots[index] || '',
    text: textContent[index] || "",
    intro: intros[index] || "",
}));

export const ManualSicknessComponent: React.FC = () => {

    return (
        <div className="containerManualsPage">
            <div id="Head"><HeaderLogoutComponent/></div>
            <div className="container__bodyManualsPage">
                <div className="bodyItemManualsPage">
                    <div className="BreadcrumbsManualsPage">
                        <Link className="BreadcrumbLinksManuals" to="/home">Home</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksManuals" to="/home/Prozesse">Prozesse</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksManuals"
                              to="/home/prozesse/zeitmanagement">Zeitmanagement</Link> &nbsp;/
                        Krank Meldung
                    </div>
                </div>
                <div className="bodyItemManualsPage">
                    <div className="container__titleManual">
                        <div className="titleManual"><h1>{ManualsData[0].title}</h1></div>
                        <div className="titleLinksManual">
                            {ManualsData[0].hrefs.map((href, index) => (
                                <a key={index} href={href}>
                                    {ManualsData[0].linkTexts[index]}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bodyItemManualsPage">
                    <div className="container__ManualComponent">
                        {ManualContent.map((data, index) => (
                            <ManualComponent key={index} screenshot={data.screenshot} text={data.text} intro={data.intro} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}