// ManualRefunds.tsx
import React from 'react';
import './ManualPage.css';
import { screenshots } from "../../Data/Refunds/Screenshots";
import { textContent } from "../../Data/Refunds/TextContent";
import { HeaderLogoutComponent } from "../../components/Header Logout/Header Logout";
import { ManualComponent} from "../../components/Manual/Manual";
import {Link} from "react-router-dom";
import {intros} from "../../Data/Refunds/Intros";

const ManualsData = [{
    title: "Erstattungsbeleg: Ich bin in Vorkasse gegangen - Was nun?",
    icon: "#",
    category: "processes",
    hrefs: [
        "https://www.w3.org/Provider/Style/dummy.html",
        "https://www.w3.org/Provider/Style/dummy.html",
    ],
    linkTexts: [
        "Hier kommst du zur Erstattungsbeleg-Formular-Vorlage",
    ],
}];

const ManualContent: { screenshot: string; text: string; intro: string;}[] = textContent.map((screenshot, index) => ({
    screenshot: screenshots[index] || '',
    text: textContent[index] || "",
    intro: intros[index] || "",
}));

export const ManualRefundsComponent: React.FC = () => {

    return (
        <div className="containerManualsPage">
            <HeaderLogoutComponent/>
            <div className="container__bodyManualsPage">
                <div className="bodyItemManualsPage">
                    <div className="BreadcrumbsManualsPage">
                        <Link className="BreadcrumbLinksManuals" to="/home">Home</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksManuals" to="/home/Prozesse">Prozesse</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksManuals" to="/home/prozesse/erstattungen">Erstattungen</Link> &nbsp;/
                        Erstattungsbeleg
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