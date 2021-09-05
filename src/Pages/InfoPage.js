import { useDispatch, useSelector } from 'react-redux';
import { GetInfoAction } from '../Actions/GetInfoAction';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Table } from '../Components/Table/TableComponent';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    minHeight: '500px',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  table: {
    alignContent: 'center',
    alignItems: 'center',
  },
}));

const InfoPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const loginReducer = useSelector((state) => state.loginReducer);
  const { userInfo } = loginReducer;

  const getInfoReducer = useSelector((state) => state.getInfoReducer);
  const { data } = getInfoReducer;

  useEffect(() => {
    if (userInfo) {
      dispatch(GetInfoAction());
    } else {
      console.log(userInfo);
    }
  }, [dispatch, userInfo]);

  const UserColumns = React.useMemo(
    () => [
      {
        Header: 'User Table',
        columns: [
          {
            Header: 'name',
            accessor: 'personalDetails.name',
          },
          {
            Header: 'Team',
            accessor: 'personalDetails.Team',
          },
          {
            Header: 'Joined At',
            accessor: 'personalDetails.joinedAt',
          },

          {
            Header: 'Avatar',
            accessor: 'personalDetails.avatar',

            Cell: (props) => (
              <div
                style={{ width: '100%', height: '65px', objectFit: 'contain' }}
              >
                <img
                  src={props.row.original.personalDetails.avatar}
                  alt={'avatar'}
                  style={{ height: '100%' }}
                />
              </div>
            ),
          },
        ],
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Information Table',
        columns: [
          {
            Header: 'Project ID',
            accessor: 'id',
          },
          {
            Header: 'Project name',
            accessor: 'name',
          },
          {
            Header: 'Score',
            accessor: 'score',
          },
          {
            Header: 'Project Duration in days',
            accessor: 'durationInDays',
          },
          {
            Header: 'Bugs Count',
            accessor: 'bugsCount',
          },
          {
            id: 'madeDadeline',
            Header: 'Finished in dadeline',
            accessor: (d) => d.madeDadeline.toString(),
          },
        ],
      },
    ],
    []
  );

  return (
    <Grid className={classes.grid}>
      <CssBaseline />
      {userInfo && userInfo[0].personalDetails ? (
        <Table
          columns={UserColumns}
          data={userInfo}
          className={classes.table}
          getCellProps={(cellInfo) => ({
            style: {
              textAlign: 'center',
            },
          })}
        />
      ) : (
        ''
      )}
      <CssBaseline />
      {data.data ? (
        <Table
          columns={columns}
          data={data.data}
          className={classes.table}
          getColumnProps={(column) => ({})}
          getRowProps={(row, column) => ({})}
          getCellProps={(cellInfo, column) => ({
            style: {
              textAlign: 'center',
              background:
                cellInfo.column.Header == 'Score'
                  ? cellInfo.value < 70
                    ? 'red'
                    : cellInfo.value > 90
                    ? 'green'
                    : 'white'
                  : 'white',
            },
          })}
        />
      ) : (
        'Loading....'
      )}
    </Grid>
  );
};

export default InfoPage;
