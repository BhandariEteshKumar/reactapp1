function Home() {
  return (
    <div className="App">
      <div className="inputValue">
        <form>
          <div className="row">
            <label htmlFor="title" className="col">
              Title:{" "}
            </label>
            <input id="title" type="text" className="col" />
          </div>
          <div className="row">
            <label htmlFor="poster" className="col">
              Poster Link:{" "}
            </label>
            <input type="text" id="poster" className="col" />
          </div>
          <div className="row">
            <label htmlFor="rating" className="col">
              Rating:{" "}
            </label>
            <input type="text" id="rating" className="col" />
          </div>
          <div className="row">
            <label className="col">Summary: </label>
            <textarea className="col"></textarea>
          </div>
          <button
            onClick={(e) => {
              setMovies([...movies, { name: "jdslkf" }]);
              e.preventDefault();
            }}
          >
            Add
          </button>
        </form>
      </div>
      <div className="movie-list">
        {movies.map(({ name, poster, rating, summary }, index) => (
          <Movie
            deletebutton={
              <button
                onClick={() => {
                  const remaingmovies = movies.filter((movie, index1) => {
                    return index1 !== index;
                  });
                  setMovies(remaingmovies);
                }}
              >
                Delete
              </button>
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
