import React, { useState, useEffect } from 'react';
import SearchBody from '../SearchBody/SearchBody';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PanelSearch = ({ setEvents, setLoading }) => {

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [expanded, setExpanded] = useState(false);

    const handleClosedAccordion = () => {
        setExpanded(!expanded);
    }

    return (
        <div className='PanelSearch'>
            {viewportWidth > 1024 ? (
                <div style={{ boxShadow: '5px 5px 20px' }}><SearchBody setEvents={setEvents} setLoading={setLoading} /></div>
            ) : (
                <Accordion style={{ boxShadow: '5px 5px 15px' }} expanded={expanded}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        onClick={handleClosedAccordion}
                    >
                        <Typography><strong>Buscar Eventos</strong></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SearchBody setEvents={setEvents} setLoading={setLoading} handleClosedAccordion={handleClosedAccordion} />
                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    );
};

export default PanelSearch;
