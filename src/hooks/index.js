import axios from "axios"
import moment from 'moment'
import teams from '../data.json'
export const toDateString =(d) =>{
  let day = new Date(d)
  let res =moment(day).format('l');

  return res
}
export const toImage = (abv) => {
  let res =teams.filter(team=>team.key===abv)[0]
 
  return res.logo
}
export const fetchTeamRoster = (team) => {
    return axios.get(`${process.env.REACT_APP_CORS_API}/data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/${team}_roster.json`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    });
  };

export const fetchPlayerStats = (playerId) => {
    return axios.get(`${process.env.REACT_APP_CORS_API}/data.nba.com/data/v2015/json/mobile_teams/nba/2021/players/playercard_${playerId}_02.json`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      });

}

export const fetchTeamDetails = (abv) =>{
    return axios.get(`${process.env.REACT_APP_API}/api/teams/${abv}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      });
}

export const fetchTeamInfo = (abv) =>{
    return axios.get(`${process.env.REACT_APP_API}/api/nbaData/${abv}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      });
}

export const fetchRssFeed = (team)=>{
  if(team ==null){
    return {}
  }
  return axios.get(`${process.env.REACT_APP_CORS_API}/nba.com/${team}/rss.xml`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    });
}

export const fetchTeamVideos =(team) =>{
return axios.get(`${process.env.REACT_APP_API}/api/yt/${team}`, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
});
}

