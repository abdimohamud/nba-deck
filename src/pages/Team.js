
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import teams from '../response.json'
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 302,
  },
}));
export default function Team() {
  const {id} = useParams();
  const [team, setTeam] = useState(null)

  const classes = useStyles();
  console.log(id)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  useEffect(()=>{
    if(!team){
      let res = teams.teams.filter(e => e.strTeamShort.toString() === id.toString())[0]
      console.log(res)
      setTeam(res)
    }
  }, [team])
  return team && (
    <Grid container className={classes.root} spacing={2} >
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Box pt={4}>
          <img src={team.strTeamBanner} alt={team.strTeamBanner}/>
          </Box>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                <React.Fragment>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>{team.strTeam} ({team.strTeamShort})</Typography>
     <Paper>Home</Paper>
     {team.strDescriptionEN}
        </React.Fragment>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
             <img   id ={team.strTeam}
                  alt={team.strTeamShort}
                  src={team.strTeamBadge} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
             <img   id ={team.strTeam}
                  alt={team.strTeamJersey}
                  src={team.strTeamJersey} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper >
                {/* {team.strStadium} */}
             <img  style={{width:'100%'}} id ={team.strTeam}
                  alt={team.strStadium}
                  src={team.strStadiumThumb} />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper} style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                {/* <Orders /> */}
                <a target="_tab" rel="noopener noreferrer" href={team.strYoutube.toString()}> <i class="fab fa-youtube"></i></a>
                <a target="_tab" rel="noopener noreferrer" href={team.strTwitter}><i class="fab fa-twitter"></i></a>
                <a target="_tab" rel="noopener noreferrer" href={team.strFacebook}><i class="fab fa-facebook-f"></i></a>
                <a target="_tab" rel="noopener noreferrer" href={team.strWebsite}><i class="fas fa-globe"></i></a>
              </Paper>
            </Grid>
          </Grid>
       
        </Container>
      </main>
  </Grid>
  );
}