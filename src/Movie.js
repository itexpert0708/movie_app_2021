import React from "react";
import PropTypes from "prop-types";

function Movie({id,year,title,summary,poster}){
    //state가 필요없기때문에 , class component가 아니라, function component로 만든다. 
    return <h1>{title}</h1>
}

Movie.protoType = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    titie : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster :  PropTypes.string.isRequired

}
export default Movie;