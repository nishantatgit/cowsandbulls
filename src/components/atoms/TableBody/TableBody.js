import React from 'react';

const TableBody = (props) => {
    const { rows } = props;
    return <tbody>
        {rows.map((row) => (
      <tr>
        {row.map((col) => (
          <td>{col}</td>
        ))}
      </tr>
    ))}
    </tbody>
}

export default TableBody;