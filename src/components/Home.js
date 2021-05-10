import React, {useState} from 'react'
import logos from './teamLogos.json'


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const Home = ({teams}) => {
    const [favTeam, setFavTeam]=useState(null)

  
    const classes = useStyles();
    
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Select a Team</h1>
            <div >
            <Grid container spacing={3}>
                
          

            {teams.map((team, idx)=>(

<Grid item xs>
<Paper className={classes.paper} style={{border:'1px solid black'}}>

<img width="60px" height="60px" alt="Away Team Logo" src={team.badge}/>
</Paper>
</Grid>
))}
             </Grid> </div>
        </div>
    )
}

export default Home
