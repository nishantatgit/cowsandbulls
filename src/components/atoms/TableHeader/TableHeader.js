import React from 'react';

const TableHeader = (props) => {
    const { headers } = props;
    return (
        <thead>
            <tr>
                {headers.map(header => <th>{header}</th>)}
            </tr>
        </thead>
    );
}

export default TableHeader;