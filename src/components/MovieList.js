import React from "react";
const MovieList = (props) =>
{

    const displaylist = props.movies.map((result)=>
      <div key={result.id}>
        <li>{result.title}</li>
        <li>{result.description}</li>
        </div>
    );
    return(
        <div>
             {displaylist}
        </div>
    )

}

export default MovieList;