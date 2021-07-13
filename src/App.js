import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import PickATeam from './pages/PickATeam'
import Team from './pages/Team'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/pick-a-team"><PickATeam/></Route>
        <Route path="/team/:id"><Team/></Route>
      </Switch>
    </div>
  );
}

export default App;
