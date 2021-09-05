import { Grid, makeStyles } from '@material-ui/core';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableInfoComponent from './TableInfoComponent';

import React, { useState } from 'react';
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    height: '85%',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  info: {
    fontFamily: 'sans-sarif',
    fontSize: '140%',
    alignSelf: 'start',
    transform: 'translate(20px,25px)',
  },
}));

const defaultPropGetter = () => ({});

// const GlobalFilter = ({
//   preGlobalFilteredRows,
//   globalFilter,
//   setGlobalFilter,
// }) => {
//   const count = preGlobalFilteredRows.length;
//   const [value, setValue] = React.useState(globalFilter);
//   const onChange = useAsyncDebounce((value) => {
//     setGlobalFilter(value || undefined);
//   }, 200);

//   return (
//     <span>
//       Search:{' '}
//       <input
//         value={value || ''}
//         onChange={(e) => {
//           setValue(e.target.value);
//           onChange(e.target.value);
//         }}
//         placeholder={`${count} records...`}
//         style={{
//           fontSize: '1.1rem',
//           border: '0',
//         }}
//       />
//     </span>
//   );
// };
// function DefaultColumnFilter({
//   column: { filterValue, preFilteredRows, setFilter },
// }) {
//   const count = preFilteredRows.length;

//   return (
//     <input
//       value={filterValue || ''}
//       onChange={(e) => {
//         setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
//       }}
//       placeholder={`Search ${count} records...`}
//     />
//   );
// }

export function Table({
  columns,
  data,
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  // filter: DefaultColumnFilter,
}) {
  const classes = useStyles();
  console.log(data);
  // const filterTypes = React.useMemo(
  //   () => ({
  //     text: (rows, id, filterValue) => {
  //       return rows.filter((row) => {
  //         const rowValue = row.values[id];
  //         return rowValue !== undefined
  //           ? String(rowValue)
  //               .toLowerCase()
  //               .startsWith(String(filterValue).toLowerCase())
  //           : true;
  //       });
  //     },
  //   }),
  //   []
  // );
  // const defaultColumn = React.useMemo(
  //   () => ({
  //     // Let's set up our default Filter UI
  //     Filter: DefaultColumnFilter,
  //   }),
  //   []
  // );

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    // visibleColumns,
    // preGlobalFilteredRows,
    // setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      // defaultColumn,
      // filterTypes,
    },
    // useFilters,
    // useGlobalFilter,
    useSortBy
  );

  return (
    <Grid className={classes.grid}>
      {data[0].bugsCount ? (
        <TableInfoComponent data={data} length={data.length} />
      ) : (
        ''
      )}

      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ textAlign: 'center' }}
                >
                  {column.render('Header')}
                  {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}

                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow>
            {/* <TableCell {...visibleColumns.length}>
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.value}
              setGlobalFilter={setGlobalFilter}
            />
          </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps(getRowProps(row))}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell
                      {...cell.getCellProps([
                        {
                          className: cell.column.className,
                          style: cell.column.style,
                        },
                        getColumnProps(cell.column),
                        getCellProps(cell),
                      ])}
                    >
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
    </Grid>
  );
}
