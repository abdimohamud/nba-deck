import { Switch, Route } from "react-router-dom";
import { useEffect, useState} from "react";
import nbateams from './data.json'
import Landing from "./pages/Landing";
import PickATeam from "./pages/PickATeam";
import Dashboard from "./pages/Dashboard";
import {TeamProvider} from './context'
function App() {
  const [teams, setTeams] = useState(nbateams)
  const [favoriteTeam, setFavoriteTeam] = useState(null)
  const [dashtheme, setDashtheme]= useState(null)
  const [roster, setRoster] = useState(null)
  const [videos, setVideos] = useState(null)
  const [rssFeed, setRSSFeed] = useState(null)
  return (
    <TeamProvider value={{favoriteTeam:favoriteTeam,setFavoriteTeam:setFavoriteTeam,dashtheme:dashtheme,setDashtheme:setDashtheme,teams:teams,setTeams:setTeams,roster:roster,setRoster:setRoster ,videos:videos,setVideos:setVideos,rssFeed:rssFeed,setRSSFeed:setRSSFeed}}>
      <Switch>
        <Route path="/team/:id">
          <Dashboard />
        </Route>
        <Route path="/pick-a-team">
          <PickATeam />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </TeamProvider>
  );
}

export default App;
