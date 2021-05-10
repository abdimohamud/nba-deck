import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Container, Grid} from '@material-ui/core'
import ScoreBoard from './components/ScoreBoard'
import './App.scss';








function App() {
  const [teamsLogos, setTeamsLogos] = useState([])
  const endpoint = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nba";

  useEffect(()=>{
    if(teamsLogos.length===0){
      axios.get(endpoint)
      .then(res=>setTeamsLogos(res.data.teams.map(team=>{
        return team.strTeamBadge
      })))
      .catch(err=>console.log(err))
    }
  },[teamsLogos])


  console.log(teamsLogos)
  return (
<Container maxWidth="md">
  {teamsLogos.map((logo, idx)=>(

<Grid item xs={2} key={idx} >
<img width="60px" height="60px" alt="Away Team Logo" src={logo}/>
</Grid>
))}
   {/* <ScoreBoard/> */}
    </Container>
  );
}

export default App;
