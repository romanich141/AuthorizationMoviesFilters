import React from "react";
import SortBy from "./SortBy";
import SortYear from "./SortYear";
import Pages from "./Pages";
import Genres from "./Genres";

export default class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by, primary_release_year, with_genres },
      page,
      totalPages,
      onChangeFilters,
      onChangePages
    } = this.props;

    return (
      <form className="mb-3">
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
        <SortYear
          primary_release_year={primary_release_year}
          onChangeFilters={onChangeFilters}
        />
        <div className="form-group">
          <Genres onChangeFilters={onChangeFilters} with_genres={with_genres} />
          <Pages
            page={page}
            totalPages={totalPages}
            onChangePages={onChangePages}
          />
        </div>
      </form>
    );
  }
}
