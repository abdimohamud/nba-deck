import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Container, Grid} from '@material-ui/core'
import ScoreBoard from './components/ScoreBoard'
import './App.scss';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom'
import data from './components/data.json'

function App() {
  const [teams, setTeams] = useState(data)
  const endpoint = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nba";

  // useEffect(()=>{
  //   if(teams.length===0){
  //     axios.get(endpoint)
  //     .then(res=>setTeams(res.data.teams.map(team=>{
  //       let reso ={
  //         name:team.strTeam,
  //         stadium:team.strStadium,
  //         abv:team.strTeamShort,
  //         website:team.strWebsite,
  //         fb:team.strFacebook,
  //         twitter:team.strTwitter,
  //         yt:team.strYoutube,
  //         badge:team.strTeamBadge,
  //         jersey:team.strTeamJersey,
  //         logo:team.strTeamLogo,
  //         fanart:team.strTeamFanart,
  //         banner:team.strTeamBanner,
  //         desc:team.strDescriptionEN,
  //     }
  //       return reso
  //     })))
  //     .catch(err=>console.log(err))
  //   }
  // },[teams])


  console.log(teams)
  return (
<Container maxWidth="md">
  <Switch>
    <Route exact path="/">
  <Home teams={teams}/>
    </Route>
    <Route path="/scoreboard">
    <ScoreBoard/>
    </Route>
  </Switch>


    </Container>
  );
}

export default App;
