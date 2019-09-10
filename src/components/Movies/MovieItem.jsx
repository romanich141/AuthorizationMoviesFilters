import React from "react";

const movieItemStyle = {
  objectFit: "cover"
};

export default class MovieItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <img
          style={movieItemStyle}
          className="card-img-top card-img--height"
          src={`https://image.tmdb.org/t/p/w400${item.backdrop_path ||
            item.poster_path}`}
          alt="'Film' + {item.title}"
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="card-text">Рейтинг: {item.vote_average}</div>
        </div>
      </div>
    );
  }
}
