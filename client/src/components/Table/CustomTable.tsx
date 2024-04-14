import React, { ReactNode } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface TableProps<T> {
  data: T[];
  columns: TableColumn[];
  renderActionCell?: (row: T) => ReactNode;
}


function CustomTable<T>({ data, columns, renderActionCell }: React.PropsWithChildren<TableProps<T>>): JSX.Element {

  const getNestedPropertyValue = (obj: any, accessor: string) => {
    return accessor.split('.').reduce((acc, cur) => acc?.[cur], obj);
  };

  return (
    <TableContainer component={Paper} style={{ height: '85%' }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.accessor}>{column.label}</TableCell>
            ))}
            {renderActionCell && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow key={row.id}>
              {columns.map(column => (
                <TableCell key={column.accessor}>
                  {column.accessor.includes('.')
                    ? getNestedPropertyValue(row, column.accessor)
                    : row[column.accessor]}
                </TableCell>
              ))}
              {renderActionCell && <TableCell>{renderActionCell(row)}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default CustomTable;
