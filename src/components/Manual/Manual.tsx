// ManualComponent.tsx
import React from 'react';
import './Manual.css';

interface ManualContentProps {
    screenshot: string;
    text: string;
    intro ?: string;
}

export const ManualComponent: React.FC<ManualContentProps> = ({ screenshot, text, intro}) => {
    return (
        <div id="Komponente">
            <div id="intro" >{intro}</div>
            <p id="step" >{text}</p>
            {screenshot && <img src={screenshot} alt="Screenshot" />}
        </div>
    );
};