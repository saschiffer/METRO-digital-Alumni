// SecurityPage.tsx
import React from 'react';
import './SecurityPage.css';
import { HeaderLogoutComponent } from "../../../components/Header Logout/Header Logout";
import { TileComponent } from "../../../components/Tile/Tile";
import { Link } from 'react-router-dom';

// Array mit den Titeln, Icons und Kategorien für die TileComponents
const tilesData = [
    { title: "SNX (VPN Linux)",   icon: "snx",   category: "Software", to: "/home/software/seurity/snx"},
];

export const SecurityPageComponent: React.FC = () => {
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
        <div className='containerSecurityPage'>
            <HeaderLogoutComponent/>
            <div className="container__bodySecurityPage">
                <div className="bodyItemSecurityPage">
                    <div className="BreadcrumbsSecurityPage">
                        <Link className="BreadcrumbLinksSoftware" to="/home">Home</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksSoftware" to="/home/software">Software</Link> &nbsp;/
                        Security
                    </div>
                </div>
                <div className="bodyItemSecurityPage">
                    <div className="themeImageSecurityPage">
                        <div className="ImageSecurityPage">
                            <div className="decorationSecurityPage">
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
