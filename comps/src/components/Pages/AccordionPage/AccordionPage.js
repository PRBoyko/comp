import React from 'react';
import Accordion from '../../Accordion/Accordion';

function AccordionPage(props) {
    const items = [
        {
            id: 1,
            label: 'Can I use React on a project',
            content: 'You can'
        },
        {
            id: 2,
            label: 'Can I use JavaScript on a project',
            content: 'Yes of course',
        },
        {
            id: '3',
            label: 'Can I use Css on a project',
            content: 'Please use it'
        },
    ]
    return (
        <Accordion items={items} />
    );
}

export default AccordionPage;