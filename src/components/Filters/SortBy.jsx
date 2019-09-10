import React from "react";

export default class SortBy extends React.Component {
  static defaultProps = {
    options: [
      {
        label: "Популярные по убыванию",
        value: "popularity.desc"
      },
      {
        label: "Популярные по возростанию",
        value: "popularity.asc"
      },
      {
        label: "Рейтинг по убыванию",
        value: "vote_average.desc"
      },
      {
        label: "Рейтинг по возростанию",
        value: "vote_average.asc"
      }
    ]
  };

  render() {
    const { sort_by, onChangeFilters, options } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="sort_by">Сортировать по:</label>
        <select
          className="form-control"
          id="sort_by"
          value={sort_by}
          name="sort_by"
          onChange={onChangeFilters}
        >
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
