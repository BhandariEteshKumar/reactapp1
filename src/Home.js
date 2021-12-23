import { Movie } from "./Movie";
import { Button } from "@mui/material";
import { InputMovie } from "./InputMovie";
function Home({ movies, setMovies }) {
  return (
    <div className="App">
      <div className="movie-list">
        {movies.map(({ name, poster, rating, summary }, index) => (
          <Movie
            deletebutton={
              <Button
                variant="contained"
                onClick={() => {
                  const remaingmovies = movies.filter((movie, index1) => {
                    return index1 !== index;
                  });
                  setMovies(remaingmovies);
                }}
              >
                Delete
              </Button>
            }
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
          />
        ))}
      </div>
    </div>
  );
}

export { Home };
