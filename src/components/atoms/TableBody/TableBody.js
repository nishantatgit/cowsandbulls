import React from 'react';

const TableBody = (props) => {
    const { rows } = props;
    return <tbody>
        {rows.map((row) => (
      <tr key={row[0]}>
        {row.map((col) => (
          <td key={col}>{col}</td>
        ))}
      </tr>
    ))}
    </tbody>
}

export default TableBody;