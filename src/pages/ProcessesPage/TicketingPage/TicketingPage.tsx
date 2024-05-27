// TicketingPage.tsx
import React from 'react';
import './TicketingPage.css';
import { HeaderLogoutComponent } from "../../../components/Header Logout/Header Logout";
import { TileComponent } from "../../../components/Tile/Tile";
import { Link } from 'react-router-dom';

// Array mit den Titeln, Icons und Kategorien für die TileComponents
const tilesData = [
    { title: "Jira Tickets",                icon: "jira",       category: "Prozesse", to: "/home/prozesse/ticketing/jira"},
    { title: "Oracle Tickets",              icon: "oracle",     category: "Prozesse", to: "/home/prozesse/ticketing/oracle"},
    { title: "Software Freigabe Antrag",    icon: "freigabe",   category: "Prozesse", to: "/home/prozesse/ticketing/sw-freigabe"},
];

export const TicketingPageComponent: React.FC = () => {
    // Funktion zum Zuweisen von Hintergrundfarben basierend auf der Kategorie
    const getTileBackground = (category: string): string => {
        switch (category) {
            case "Prozesse":
                return "#647deb";
            case "Software":
                return "#afdc64";
            case "Tools":
                return "#ff5a78";
            case "Links":
                return "#05dccb";
            default:
                return "#FFFFFF"; // Weiß (Fallback)
        }
    };

    const getTileHoverBackground = (category: string): string => {
        switch (category) {
            case "Prozesse":
                return "rgb(91,113,211)";
            case "Software":
                return "rgb(154,192,89)";
            case "Tools":
                return "rgb(217,79,104)";
            case "Links":
                return "rgb(5,203,187)";
            default:
                return "#FFFFFF"; // Weiß (Fallback)
        }
    };

    return (
        <div className='containerTicketingPage'>
            <HeaderLogoutComponent/>
            <div className="container__bodyTicketingPage">
                <div className="bodyItemTicketingPage">
                    <div className="BreadcrumbsTicketingPage">
                        <Link className="BreadcrumbLinksProcesses" to="/home">Home</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksProcesses" to="/home/prozesse">Prozesse</Link> &nbsp;/
                        Ticketing
                    </div>
                </div>
                <div className="bodyItemTicketingPage">
                    <div className="themeImageTicketingPage">
                        <div className="ImageTicketingPage">
                            <div className="decorationTicketingPage">
                                {/* Mapping über das tilesData-Array und Übergeben von Titel, Icon und Kategorie an jede TileComponent */}
                                {tilesData.map((tile, index) => (
                                    <TileComponent
                                        key={index}
                                        title={tile.title}
                                        icon={tile.icon}
                                        category={tile.category}
                                        backgroundColor={getTileBackground(tile.category)}
                                        hoverBackgroundColor={getTileHoverBackground(tile.category)}
                                        to={tile.to}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
