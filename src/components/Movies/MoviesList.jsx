import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../../api/api";

export default class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: false
    };
  }

  getMovies = pages => {
    const {
      filters: { sort_by, primary_release_year, with_genres },
      page
    } = this.props;

    let link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}&primary_release_year=${primary_release_year}`;
    if (with_genres.length > 0) {
      link = `${link}&with_genres=${with_genres}`;
    }
    this.setState({
      isLoading: true
    });
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.props.showTotalPages(data.total_pages);
        this.setState({
          movies: data.results,
          isLoading: false
        });
      });
  };

  componentDidMount() {
    this.getMovies(this.props.filters, this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.filters.sort_by !== prevProps.filters.sort_by ||
      this.props.filters.primary_release_year !==
        prevProps.filters.primary_release_year ||
      this.props.filters.with_genres !== prevProps.filters.with_genres
    ) {
      this.props.onChangePages(1);
      this.getMovies(this.props.filters, 1);
    }
    if (this.props.page !== prevProps.page) {
      this.getMovies(this.props.filters, this.props.page);
    }
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div className="row">
        {isLoading ? (
          <div className="preloader" />
        ) : movies.length > 0 ? (
          movies.map(movie => {
            return (
              <div key={movie.id} className="col-6 mb-4">
                <MovieItem item={movie} />
              </div>
            );
          })
        ) : (
          <div>Фильмы не найдены</div>
        )}
      </div>
    );
  }
}
