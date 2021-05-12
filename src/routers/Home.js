import React from 'react';
import PropTypes from "prop-types"
import axios from "axios"
import Movie from "../components/Movie"
import "./Home.css";
 // Component 는 html을 반환하는 함수

//class Component
class Home extends React.Component{
  // state 는 object고 이값은 변한다. 
  state ={
    isLoading : true,
    movies :[]
  }
  // await 는 async가 있어야만 사용이가능하다(비동기)
  getMovies = async() =>{
    //const moives = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(moives.data.data.movies);
    const {data:{data:{movies}}} =await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    // this.setState({movies:movies})  -> this.setState({movies})
    this.setState({movies,isLoading:false});
  }
  componentDidMount(){
    this.getMovies();
    
  }
 
  //react는 자동적으로 class component의 render method를 실행한다. 자동으로
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
