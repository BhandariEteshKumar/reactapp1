import { Button } from "@mui/material";
import { useState } from "react";
import { idd } from "./App";

function Modify({ movies, setMovies }) {
  const [name, setName] = useState(null);
  const [poster, setPoster] = useState(null);
  const [rating, setRating] = useState(null);
  const [summary, setSummary] = useState(null);
  const example = {};
  name && (example.name = name);
  poster && (example.poster = poster);
  rating && (example.rating = rating);
  summary && (example.summary = summary);
  console.log(idd);
  return (
    <div className="inputValue">
      <form>
        <div className="row">
          <label htmlFor="title" className="col">
            Title:{" "}
          </label>
          <input
            id="title"
            type="text"
            className="col"
            onInput={(e) => setName(e.target.value)}
          />
        </div>
        <div className="row">
          <label htmlFor="poster" className="col">
            Poster Link:{" "}
          </label>
          <input
            type="text"
            id="poster"
            className="col"
            onInput={(e) => setPoster(e.target.value)}
          />
        </div>
        <div className="row">
          <label htmlFor="rating" className="col">
            Rating:{" "}
          </label>
          <input
            type="text"
            id="rating"
            className="col"
            onInput={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="row">
          <label className="col">Summary: </label>
          <textarea
            className="col"
            onInput={(e) => setSummary(e.target.value)}
          ></textarea>
        </div>
        <Button
          variant="text"
          onClick={(e) => {
            e.preventDefault();
            fetch(`https://61c412bff1af4a0017d99279.mockapi.io/movies/${idd}`, {
              method: "PUT",
              body: JSON.stringify(example),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((data) => data.json())
              .then((movies) => {
                console.log(movies);
              });
          }}
        >
          Modify
        </Button>
      </form>
    </div>
  );
}

export { Modify };
