import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";
import { Box, Container } from "@material-ui/core";

// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

function NavBar() {
  const classes = useStyles();
  const [example, setExample] = React.useState<string>("primary");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  return (
      <div>
        <AppBar
            color="default"
            className={`${isCustomColor && classes.customColor} ${
            isCustomHeight && classes.customHeight
            }`}
        >
        <Container maxWidth="md">
            <Toolbar>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                NBA Deck
            </Typography>
            <Box display={{ xs: 'none',sm: 'block', md: 'block' }}>
            <IconButton color="inherit" onClick={() => setExample("default")}>
                Games
            </IconButton>
            <IconButton color="inherit" onClick={() => setExample("primary")}>
                Players
            </IconButton>
            <IconButton color="inherit" onClick={() => setExample("secondary")}>
                Teams
            </IconButton>
            </Box>
            </Toolbar>
            </Container>
        </AppBar>
        <Toolbar />
      </div>
  );
}

export default NavBar;