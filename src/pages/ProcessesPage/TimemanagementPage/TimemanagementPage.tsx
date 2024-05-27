// TimemanagementPage.tsx
import React from 'react';
import './TimemanagementPage.css';
import { HeaderLogoutComponent } from "../../../components/Header Logout/Header Logout";
import { TileComponent } from "../../../components/Tile/Tile";
import { Link } from 'react-router-dom';

// Array mit den Titeln, Icons und Kategorien für die TileComponents
const tilesData = [
    { title: "Berufsschulzeit",         icon: "berufsschulzeiten",  category: "Prozesse", to: "/home/prozesse/zeitmanagement/berufsschulzeiten"},
    { title: "Arbeitszeit",             icon: "arbeitszeit",        category: "Prozesse", to: "/home/prozesse/zeitmanagement/arbeitszeiten"},
    { title: "Arbeitszeit korrigieren", icon: "korrektur",          category: "Prozesse", to: "/home/prozesse/zeitmanagement/az-korrigieren"},
    { title: "Reisezeit",               icon: "reisezeit",          category: "Prozesse", to: "/home/prozesse/zeitmanagement/reisezeit"},
    { title: "Urlaub",                  icon: "urlaub",             category: "Prozesse", to: "/home/prozesse/zeitmanagement/urlaub"},
    { title: "Krank",                   icon: "krank",              category: "Prozesse", to: "/home/prozesse/zeitmanagement/krank"},
];

export const TimemanagementPageComponent: React.FC = () => {
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
        <div className='containerTimemanagementPage'>
            <HeaderLogoutComponent/>
            <div className="container__bodyTimemanagementPage">
                <div className="bodyItemTimemanagementPage">
                    <div className="BreadcrumbsTimemanagementPage">
                        <Link className="BreadcrumbLinksProcesses" to="/home">Home</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksProcesses" to="/home/prozesse">Prozesse</Link> &nbsp;/
                        Zeitmanagement
                    </div>
                </div>
                <div className="bodyItemTimemanagementPage">
                    <div className="themeImageTimemanagementPage">
                        <div className="ImageTimemanagementPage">
                            <div className="decorationTimemanagementPage">
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
};