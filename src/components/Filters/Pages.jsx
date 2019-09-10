import React from "react";

export default class Pages extends React.Component {
  onPrevious = () => {
    this.props.onChangePages(this.props.page - 1);
  };

  onNext = () => {
    this.props.onChangePages(this.props.page + 1);
  };

  render() {
    const { page, totalPages } = this.props;
    return (
      <div className="btn-group d-flex justify-content-between flex-column">
        <div className="list-group-item my-2">
          Страница: {page} из {totalPages}
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-secondary mx-2"
            onClick={this.onPrevious}
            disabled={page === 1}
          >
            Пред.
          </button>
          <button
            type="button"
            className="btn btn-secondary mx-2"
            onClick={this.onNext}
            disabled={page === totalPages}
          >
            След.
          </button>
        </div>
      </div>
    );
  }
}
