
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router';
import teams from '../data.json'
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
  const {id} = useParams();
  const [team, setTeam] = useState(null)
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  console.log(team)
 
  useEffect(()=>{
    if(id){
      let res = teams.filter(e => e.abv === id)[0]
      setTeam(res)
    }
  }, [id])
  return (
    <Grid container className={classes.root} spacing={2} >
     
  </Grid>
  );
}