import React from "react";

export default class SortYear extends React.PureComponent {
  static defaultProps = {
    years: [2015, 2016, 2017, 2018, 2019]
  };

  render() {
    const { primary_release_year, onChangeFilters, years } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="primary_release_year">Год</label>
        <select
          className="form-control"
          id="primary_release_year"
          value={primary_release_year}
          name="primary_release_year"
          onChange={onChangeFilters}
        >
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
