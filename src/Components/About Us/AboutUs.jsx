import React from "react";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import { Card } from "@mui/material";
import { isMobile } from "react-device-detect";
import { MobilePersonalCardView, BrowserPersonalCardsView } from "./Childs/PersonalCards";

export default function AboutUs(props) {
    const { mode } = props;
    const footerProps = {
        width: '100%', backgroundColor: mode === 'dark' ? '#272727' : '', position: 'fixed', left: '0', bottom: '0', right: '0', zIndex: '1'
    }

    return (
        <div>
            <NavBar />
            <div style={{ height: '90px' }}></div>
            <Card sx={{ width: isMobile ? '90%' : '50%', margin: '0 auto' }} variant="outlined">
                <div style={{ padding: '30px' }}>
                    <h1>About Waterloo Sublets</h1>
                    <p>Waterloo Sublets help both the students studying at the University of Waterloo, Laurier, and those looking to rent out their properties
                        have a much easier time finding the right housing accommodations match in the Kitchener-Waterloo area. For University of Waterloo students,
                        switching between short 4-month co-op terms makes it very difficult to find short-term accommodations causing a lot of stressful competition
                        amongst students. At the same time, making it even harder for those looking to rent out their property to find the right person to rent to.
                        Waterloo Sublets encourages students to also pursue housing that may be further away from campus but still have fast and reliable transportation.
                        This is a win-win situation for both owners looking to rent their property that is further away from the school and students needing
                        accommodations.</p>
                </div>
                <MobilePersonalCardView />
                <BrowserPersonalCardsView />
            </Card>
            <div style={{ height: isMobile ? '120px' : '100px' }}></div>
            <Footer footerProps={footerProps} />
        </div>
    )
}