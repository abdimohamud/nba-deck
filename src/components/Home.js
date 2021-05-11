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
    "&:hover": {
      backgroundColor: "#15e577",
      borderColor:"#564345"

  },
  },
}));
const Home = ({teams}) => {
    const [favTeam, setFavTeam]=useState(null)

    const handleClick = e =>{
      console.log(e)
      e.preventDefault()
      setFavTeam(e.target.id || e.target.alt)
    }
    const classes = useStyles();
    console.log(favTeam)
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Select a Team</h1>
            <div >

            <br/>
            <br/>
             <Paper className={classes.paper} style={{border:'1px solid black'}}><h1 style={{textAlign:'center', color:'black'}}> {favTeam?favTeam:''}</h1></Paper>
             <br/>
            <br/>
            <Grid container spacing={3}>
                
          

            {teams.map((team, idx)=>(

<Grid item xs>
<Paper className={classes.paper}  style={{border:'1px solid black'}} id={team.name} onClick={(e)=>{handleClick(e)}} key={idx}>

<img width="60px" height="60px" alt={team.name} src={team.badge}/>
</Paper>
</Grid>
))}
             </Grid> 
           <br/>
<Paper className={classes.paper} style={{border:'1px solid black'}}><h1 style={{textAlign:'center', color:'black'}}> Next</h1></Paper>
             
             </div>
        </div>
    )
}

export default Home
