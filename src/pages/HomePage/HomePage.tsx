// HomePage.tsx
import React from 'react';
import './HomePage.css';
import { HeaderLogoutComponent } from "../../components/Header Logout/Header Logout";
import { TileComponent } from "../../components/Tile/Tile";

// Array mit den Titeln, Icons und Kategorien für die TileComponents
const tilesData = [
    { title: "Berufsschulzeiten",       icon: "berufsschulzeiten",  category: "Prozesse",   to: "/home/prozesse/zeitmanagement"},
    { title: "InteliJ IDEA",            icon: "idea",               category: "Software",   to: "/home/software/ide"},
    { title: "Jira",                    icon: "jira",               category: "Tools",      to: "/home/tools/intern"},
    { title: "M.d on LinkedIn",         icon: "linkedin",           category: "Links",      to: "/home/links"},
    { title: "Git",                     icon: "git",                category: "Tools",      to: "/home/tools/extern"},
    { title: "M.d on Instagram",        icon: "insta",              category: "Links",      to: "/home/links"},
    { title: "Arbeitszeit Korrektur",   icon: "korrektur",          category: "Prozesse",   to: "/home/prozesse/zeitmanagement"},
    { title: "MS Visual Studio",        icon: "visualstudio",       category: "Software",   to: "/home/software/ide"},
];

export const HomePageComponent: React.FC = () => {

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
        <div className='HomePageContainer'>
            <HeaderLogoutComponent/>
            <div className="HomePageContainer__body">
                <div className="HomePageBodyItem">
                    <div className="HomePageBreadcrumbs">Home</div>
                </div>
                <div className="HomePageBodyItem">
                    <div className="HomePageThemeImage">
                        <div className="HomePageImage">
                            <div className="HomePageDecoration">
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