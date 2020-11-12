import logo from "./logo.svg";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import SearchBar from "./SearchBar.js";
import WeatherCard from "./Card.js";

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onChange={setLocation}></SearchBar>
        <Grid container spacing={3}>
          {/* map */}
          <Grid item xs={4}>
            <Paper>xs=4</Paper>
          </Grid>
          {/* weather info */}
          <Grid item xs={8}>
            <Grid container spacing={3}>
              {/* cards 5 days */}
              <Grid item xs={12}>
                <WeatherCard></WeatherCard>
              </Grid>
              {/* info 1 day */}
              <Grid item xs={12}>
                <Paper>xs=12</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
