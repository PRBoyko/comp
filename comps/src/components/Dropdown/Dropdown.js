import React, { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from '../Panel/Panel';

function Dropdown({ options, value, onChange }) {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const divEl = useRef();


    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return
            }

            if (!divEl.current.contains(event.target)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener('click', handler, true);

        const cleanUp = () => {
            return document.removeEventListener('click', handler)
        }

        return cleanUp
    }, [])

    const handleClick = () => {
        setDropdownOpen((current) => !current)
    }

    const handleOptionClick = (option) => {
        setDropdownOpen(false);
        onChange(option);
    }

    const renderOptions = options.map((option) => {
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value} >{option.label}</div>
    })


    return (
        <div ref={divEl} className='w-48 relative'>
            <Panel className='flex justify-between items-center cursor-pointer ' onClick={handleClick}>{value?.label || 'Select...'} {<GoChevronDown className='text-lg' />}</Panel>
            {isDropdownOpen && <Panel className='absolute top-full'>{renderOptions}</Panel>}
        </div>
    );
}

export default Dropdown;