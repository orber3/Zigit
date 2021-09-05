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
    fontSize: '140%',
    alignSelf: 'start',
    transform: 'translate(20px,25px)',
  },
}));

const infoComponent = (data) => {
  const classes = useStyles();

  let sum = 0;
  let count = 0;
  let scoreSum = data.forEach((score) => {
    sum += score.score;
    if (score.madeDadeline == true) count++;
  });

  let finished = Math.round((count / data.length) * 100);
  let avg = sum / data.length;

  return (
    <>
      <div className={classes.info}>{` average score: ${avg}  `}</div>
      <div
        className={classes.info}
      >{` amount of projects who made the dadeline : ${finished}%  `}</div>
    </>
  );
};

export default infoComponent;
