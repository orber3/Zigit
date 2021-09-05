import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';

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
    fontSize: '120%',
    alignSelf: 'start',
    fontWeight: '700',
    transform: 'translate(20px,25px)',
  },
}));

const TableInfoComponent = ({ data, length }) => {
  const classes = useStyles();
  let sum = 0;
  let count = 0;
  let scoreSum = data.forEach((item) => {
    sum += item.original.score;
    if (item.original.madeDadeline == true) count++;
  });

  let finished = Math.round((count / length) * 100);
  let avg = Math.round(sum / length);

  return (
    <>
      <div className={classes.info}>{` average score: ${avg}  `}</div>
      <div className={classes.info}>{`made the dadeline:${finished}%  `}</div>
    </>
  );
};

export default TableInfoComponent;
