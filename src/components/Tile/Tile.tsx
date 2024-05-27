// TileComponent.tsx
import React, { useState } from 'react';
import './Tile.css';
import { useNavigate } from 'react-router-dom';

interface TileProps {
    title: string; // Titel-Prop
    icon: string; // Dateiname des Icons
    category: string; // Kategorie-Prop
    backgroundColor: string; // Hintergrundfarben-Prop
    hoverBackgroundColor: string; //Hintergrundfarben-Prop bei hover
    to?: string;
    href?: string;
}

export const TileComponent: React.FC<TileProps> = ({ title, icon, category, backgroundColor, hoverBackgroundColor , to, href }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const handleTileClick = () => {
        if (to) {
            navigate(to);
        }  else if (href) {
            window.location.href = href; // Ändern Sie den Ort, um zur LinkedIn-Seite zu navigieren
        }
    }

    // Pfad zum Icon im öffentlichen Verzeichnis
    const iconPath = process.env.PUBLIC_URL + `/icons/${icon}.png`;

    return (
        <button
            className="Tile__Container"
            style={{ backgroundColor: hovered ? hoverBackgroundColor : backgroundColor }}
            onClick={handleTileClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="TileTitle">{title}</div>
            <div className="TileIcon">
                <img src={iconPath} alt={title} />
            </div>
        </button>
    );
}
