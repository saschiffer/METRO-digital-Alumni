//App.tsx
import React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Ebene 0
import { LandingPageComponent } from "./pages/LandingPage/LandingPage";
import { HomePageComponent } from "./pages/HomePage/HomePage";

// Ebene 1
import { ProcessesPageComponent } from "./pages/ProcessesPage/ProcessesPage";
import { SoftwarePageComponent } from "./pages/SoftwarePage/SoftwarePage";
import { ToolsPageComponent } from "./pages/ToolsPage/ToolsPage";
import { LinksPageComponent } from "./pages/LinksPage/LinksPage";

// Ebene 2 - Prozesse
import {RefundsPageComponent} from "./pages/ProcessesPage/RefundsPage/RefundsPage";
import {TicketingPageComponent} from "./pages/ProcessesPage/TicketingPage/TicketingPage";
import { TimemanagementPageComponent } from "./pages/ProcessesPage/TimemanagementPage/TimemanagementPage"
import {OthersPageComponent} from "./pages/ProcessesPage/OthersPage/OthersPage";
// Ebene 2 - Software
import {PluginPageComponent} from "./pages/SoftwarePage/PluginPage/PluginPage";
import {SecurityPageComponent} from "./pages/SoftwarePage/SecurityPage/SecurityPage";
import {IdePageComponent} from "./pages/SoftwarePage/IdePage/IdePage";
// Ebene 2 - Tools
import {InternToolsPageComponent} from "./pages/ToolsPage/InternToolsPage/InternToolsPage";
import {ExternToolsPageComponent} from "./pages/ToolsPage/ExternToolsPage/ExternToolsPage";

// Ebene 3 - Erstattungen
import {ManualRefundsComponent} from "./pages/ManualPages/ManualRefunds";
import {ManualConstructionComponent} from "./pages/ManualPages/ManualConstruction";
// Ebene 3 - Ticketing
import {ManualSoftwareApprovalComponent} from "./pages/ManualPages/ManualSoftwareApproval";
// Ebene 3 - Zeitmanagement
import {ManualSicknessComponent} from "./pages/ManualPages/ManualSickness";
// Ebene 3 - Sonstiges
// Ebene 3 - Plugin
// Ebene 3 - Security
// Ebene 3 - IDE
// Ebene 3 - Intern
// Ebene 3 - Extern

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPageComponent />} />

                {/*Page under construction*/}
                <Route path="/home/construction" element={<ManualConstructionComponent />} />

                {/*Ebene 0*/}
                <Route path="/home/*" element={<HomePageComponent />} />

                {/*Ebene 1*/}
                <Route path="/home/prozesse/*" element={<ProcessesPageComponent />} />
                <Route path="/home/software/*" element={<SoftwarePageComponent />} />
                <Route path="/home/tools/*" element={<ToolsPageComponent />} />
                <Route path="/home/links/*" element={<LinksPageComponent />} />

                {/*Ebene 2 - Prozesse*/}
                <Route path="/home/prozesse/erstattungen" element={<RefundsPageComponent />} />
                <Route path="/home/prozesse/ticketing" element={<TicketingPageComponent />} />
                <Route path="/home/prozesse/zeitmanagement" element={<TimemanagementPageComponent />} />
                <Route path="/home/prozesse/sonstige" element={<OthersPageComponent />} />
                {/*Ebene 2 - Software*/}
                <Route path="/home/software/plugin" element={<PluginPageComponent />} />
                <Route path="/home/software/security" element={<SecurityPageComponent />} />
                <Route path="/home/software/ide" element={<IdePageComponent />} />
                {/*Ebene 2 - Tools*/}
                <Route path="/home/tools/intern" element={<InternToolsPageComponent />} />
                <Route path="/home/tools/extern" element={<ExternToolsPageComponent />} />

                {/*Ebene 3 - Erstattungen*/}
                <Route path="/home/prozesse/erstattungen/erstattungsbeleg" element={<ManualRefundsComponent />} />
                <Route path="/home/prozesse/erstattungen/reisekosten-spesen" element={<ManualConstructionComponent />} />
                {/*Ebene 3 - Ticketing*/}
                <Route path="/home/prozesse/ticketing/jira" element={<ManualConstructionComponent />} />
                <Route path="/home/prozesse/ticketing/oracle" element={<ManualConstructionComponent />} />
                <Route path="/home/prozesse/ticketing/sw-freigabe" element={<ManualSoftwareApprovalComponent />} />
                {/*Ebene 3 - Zeitmanagement*/}
                <Route path="/home/prozesse/zeitmanagement/berufsschulzeiten" element={<ManualConstructionComponent />} />
                <Route path="/home/prozesse/zeitmanagement/arbeitszeiten" element={<ManualConstructionComponent />} />
                <Route path="/home/prozesse/zeitmanagement/az-korrigieren" element={<ManualConstructionComponent />} />
                <Route path="/home/prozesse/zeitmanagement/reisezeit" element={<ManualConstructionComponent />} />
                <Route path="/home/prozesse/zeitmanagement/urlaub" element={<ManualConstructionComponent />} />
                <Route path="/home/prozesse/zeitmanagement/krank" element={<ManualSicknessComponent />} />
                {/*Ebene 3 - Sonstiges*/}
                <Route path="/home/prozesse/sonstige/benefits" element={<ManualConstructionComponent />} />
                <Route path="/home/prozesse/sonstige/bravo" element={<ManualConstructionComponent />} />
                {/*Ebene 3 - Plugin*/}
                <Route path="/home/software/plugin/intelij-keypromoter" element={<ManualConstructionComponent />} />
                <Route path="/home/software/plugin/intelij-discord" element={<ManualConstructionComponent />} />
                <Route path="/home/software/plugin/gradle" element={<ManualConstructionComponent />} />
                {/*Ebene 3 - Security*/}
                <Route path="/home/software/seurity/snx" element={<ManualConstructionComponent />} />
                {/*Ebene 3 - IDE*/}
                <Route path="/home/software/ide/intelij-IDEA" element={<ManualConstructionComponent />} />
                <Route path="/home/software/ide/intelij-Webstorm" element={<ManualConstructionComponent />} />
                <Route path="/home/software/ide/ms-visual-studio" element={<ManualConstructionComponent />} />
                {/*Ebene 3 - Intern*/}
                <Route path="/home/tools/intern/jira" element={<ManualConstructionComponent />} />
                <Route path="/home/tools/intern/oracle" element={<ManualConstructionComponent />} />
                <Route path="/home/tools/intern/dig-workplace" element={<ManualConstructionComponent />} />
                <Route path="/home/tools/intern/sharepoint" element={<ManualConstructionComponent />} />
                <Route path="/home/tools/intern/ms-teams" element={<ManualConstructionComponent />} />
                <Route path="/home/tools/intern/yellow-pages" element={<ManualConstructionComponent />} />
                {/*Ebene 3 - Extern*/}
                <Route path="/home/tools/extern/git" element={<ManualConstructionComponent />} />
                <Route path="/home/tools/extern/github" element={<ManualConstructionComponent />} />
                <Route path="/home/tools/extern/hackmd" element={<ManualConstructionComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
