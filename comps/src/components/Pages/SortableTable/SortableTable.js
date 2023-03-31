import React from 'react';
import { GoArrowSmallDown, GoArrowSmallUp, } from 'react-icons/go';
import Table from '../../Table/Table';
import useSort from '../../hooks/useSort';

function SortableTable(props) {
    const { config, data } = props;
    const { sortedData, setSortColumn, sortBy, sortOrder } = useSort(data, config);


    function getIcons(label, sortBy, sortOrder) {
        if (label !== sortBy) {
            return <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        }

        if (sortOrder === null) {
            return <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        }

        if (sortOrder === 'asc') {
            return <div>
                <GoArrowSmallUp />
            </div>
        }

        if (sortOrder === 'desc') {
            return <div>
                <GoArrowSmallDown />
            </div>
        }


    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        }

        return {
            ...column,
            header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => { setSortColumn(column.label) }}>
                <div className='flex items-center'>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        }

    })

    return (
        <div>
            <Table {...props} data={sortedData} config={updatedConfig}></Table>
        </div>

    );
}

export default SortableTable;