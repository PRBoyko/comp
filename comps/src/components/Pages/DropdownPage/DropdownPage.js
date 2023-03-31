import React, { useState } from 'react';
import Dropdown from '../../Dropdown/Dropdown';

function DropdownPage() {
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => {
        setSelected(option)
    }

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
    ]

    return (
        <div>
            <Dropdown value={selected} options={options} onChange={handleSelect} />

        </div>
    )
}

export default DropdownPage;