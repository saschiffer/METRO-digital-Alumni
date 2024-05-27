// ManualConstruction.tsx
import React from 'react';
import './ManualPage.css';
import { screenshots } from "../../Data/SoftwareApproval/Screenshots";
import { textContent } from "../../Data/SoftwareApproval/TextContent";
import { intros } from "../../Data/SoftwareApproval/Intros";
import { HeaderLogoutComponent } from "../../components/Header Logout/Header Logout";
import { ManualComponent} from "../../components/Manual/Manual";
import {Link} from "react-router-dom";

const ManualsData = [{
    title: "Ich würde gerne eine Software nutzen die bisher noch nicht geprüft wurde - was nun?",
    icon: "#",
    category: "processes",
    hrefs: [
        "https://jira.metro.digital/servicedesk/customer/portal/257/create/335",
        "https://eac.metro.info/my-apps",
    ],
    linkTexts: [
        "Bestellen eines Service Requests",
        "M|EAC - METRO Employee Application Cockpit",
    ],
}];

const ManualContent: { screenshot: string; text: string; intro: string;}[] = textContent.map((screenshot, index) => ({
    screenshot: screenshots[index] || '',
    text: textContent[index] || "",
    intro: intros[index] || "",
}));

export const ManualSoftwareApprovalComponent: React.FC = () => {

    return (
        <div className="containerManualsPage">
            <HeaderLogoutComponent/>
            <div className="container__bodyManualsPage">
                <div className="bodyItemManualsPage">
                    <div className="BreadcrumbsManualsPage">
                        <Link className="BreadcrumbLinksManuals" to="/home">Home</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksManuals" to="/home/construction">Prozesse</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksManuals" to="/home/construction">Ticketing</Link> &nbsp;/
                        Software Freigabe
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