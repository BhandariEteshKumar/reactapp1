import React, { useState, useEffect } from "react";
import { Home } from "./Home";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import { TicTacToe } from "./tictactoe";
import { AppBar, Button, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom";
import { InputMovie } from "./InputMovie";
import { createContext, useContext } from "react";
import { Modify } from "./Modify";

const themeCtx = createContext(null);
const movieCtx = createContext(null);

export default function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://61c412bff1af4a0017d99279.mockapi.io/movies")
      .then((data) => data.json())
      .then((movies) => setMovies(movies));
  }, []);

  // useEffect(() => {
  //   fetch("https://61c412bff1af4a0017d99279.mockapi.io/movies")
  //     .then((data) => data.json())
  //     .then((movies) => setMovies(movies));
  // }, [movies]);

  const history = useHistory();

  const [theme, setTheme] = useState("light");
  const stylesbg = {
    background: theme === "light" ? "black" : "white",
    color: theme === "light" ? "orange" : "black",
  };
  let val = "light";

  return (
    <movieCtx.Provider value={[movies, setMovies]}>
      <themeCtx.Provider value={[theme, setTheme]}>
        <div className="app" style={stylesbg}>
          <AppBar>
            <Toolbar>
              <Button
                color="inherit"
                onClick={() => {
                  history.push("/");
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  history.push("/game");
                }}
              >
                Game
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  history.push("/inputmovie");
                }}
              >
                Add Movie
              </Button>
              {/* <Button color="inherit" onClick={Backgroud()}>
              {theme}
            </Button> */}
              <ListItem val={val} setTheme={setTheme} theme={theme} />
            </Toolbar>
          </AppBar>
          <br />
          <br />
          {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
      </nav> */}
          <Switch>
            <Route path="/game">
              <TicTacToe />
            </Route>
            <Route path="/inputmovie">
              <InputMovie movies={movies} setMovies={setMovies} />
            </Route>
            <Route path="/modify">
              <Modify movies={movies} setMovies={setMovies} />
            </Route>
            <Route path="/">
              <Home movies={movies} setMovies={setMovies} />
            </Route>
          </Switch>
        </div>
      </themeCtx.Provider>
    </movieCtx.Provider>
  );
}

const Modifymovie = ({ id }) => (
  <div>
    <ModifyMovie id={id} />
  </div>
);
let idd;
const ModifyMovie = ({ id }) => {
  // const [movies, setMovies] = useContext(movieCtx);
  const history = useHistory();
  return (
    <Button
      color="inherit"
      onClick={() => {
        history.push("/modify");
        idd = id;
      }}
    >
      Modify
    </Button>
  );
};

const ListItem = ({ val }) => (
  <div>
    <Button1 value={val} />
  </div>
);
const Button1 = ({ value }) => {
  const [theme, setTheme] = useContext(themeCtx);

  const styles = {
    background: theme === "light" ? "white" : "black",
    color: !(theme === "light") ? "white" : "black",
  };
  value = theme;
  return (
    <Button
      style={styles}
      sx={{ marginLeft: "auto" }}
      onClick={() => setTheme(theme === "light" ? "black" : "light")}
    >
      {value}
    </Button>
  );
};

export { idd };
export { Modifymovie };
