import React from "react";
import { MobileView, BrowserView } from "react-device-detect";
import { Stack } from "@mui/system";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@mui/styles';
import { Card } from "@mui/material";

const mobileUseStyle = makeStyles({
    img: {
        width: '84%'
    },
    nameAndLinkedin: {
        margin: '0 auto'
    },
    card: {
        padding: '14px'
    }
})

export const MobilePersonalCardView = () => {
    const classes = mobileUseStyle();

    return (
        <MobileView>
            <Card className={classes.card}>
                <img src='../../../images/ramyanber.png' alt='Ramy Anber' className={classes.img} />
                <Stack direction={"row"}>
                    <div className={classes.nameAndLinkedin}>
                        <span>Ramy Anber</span>
                        <Stack direction={"row"}>
                            <LinkedInIcon />
                            <a href="https://www.linkedin.com/in/ramyanber/">linkedin.com/in/ramyanber/</a>
                        </Stack>
                    </div>
                </Stack>
            </Card>

            <Card className={classes.card}>
                <img src='../../../images/justin.png' alt='Justin' className={classes.img} />
                <Stack direction={"row"}>
                    <div className={classes.nameAndLinkedin}>
                        <span>Justin Hui</span>
                        <Stack direction={"row"}>
                            <LinkedInIcon />
                            <a href="https://www.linkedin.com/in/ramyanber/">linkedin.com/in/justinhuiuw/</a>
                        </Stack>
                    </div>
                </Stack>
            </Card>
        </MobileView>
    )
}

const browserUseStyle = makeStyles({
    img: {
        width: '100%',
        borderRadius: '20px'
    },
    linkedInDiv: {
        display: 'flex',
        justifyContent: 'center'
    },
    cards: {
        padding: '15px'
    }
})

export const BrowserPersonalCardsView = () => {
    const classes = browserUseStyle();

    return (
        <BrowserView>
            <Stack direction={"row"} spacing={25}>
                <Card className={classes.cards} variant="outlined">
                    <img src='../../../images/ramyanber.png' alt='Ramy Anber' className={classes.img} />
                    <div>
                        <span>Ramy Anber</span>
                        <div className={classes.linkedInDiv}>
                            <LinkedInIcon />
                            <a href="https://www.linkedin.com/in/ramyanber/">linkedin.com/in/ramyanber/</a>
                        </div>
                    </div>
                </Card>
                <Card className={classes.cards} variant="outlined">
                    <img src='../../../images/justin.png' alt='Justin' className={classes.img} />
                    <div>
                        <span>Justin Hui</span>
                        <div className={classes.linkedInDiv}>
                            <LinkedInIcon />
                            <a href="https://www.linkedin.com/in/justinhuiuw/">linkedin.com/in/justinhuiuw/</a>
                        </div>
                    </div>
                </Card>
            </Stack>
        </BrowserView>
    )
}
