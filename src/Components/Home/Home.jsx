import React from "react";
import CardDetails from "./Childs/Card";
import NavBar from "../Shared/NavBar";
import data from '../../data.json';
import Footer from "../Shared/Footer";
import { isMobile } from "react-device-detect";

export default function Home(props) {
    const { mode } = props;
    const footerProps = {
        width: '100%', backgroundColor: mode === 'dark' ? '#272727' : ''
    }
    // position: 'fixed', left: '0', bottom: '0', right: '0', zIndex: '1'
    return (
        <div>
            <NavBar />
            <div style={{ height: isMobile ? '114px' : '90px' }}></div>
            {
                data.Properties.map((item, i) => (
                    <CardDetails item={item} key={i} />
                ))
            }
            <Footer footerProps={footerProps} />
        </div>
    );
}