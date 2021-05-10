import React from 'react'
import data from './data.json'

import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Box, createStyles, Grid, LinearProgress, TableCell, TableRow, Theme, Typography, withStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const RETREIVE_LIVEMATCH_JSON= "https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    alignpropleft: {
        textAlign: 'left',
    },
    quater: {
        fontWeight:700,
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    table: {
        minWidth: 100,
    },
  }));
  

const ScoreBoard = () => {
     console.log(data)
    console.log("Date", data.scoreboard.gameDate)
     console.log("Games", data.scoreboard.games)
     const classes = useStyles();
     
    return (
        <div>
            <Grid container  spacing={3}  alignContent="center" justify="center">
            {data.scoreboard.games.map((game,n) => {
                return <div className="matches" key={n}>
                        {(game.gameStatusText === "PPD") ?
                                <div></div>
                            :
                            <Grid item lg={6} xs={12}>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Grid container spacing={1}>
                                        <Grid item xs={3} >
                                            <img width="60px" height="60px" alt="Home Team Logo" src={"https://ca.global.nba.com/media/img/teams/00/logos/" + game.homeTeam.teamTricode +"_logo.png"} />
                                            {/* <div>{game.homeTeam.teamName}</div> */}
                                        </Grid>
                                        <Grid item xs={2} >
                                            {/* <h4 className="liveMatchScore">{game.homeTeam.score}</h4> */}
                                            <div className="liveMatchScore">
                                                <Typography variant="h5" align="center">
                                                    {game.homeTeam.score}
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={2} >
                                            {(game.gameStatus === 1 || game.gameStatus === 3) ?
                                             <div></div>
                                            :
                                            <div className="centerLoadingLine">
                                                <LinearProgress color="secondary" />
                                            </div>
                                            }
                                            <div className={"gameClock "+ (game.gameStatusText === "Final" ? 'final' : '')}>{game.gameStatusText}</div>
                                            
                                        </Grid>
                                        <Grid item xs={2} >
                                            <div className="liveMatchScore">
                                                <Typography variant="h5" align="center">
                                                    {game.awayTeam.score}
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={3} >
                                            <img width="60px" height="60px" alt="Away Team Logo" src={"https://ca.global.nba.com/media/img/teams/00/logos/" + game.awayTeam.teamTricode +"_logo.png"} />
                                            {/* <div>{game.awayTeam.teamName}</div> */}
                                        </Grid>
                                    </Grid>
                                    
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Grid container spacing={1} className="openContainer">
                                        <Grid item xs={3} >
                                            <Box fontSize={16} fontWeight={700}>
                                                {game.homeTeam.teamCity} {game.homeTeam.teamName}
                                            </Box>
                                            <Box fontSize={14}>
                                                {game.homeTeam.wins + "-" + game.homeTeam.losses }
                                            </Box>
                                            <Box fontSize={12} className={classes.alignpropleft} >
                                                Timeout : {game.homeTeam.timeoutsRemaining}<br/>
                                                In Bonus : {game.homeTeam.inBonus}
                                            </Box>
                                            <Box fontSize={14} fontWeight={700}>Last 5 games</Box>
                                            {/* {teamsData.filter(team => team.profile.city.includes(game.homeTeam.teamCity)).map((data,n) => {
                                                return <span key={n}>
                                                    {data.monthGroups.map((monthGroup,m) => {
                                                        return <span key={m}>
                                                            {monthGroup.games.map((game,k) => {
                                                                return <Grid key={k}>
                                                                    {(game.winOrLoss === "Won") ?
                                                                      <div>
                                                                        <span className="last5WinLoss">W</span>
                                                                        {(game.isHome === "true") ?
                                                                            <span className="teamabbr"> vs {game.awayTeam.profile.abbr}</span>
                                                                            :
                                                                            <span className="teamabbr"> vs {game.homeTeam.profile.abbr}</span>
                                                                        }
                                                                      </div>
                                                                    :
                                                                      <div>
                                                                        <span className="last5WinLoss">L</span>
                                                                            {(game.isHome === "true") ?
                                                                            <span className="teamabbr"> vs {game.awayTeam.profile.abbr}</span>
                                                                            :
                                                                            <span className="teamabbr"> vs {game.homeTeam.profile.abbr}</span>
                                                                            }
                                                                      </div>
                                                                    }
                                                                </Grid>
                                                            })}
                                                        </span>
                                                    })}
                                                </span>
                                            })} */}

                                        </Grid>
                                        <Grid item xs={2}>
                                            <Grid container direction="column" justify="flex-start" alignItems="flex-end" >
                                                {game.homeTeam.periods.map((period,n) => {
                                                    return <Grid key={n}><p>{period.score}</p></Grid>
                                                })}
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Grid container direction="column" justify="flex-start" alignItems="center">
                                                {game.homeTeam.periods.map((period,n) => {
                                                    return <Grid key={n}>
                                                        {(period.period <= 4) ?
                                                        <p className={classes.quater}>-Q{period.period}-</p>
                                                        :
                                                        <p>{period.period}</p>
                                                        }
                                                        </Grid>
                                                })}
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Grid container direction="column" justify="flex-start" alignItems="flex-start" >
                                                {game.awayTeam.periods.map((period,n) => {
                                                        return <Grid key={n}><p>{period.score}</p></Grid>
                                                    })}
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={3} >
                                            <Box fontSize={16} fontWeight={700}>
                                                {game.awayTeam.teamCity} {game.awayTeam.teamName}
                                            </Box>
                                            <Box fontSize={14}>
                                                {game.awayTeam.wins + "-" + game.awayTeam.losses }
                                            </Box>
                                            <Box fontSize={12} className={classes.alignpropleft}>
                                                Timeout : {game.awayTeam.timeoutsRemaining}<br/>
                                                In Bonus : {game.awayTeam.inBonus}
                                            </Box>
                                            <Box fontSize={14} fontWeight={700}>Last 5 games</Box>
                                            {/* {teamsData.filter(team => team.profile.city.includes(game.awayTeam.teamCity)).map((data,n) => {
                                                return <span key={n}>
                                                    {data.monthGroups.map((monthGroup,m) => {
                                                        return <span key={m}>
                                                            {monthGroup.games.map((game,k) => {
                                                                return <Grid key={k}>
                                                                    {(game.winOrLoss === "Won") ?
                                                                      <div>
                                                                        <span className="last5WinLoss">W</span>
                                                                        {(game.isHome === "true") ?
                                                                            <span className="teamabbr"> vs {game.awayTeam.profile.abbr}</span>
                                                                            :
                                                                            <span className="teamabbr"> vs {game.homeTeam.profile.abbr}</span>
                                                                        }
                                                                      </div>
                                                                    :
                                                                      <div>
                                                                        <span className="last5WinLoss">L</span>
                                                                            {(game.isHome === "true") ?
                                                                            <span className="teamabbr"> vs {game.awayTeam.profile.abbr}</span>
                                                                            :
                                                                            <span className="teamabbr"> vs {game.homeTeam.profile.abbr}</span>
                                                                            }
                                                                      </div>
                                                                    }
                                                                </Grid>
                                                            })}
                                                        </span>
                                                    })}
                                                </span>
                                            })} */}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container direction="row" justify="center" alignItems="center" >
                                                <Box fontSize={20} textAlign={'left'} paddingTop={2} paddingBottom={3}>
                                                    <u>Leaders</u>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Grid container direction="row" justify="center" alignItems="center" >
                                                <Grid >
                                                    <Box textAlign={'left'}>
                                                        <img width="115px" height="85px" alt="Home Team Leader" src={"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + game.gameLeaders.homeLeaders.personId +".png"} />
                                                    </Box>
                                                </Grid>
                                                <Grid className="LeaderPlayerDetails">
                                                    <Box fontWeight={600}>{game.gameLeaders.homeLeaders.name}</Box>
                                                    <Box>Points  : {game.gameLeaders.homeLeaders.points}</Box>
                                                    <Box>Assists : {game.gameLeaders.homeLeaders.assists}</Box>
                                                    <Box>Rebound : {game.gameLeaders.homeLeaders.rebounds}</Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} >
                                            <Grid container direction="row" justify="center" alignItems="center" >
                                                <Grid >
                                                    <Box textAlign={'right'}>
                                                        <img width="115px" height="85px" alt="Away Team Leader" src={"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + game.gameLeaders.awayLeaders.personId +".png"} />
                                                    </Box>
                                                </Grid>
                                                <Grid className="LeaderPlayerDetails">
                                                    <Box fontWeight={600}>{game.gameLeaders.awayLeaders.name}</Box>
                                                    <Box>Points  : {game.gameLeaders.awayLeaders.points}</Box>
                                                    <Box>Assists : {game.gameLeaders.awayLeaders.assists}</Box>
                                                    <Box>Rebound : {game.gameLeaders.awayLeaders.rebounds}</Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    </AccordionDetails>
                                </Accordion>

                            </Grid>
                        }
                        </div>
                })}
            </Grid>
            
        </div>
    )
}

export default ScoreBoard
