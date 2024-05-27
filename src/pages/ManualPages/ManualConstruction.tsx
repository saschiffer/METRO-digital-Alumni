// ManualConstruction.tsx
import React from 'react';
import './ManualPage.css';
import { screenshots } from "../../Data/Construction/Screenshots";
import { textContent } from "../../Data/Construction/TextContent";
import { intros } from "../../Data/Construction/Intros";
import { HeaderLogoutComponent } from "../../components/Header Logout/Header Logout";
import { ManualComponent} from "../../components/Manual/Manual";
import {Link} from "react-router-dom";

const ManualsData = [{
    title: "Page under construction...please try again later!",
    icon: "#",
    category: "processes",
    hrefs: [
        "https://www.w3.org/Provider/Style/dummy.html",
        "https://www.w3.org/Provider/Style/dummy.html",
    ],
    linkTexts: [
        "You'll find a Link here, which is usefull",
        "Maybe another one",
    ],
}];

const ManualContent: { screenshot: string; text: string; intro: string;}[] = textContent.map((screenshot, index) => ({
    screenshot: screenshots[index] || '',
    text: textContent[index] || "",
    intro: intros[index] || "",
}));

export const ManualConstructionComponent: React.FC = () => {

    return (
        <div className="containerManualsPage">
            <HeaderLogoutComponent/>
            <div className="container__bodyManualsPage">
                <div className="bodyItemManualsPage">
                    <div className="BreadcrumbsManualsPage">
                        <Link className="BreadcrumbLinksManuals" to="/home">Home</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksManuals" to="/home/construction">Page</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksManuals" to="/home/construction">under</Link> &nbsp;/
                        construction
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