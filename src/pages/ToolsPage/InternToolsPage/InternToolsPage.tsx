// InternToolsPage.tsx
import React from 'react';
import './InternToolsPage.css';
import { HeaderLogoutComponent } from "../../../components/Header Logout/Header Logout";
import { TileComponent } from "../../../components/Tile/Tile";
import { Link } from 'react-router-dom';

// Array mit den Titeln, Icons und Kategorien für die TileComponents
const tilesData = [
    { title: "Jira",                icon: "jira",       category: "Tools", to: "/home/tools/intern/jira"},
    { title: "Oracle",              icon: "oracle",     category: "Tools", to: "/home/tools/intern/oracle"},
    { title: "Digital Workplace",   icon: "dw",         category: "Tools", to: "/home/tools/intern/dig-workplace"},
    { title: "SharePoint",          icon: "sharepoint", category: "Tools", to: "/home/tools/intern/sharepoint"},
    { title: "MS Teams",            icon: "teams",      category: "Tools", to: "/home/tools/intern/ms-teams"},
    { title: "YellowPages",         icon: "yellow",     category: "Tools", to: "/home/tools/intern/yellow-pages"},
];

export const InternToolsPageComponent: React.FC = () => {
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
        <div className='containerInternToolsPage'>
            <HeaderLogoutComponent/>
            <div className="container__bodyInternToolsPage">
                <div className="bodyItemInternToolsPage">
                    <div className="BreadcrumbsInternToolsPage">
                        <Link className="BreadcrumbLinksTools" to="/home">Home</Link> &nbsp;/&nbsp;
                        <Link className="BreadcrumbLinksTools" to="/home/tools">Tools</Link> &nbsp;/
                        Interne Tools
                    </div>
                </div>
                <div className="bodyItemInternToolsPage">
                    <div className="themeImageInternToolsPage">
                        <div className="ImageInternToolsPage">
                            <div className="decorationInternToolsPage">
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
