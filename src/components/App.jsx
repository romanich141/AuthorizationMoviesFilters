import React from "react";
import Header from "./Header/Header";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";
import ResetFilters from "./Filters/ResetFilters";
import Cookies from "universal-cookie";
import { API_URL, API_KEY_3, fetchApi } from "../api/api";
const initialState = {
  user: null,
  session_id: null,
  filters: {
    sort_by: "popularity.desc",
    primary_release_year: 2019,
    with_genres: []
  },
  page: 1,
  totalPages: null
};
const cookies = new Cookies();
export default class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  //Header
  updateSessionId = session_id => {
    cookies.set("session_id", session_id, {
      path: "/",
      maxAge: 2592000
    });
    this.setState({
      session_id
    });
  };

  updateUser = user => {
    this.setState({
      user
    });
  };

  componentDidMount() {
    const session_id = cookies.get("session_id");
    if (session_id) {
      fetchApi(
        `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`
      ).then(user => {
        this.updateUser(user);
      });
    }
  }
  //End Header
  //Filters
  onResetFilters = event => {
    event.preventDefault();
    this.setState({
      ...initialState
    });
  };
  onChangeFilters = event => {
    const newFilters = {
      ...this.state.filters,
      [event.target.name]: event.target.value
    };
    this.setState({
      filters: newFilters
    });
  };
  onChangePages = page => {
    this.setState({
      page
    });
  };
  showTotalPages = totalPages => {
    this.setState({
      totalPages
    });
  };
  //End Filters
  render() {
    const { user } = this.state;
    return (
      <>
        <Header
          user={user}
          updateUser={this.updateUser}
          updateSessionId={this.updateSessionId}
        />
        <div className="container">
          <div className="row mt-4">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div>
                    <h3>Фильтры:</h3>
                  </div>
                  <ResetFilters onResetFilters={this.onResetFilters} />
                  <Filters
                    filters={this.state.filters}
                    page={this.state.page}
                    totalPages={this.state.totalPages}
                    onChangeFilters={this.onChangeFilters}
                    onChangePages={this.onChangePages}
                    onResetFilters={this.onResetFilters}
                    onChangeCheckbox={this.onChangeCheckbox}
                  />
                </div>
              </div>
            </div>
            <div className="col-8">
              <MoviesList
                filters={this.state.filters}
                page={this.state.page}
                showTotalPages={this.showTotalPages}
                onChangePages={this.onChangePages}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
