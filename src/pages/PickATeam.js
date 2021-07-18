import React from "react";
import { Container, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import teams from "../response.json";
const PickATeam = ({ favTeam, handleClick }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      "&:hover": {
        backgroundColor: "#15e577",
        borderColor: "#564345",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "center" }}>Select a Team</h1>

        <br />
        <br />
        <Paper className={classes.paper} style={{ border: "1px solid black" }}>
          <h1 style={{ textAlign: "center", color: "black" }}>
            {" "}
            {favTeam ? favTeam.name : ""}
          </h1>
        </Paper>
        <br />
        <Grid container spacing={3}>
          {teams.teams.map((team, idx) => (
            <div
              key={idx}
              name={team.strTeam}
              id={team.strTeam}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <Grid item xs>
                <Paper
                  className={classes.paper}
                  style={{
                    border: "1px solid black",
                    marginLeft: "25px",
                    marginBottom: "10px",
                  }}
                  id={team.strTeam}
                >
                  <img
                    width="60px"
                    height="60px"
                    id={team.strTeam}
                    alt={team.strTeamShort}
                    src={team.strTeamBadge}
                  />
                </Paper>
              </Grid>
            </div>
          ))}
        </Grid>
        <br />
        {favTeam ? (
          <Link to={`/team/${favTeam.abv}`}>
            <Paper
              className={classes.paper}
              style={{ border: "1px solid black" }}
            >
              <h1 style={{ textAlign: "center", color: "black" }}> Next</h1>
            </Paper>
          </Link>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default PickATeam;
