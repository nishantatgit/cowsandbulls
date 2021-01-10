import React from "react";

import TableHeader from '../../atoms/TableHeader/TableHeader';
import TableBody from '../../atoms/TableBody/TableBody';
import content from '../../../constants/content';

function Table(props) {
  const {
    data: { headers, rows },
    id
  } = props;

  return (
    <table id={id}>
      <caption>{content.resultCaption}</caption>
      <TableHeader headers={headers} />
      <TableBody rows={rows} />
    </table>
  );
}

export default Table;
