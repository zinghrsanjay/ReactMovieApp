import React from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
const App = () => {
  return (
    <div>
     <Header />
      <div className="mt-5">{<Movie />}</div>
    </div>
  );
};

export default App;
