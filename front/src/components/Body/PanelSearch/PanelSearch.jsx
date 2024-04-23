import React, { useState, useEffect } from 'react';
import SearchBody from '../SearchBody/SearchBody';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PanelSearch = ({ setEvents, setLoading }) => {

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    return (
        <div className='PanelSearch'>
            {viewportWidth > 767 ? (
                <div style={{boxShadow: '5px 5px 20px'}}><SearchBody setEvents={setEvents} setLoading={setLoading} /></div>
            ) : (
                <Accordion style={{boxShadow: '5px 5px 15px'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography><strong>Buscar Eventos</strong></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SearchBody setEvents={setEvents} setLoading={setLoading} />
                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    );
};

export default PanelSearch;
