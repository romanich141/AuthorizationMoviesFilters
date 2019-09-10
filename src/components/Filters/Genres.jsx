import React from "react";
import { API_KEY_3, API_URL } from "../../api/api";

export default class Genres extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      genres: []
    };
  }

  getGenres = () => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=ru-RU`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          genres: data.genres
        });
      });
  };

  componentDidMount() {
    this.getGenres();
  }

  onChangeCheckbox = event => {
    if (event.target.checked) {
      this.props.onChangeFilters({
        target: {
          name: "with_genres",
          value: [...this.props.with_genres, Number(event.target.value)]
        }
      });
    } else {
      this.props.onChangeFilters({
        target: {
          name: "with_genres",
          value: this.props.with_genres.filter(
            genre => Number(genre) !== Number(event.target.value)
          )
        }
      });
    }
  };

  render() {
    const { with_genres } = this.props;
    return (
      <div className="genres__filter my-3 list-group">
        <label>Жанры</label>
        {this.state.genres.map(genre => (
          <label key={genre.id} className="list-group-item">
            {genre.name[0].toUpperCase() + genre.name.slice(1)}
            <input
              type="checkbox"
              name="with_genres"
              value={genre.id}
              onChange={this.onChangeCheckbox}
              checked={with_genres.includes(genre.id)}
            />
          </label>
        ))}
      </div>
    );
  }
}
