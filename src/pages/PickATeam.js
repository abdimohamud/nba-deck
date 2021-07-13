import React from 'react'
import { Container, Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import teams from '../data.json'
const PickATeam = ({favTeam, setFavTeam, handleClick}) => {
    
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
      const classes=useStyles()
    return (
        <div>
            <Container>

           <h1 style={{textAlign:'center'}}>Select a Team</h1>
         
            <br/>
            <br/>
             <Paper className={classes.paper} style={{border:'1px solid black'}}><h1 style={{textAlign:'center', color:'black'}}> {favTeam?favTeam:''}</h1></Paper>
             <br/>
             <Grid container spacing={3}>
          {teams.map((team, idx) => (
              <div key={idx}onClick={(e) => {
                  handleClick(e);
                }}>
            <Grid item xs>
              <Paper
                className={classes.paper}
                style={{ border: "1px solid black" }}
                id={team.name}
                
               
              >
                 

          
                <img 
               
                  width="60px"
                  height="60px"
                  alt={team.name}
                  src={team.badge}
                />       
              </Paper>
            </Grid></div>
          ))}
        </Grid>
        <br />
        <Paper className={classes.paper} style={{ border: "1px solid black" }}>
          <h1 style={{ textAlign: "center", color: "black" }}> Next</h1>
        </Paper>
            </Container>
        </div>
    )
}

export default PickATeam
