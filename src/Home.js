import { Movie } from "./Movie";
import { Button } from "@mui/material";

function Home({ movies, setMovies }) {
  function getData() {
    fetch("https://61c412bff1af4a0017d99279.mockapi.io/movies")
      .then((data) => data.json())
      .then((movies) => setMovies(movies));
    console.log(movies, "Get");
  }
  let deleteMovie = (id) => {
    fetch(`https://61c412bff1af4a0017d99279.mockapi.io/movies/${id}`, {
      method: `DELETE`,
    })
      .then((data) => data.json())
      .then(setTimeout(getData(), 1000000));
  };

  return (
    <div className="App">
      <div className="movie-list">
        {movies.map(({ name, poster, rating, summary, id }, index) => (
          <Movie
            deletebutton={
              <Button
                variant="contained"
                onClick={() => {
                  // const remaingmovies = movies.filter((movie, index1) => {
                  //   return index1 !== index;
                  // });
                  // setMovies(remaingmovies);
                  deleteMovie(id);
                }}
              >
                Delete
              </Button>
            }
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
            id={id}
          />
        ))}
      </div>
    </div>
  );
}

export { Home };
