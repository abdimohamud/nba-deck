
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Team() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

 

  return (
    <Grid container className={classes.root} spacing={2} >
     
  </Grid>
  );
}