import React from 'react';
import Button from '../../Button/Button';

function ButtonPage(props) {
    return (
        <div>
            <div>
                <Button primary>Primary</Button>
            </div>
            <div>
                <Button secondary>Secondary</Button>
            </div>
            <div>
                <Button warning>Warning</Button>
            </div>
            <div>
                <Button success>Success</Button>
            </div>
            <div>
                <Button danger>Error</Button>
            </div>
            <div>
                <Button outline rounded>Outline</Button>
            </div>
        </div>

    );
}

export default ButtonPage;