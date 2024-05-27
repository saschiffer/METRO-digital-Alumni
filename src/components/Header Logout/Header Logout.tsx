//HeaderLogout.tsx
import React, {useState} from 'react';
import './Header Logout.css';
import logo from "../../logo/logo metro digital alumni.png";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export const HeaderLogoutComponent: React.FC = () => {

    const navigate = useNavigate();

    // Array mit Farbzuweisungen für verschiedene Seiten
    const pageColors = [
        {page: 'HomePage', color: '#838383'},
        {page: 'ProzessPage', color: '#647DEB'},
        {page: 'ErstattungenPage', color: '#647DEB'},
        {page: 'TicketingPage', color: '#647DEB'},
        {page: 'ZeitmanagementPage', color: '#647DEB'},
        {page: 'SonstigesPage', color: '#647DEB'},
        {page: 'SoftwarePage', color: '#AFDC64'},
        {page: 'PluginPage', color: '#AFDC64'},
        {page: 'SecurityPage', color: '#AFDC64'},
        {page: 'IdePage', color: '#AFDC64'},
        {page: 'ToolsPage', color: '#FF5A78'},
        {page: 'InternToolsPage', color: '#FF5A78'},
        {page: 'ExternToolsPage', color: '#FF5A78'},
        {page: 'LinksPage', color: '#05DCCB'},
        // Weitere Seiten und Farben hier hinzufügen...
    ];

    return (
        <div className='header__container'>
            <div className="headerContent">
                <div className="headerRow">
                    <div className="headerItem">
                        <Link to="/home">
                            <img className="logo" src={logo} alt="Logo"/>
                        </Link>
                    </div>
                    <div className="headerItem">
                        <div className="Navbar">
                            <div className="Navbar_Ebene_1">
                                <ul>
                                    <li id="prozesse">
                                        <Link className="Navbar_Ebene_1_Links" to="/home/prozesse">Prozesse</Link>
                                        <div className="Navbar_Ebene_2">
                                            <ul>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/prozesse/erstattungen">
                                                        Erstattungen
                                                    </Link>
                                                    <div className="Navbar_Ebene_3">
                                                        <ul>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/erstattungen/erstattungsbeleg">
                                                                    Erstattungsbeleg
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/erstattungen/reisekosten-spesen">
                                                                    Reisekosten & Spesen
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/prozesse/ticketing">
                                                        Ticketing
                                                    </Link>
                                                    <div className="Navbar_Ebene_3">
                                                        <ul>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/ticketing/jira">
                                                                    Jira Ticket
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/ticketing/oracle">
                                                                    Oracle Ticket
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/ticketing/sw-freigabe">
                                                                    Software Freigabe
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/prozesse/zeitmanagement">
                                                        Zeitmanagement
                                                    </Link>
                                                    <div className="Navbar_Ebene_3">
                                                        <ul>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/zeitmanagement/berufsschulzeiten">
                                                                    Berufsschulzeiten
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/zeitmanagement/arbeitszeiten">
                                                                    Arbeitszeiten
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/zeitmanagement/az-korrigieren">
                                                                    Arbeitszeiten korrigieren
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/zeitmanagement/reisezeit">
                                                                    Reisezeiten
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/zeitmanagement/urlaub">
                                                                    Urlaub beantragen
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/zeitmanagement/krank">
                                                                    Krank melden
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/prozesse/sonstige">
                                                        Sonstige
                                                    </Link>
                                                    <div className="Navbar_Ebene_3">
                                                        <ul>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/sonstige/benefits">
                                                                    Benefit Programm
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/prozesse/sonstiges/bravo">
                                                                    Bravo!
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li id="software">
                                        <Link className="Navbar_Ebene_1_Links" to="/home/software">Software</Link>
                                        <div className="Navbar_Ebene_2">
                                            <ul>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/software/plugin">
                                                        Plugin
                                                    </Link>
                                                    <div className="Navbar_Ebene_3">
                                                        <ul>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/software/plugin/intelij-discord">
                                                                    InteliJ-Discord Status
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/software/plugin/intelij-keypromoter">
                                                                    InteliJ Key Promoter X
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/software/plugin/gradle">
                                                                    InteliJ Gradle
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/software/security">
                                                        Security
                                                    </Link>
                                                    <div className="Navbar_Ebene_3">
                                                        <ul>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/software/security/snx">
                                                                    SNX
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/software/ide">
                                                        IDE
                                                    </Link>
                                                    <div className="Navbar_Ebene_3">
                                                        <ul>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/software/ide/intelij-IDEA">
                                                                    InteliJ IDEA
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/software/ide/intelij-Webstorm">
                                                                    InteliJ Webstorm
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/software/ide/ms-visual-studio">
                                                                    MS Visual Studio
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li id="tools">
                                        <Link className="Navbar_Ebene_1_Links" to="/home/tools">Tools</Link>
                                        <div className="Navbar_Ebene_2">
                                            <ul>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/tools/intern">
                                                        Intern
                                                    </Link>
                                                    <div className="Navbar_Ebene_3">
                                                        <ul>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/tools/intern/jira">
                                                                    Jira
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/tools/intern/oracle">
                                                                    Oracle
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/tools/intern/dig-workplace">
                                                                    Digital Workplace
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/tools/intern/sharepoint">
                                                                    SharePoint
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/tools/intern/ms-teams">
                                                                    MS Teams
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/tools/intern/yellow-pages">
                                                                    YellowPages
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/tools/extern">
                                                        Extern
                                                    </Link>
                                                    <div className="Navbar_Ebene_3">
                                                        <ul>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/tools/extern/git">
                                                                    Git
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/tools/extern/github">
                                                                    GitHub
                                                                </Link>
                                                            </li>
                                                            <li id="Navbar_3_Element">
                                                                <Link className="Navbar_Ebene_3_Links"
                                                                      to="/home/tools/extern/hackmd">
                                                                    Hack_MD
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li id="links">
                                        <Link className="Navbar_Ebene_1_Links" to="/home/links">Links</Link>
                                        <div className="Navbar_Ebene_2">
                                            <ul>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/links">
                                                        LinkedIn
                                                    </Link>
                                                </li>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/links">
                                                        Insta
                                                    </Link>
                                                </li>
                                                <li id="Navbar_2_Element">
                                                    <Link className="Navbar_Ebene_2_Links"
                                                          to="/home/links">
                                                        More
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="headerItem">
                        <button className="LogOut" onClick={() => navigate("/")}>LOGOUT</button>
                    </div>
                </div>
                <div className="headerSubNavbar__Container">
                    <div className="headerSubNavbar__Content">
                        <div className="headerSubNavbar">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

