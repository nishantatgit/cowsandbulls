import React from 'react';

const TableHeader = (props) => {
    const { headers } = props;
    return <thead>
        {headers.map(header => <th>{header}</th>)}
    </thead>
}

export default TableHeader;