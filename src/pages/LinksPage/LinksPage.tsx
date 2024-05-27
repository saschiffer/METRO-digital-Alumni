// LinksPage.tsx
import React from 'react';
import './LinksPage.css';
import { HeaderLogoutComponent } from "../../components/Header Logout/Header Logout";
import { TileComponent } from "../../components/Tile/Tile";
import { Link } from 'react-router-dom';

// Array mit den Titeln, Icons und Kategorien für die TileComponents
const tilesData = [
    { title: "M.d on LinkedIn",     icon: "linkedin",   category: "Links", href: "https://www.linkedin.com/company/metro-digitalmd"},
    { title: "M.d on Instagram",    icon: "insta",      category: "Links", href: "https://www.instagram.com/metro.digital"},
];

export const LinksPageComponent: React.FC = () => {
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
        <div className='containerLinksPage'>
            <HeaderLogoutComponent/>
            <div className="container__bodyLinksPage">
                <div className="bodyItemLinksPage">
                    <div className="BreadcrumbsLinksPage">
                        <Link className="BreadcrumbLinksLinksPage" to="/home">Home</Link> &nbsp;/
                        Links
                    </div>
                </div>
                <div className="bodyItemLinksPage">
                    <div className="themeImageLinksPage">
                        <div className="ImageLinksPage">
                            <div className="decorationLinksPage">
                                {/* Mapping über das tilesData-Array und Übergeben von Titel, Icon und Kategorie an jede TileComponent */}
                                {tilesData.map((tile, index) => (
                                    <TileComponent
                                        key={index}
                                        title={tile.title}
                                        icon={tile.icon}
                                        category={tile.category}
                                        backgroundColor={getTileBackground(tile.category)}
                                        hoverBackgroundColor={getTileHoverBackground(tile.category)}
                                        href={tile.href}
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
