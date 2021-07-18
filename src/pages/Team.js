import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import teams from "../response.json";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 302,
  },
}));
export default function Team() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  useEffect(() => {
    if (!team) {
      let res = teams.teams.filter(
        (e) => e.strTeamShort.toString() === id.toString()
      )[0];

      setTeam(res);
    }
  }, [team, id]);
  return (
    team && (
      <Grid container className={classes.root} spacing={2}>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Box pt={4} style={{ display: "flex", justifyContent: "center" }}>
              <img src={team.strTeamBanner} alt={team.strTeamBanner} />
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <React.Fragment>
                    <Typography
                      component="h2"
                      variant="h6"
                      color="primary"
                      gutterBottom
                    >
                      {team.strTeam} ({team.strTeamShort})
                    </Typography>

                    {team.strDescriptionEN}
                  </React.Fragment>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <img
                    id={team.strTeam}
                    alt={team.strTeamShort}
                    src={team.strTeamBadge}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <img
                    id={team.strTeam}
                    alt={team.strTeamJersey}
                    src={team.strTeamJersey}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper>Stadium : {team.strStadium}</Paper>
                <Paper>Capacity : {team.intStadiumCapacity}</Paper>
                <Paper>Location : {team.strStadiumLocation}</Paper>
                <Paper>
                  <img
                    style={{ width: "100%" }}
                    id={team.strTeam}
                    alt={team.strStadium}
                    src={team.strStadiumThumb}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper>Logo</Paper>
                <Paper>
                  <img
                    style={{ width: "100%" }}
                    id={team.strTeam}
                    alt={team.strTeamLogo}
                    src={team.strTeamLogo}
                  />
                </Paper>
              </Grid>
              <Grid container wrap="nowrap" direction="row">
                <Paper>Fan Art</Paper>
                <Paper>
                  <img
                    style={{ width: "100%" }}
                    id={team.strTeam}
                    alt={team.strStadium}
                    src={team.strTeamFanart1}
                  />
                </Paper>
                <Paper>
                  <img
                    style={{ width: "100%" }}
                    id={team.strTeam}
                    alt={team.strStadium}
                    src={team.strTeamFanart2}
                  />
                </Paper>
                <Paper>
                  <img
                    style={{ width: "100%" }}
                    id={team.strTeam}
                    alt={team.strStadium}
                    src={team.strTeamFanart3}
                  />
                </Paper>
                <Paper>
                  <img
                    style={{ width: "100%" }}
                    id={team.strTeam}
                    alt={team.strStadium}
                    src={team.strTeamFanart4}
                  />
                </Paper>
              </Grid>

              <Grid>
                <React.Fragment>{team.strStadiumDescription} </React.Fragment>
              </Grid>

              <Grid item xs={12}>
                <Paper
                  className={classes.paper}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href={`https://wwww.youtube.com/${team.strYoutube}`}
                  >
                    {" "}
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href={`https://www.twitter.com/${team.strTwitter}`}
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href={`https://www.facebook.com/${team.strFacebook}`}
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href={`https://www.${team.strWebsite}`}
                  >
                    <i class="fas fa-globe"></i>
                  </a>
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href={`https://www.instagram.com/${team.strInstagram}`}
                  >
                    {" "}
                    <i class="fab fa-instagram"></i>
                  </a>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </Grid>
    )
  );
}
