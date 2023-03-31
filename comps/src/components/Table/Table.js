import React, { Fragment } from 'react';

function Table({ data, config }) {
    return (
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'>
                    {config.map(column => {
                        if (column.header) {
                            return <Fragment key={column.label}>{column.header()}</Fragment>
                        }
                        return <th key={column.label}>{column.label}</th>
                    })}
                </tr>

            </thead>
            <tbody>
                {data.map(item => {
                    return <tr className='border-b' key={item.name}>
                        {config.map(configItem => {
                            return <td key={configItem.label} className='p-3'>{configItem.render(item)}</td>
                        })}
                    </tr>
                })}

            </tbody>

        </table>
    );
}

export default Table;