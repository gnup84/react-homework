import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const CityList = (props) => {

  const { cities, match } = props;
  const { url } = match;

  const uniqueCities = cities.filter((item, index) => cities.indexOf(item) === index);


  return (
    <ul>
      {uniqueCities.map((item) => {
        // console.log(item);
        return (
          <li key={item}>
            <Link to={`${url}/${item}`}>{item}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(CityList);
