// import { Component } from 'react';
// import MoviesList from '../components/Co';
// import apiService from '../services/api-service';
// import Loader from 'react-loader-spinner';
// import PropTypes from 'prop-types';
import phonebook from '../img/phonebook.svg.png';

export default function HomePage() {
  // state = { movies: [], loading: false, error: null };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const { results } = await apiService
  //     .getFetchTrendingMovies()
  //     .catch(error => this.setState({ error }))
  //     .finally(() => this.setState({ loading: false }));
  //   this.setState({ movies: results });
  // }

  // const { movies, loading, error } = this.state;

  return (
    <div className="HomePage">
      <div className="HomePage_wrapper"><img src={phonebook} alt="phonebook" width={200} />
      <h1>Your Phonebook</h1></div>
      
      {/* {loading ? (
          <Loader type="Oval" color="#999999" height={50} width={50} />
        ) : error ? (
          <p>Server is not responding</p>
        ) : ( */}
      {/* <div>Home Page</div> */}
      {/* )} */}
    </div>
  );
}

//    HomePage.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object),
//   loading: PropTypes.bool,
//   error: PropTypes.object,
// };
