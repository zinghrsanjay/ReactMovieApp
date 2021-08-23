import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import axios from "axios";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get("./data.json")
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid" style={{ marginLeft: "-15px" }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">{<MovieList movies={movie} />}</div>
        </div>
      </div>
    </div>
  );
};
export default Movie;
