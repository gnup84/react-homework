import React from "react";
import { Switch, Route, withRouter } from "react-router";

import CityList from "./CityList";
import Weather from "./Weather/index";

const API_CITIES = "http://localhost:8888/weather-service/available-cities";

class Cities extends React.Component {
  state = {
    cities: [],
  };

  componentDidMount() {
    console.log("City component");

    const { cities } = this.state;

    const citiesData = fetch(API_CITIES)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          cities: data,
        });
      });

  }

  render() {
    const { match } = this.props;
    const { cities } = this.state;

    return (
      <div>
        <h1>Cities</h1>
        <p>City List</p>
        <Switch>
          <Route path={`${match.path}/:cityName`} component={Weather} />
          <Route
            exact
            path={match.path}
            render={() => <CityList cities={cities} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Cities);
