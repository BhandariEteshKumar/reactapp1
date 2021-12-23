import { Button } from "@mui/material";
function InputMovie({ movies, setMovies }) {
  return (
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
        <Button
          variant="text"
          onClick={(e) => {
            setMovies([...movies, { name: {} }]);
            e.preventDefault();
          }}
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export { InputMovie };
