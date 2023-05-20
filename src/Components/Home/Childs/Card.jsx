import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ImageSlider from './ImageSlider';
import Button from '@mui/material/Button';
import { isMobile } from 'react-device-detect';

export default function CardDetails(props) {
    const { item } = props;
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Card sx={{ width: isMobile ? '90%' : '50%', margin: '0 auto', fontSize: '1rem' }} component="main" variant="outlined">
                <CardHeader
                    title={<h2 style={{ fontSize: '1.5rem' }}>{item.title}</h2>}
                />
                <ImageSlider images={item.images} title={item.title} />
                <CardActions disableSpacing>
                    <Button size="medium" onClick={handleExpandClick} sx={{
                        textTransform: 'unset',
                        margin: '0 auto'
                    }} variant="contained">
                        Learn More
                    </Button>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <ul>
                            {
                                item.content.map((c, i) => (
                                    <li style={{ fontSize: '1rem' }} key={i}>{c}</li>
                                ))
                            }
                        </ul>
                        <img src={item.map} alt={item.title} style={{ width: '100%' }} />
                    </CardContent>
                </Collapse>
            </Card>
            <div style={{ height: '10px' }}></div>
        </div>
    );
}