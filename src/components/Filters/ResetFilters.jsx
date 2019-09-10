import React from "react";

export default class ResetFilters extends React.Component {
  render() {
    const { onResetFilters } = this.props;
    return (
      <button className="btn btn-light w-100" onClick={onResetFilters}>
        Сбросить все фильтры
      </button>
    );
  }
}
