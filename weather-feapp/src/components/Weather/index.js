import React, { Component } from "react";
import { render } from "@testing-library/react";




const API_WEATHER = "http://localhost:8888/weather-service/weathers?cityName=";


class Weather extends React.Component {
  
  state = {
    "weather":
      {
        main:"Error",
        description:"Error",
        temp: 'Error',
      }
  };

  async componentDidMount(){
    const { cityName } = this.props.match.params;
    const api = API_WEATHER;
    const weather = await fetch(api + cityName)
    .then(res => res.json().catch())
    .then(jason => this.setState( {
      "weather":
        {
          main: jason.weather[0].main,
          description: jason.weather[0].description,
          temp: (jason.main.temp - 273.15).toFixed(2) + '°C',
        }
      }))
      .catch(err => console.warn('ERROR occurs: Can not load the data from server'));

  }

 
    
  render(){
    const tempStyle={
      width: "100%",
      textAlign: "center"
    }



    const { cityName } = this.props.match.params;
    const { weather } = this.state;
    return (
      <div>
        <h2>도시 이름 : {cityName}</h2>
        
          <div style={tempStyle}>
            {weather && <div><h3>날씨 : {JSON.stringify(weather.main)}</h3></div>}
            {weather && <div><h3>상세 날씨 : {JSON.stringify(weather.description)}</h3></div>}
            {weather && <div><h3>기온 : {JSON.stringify(weather.temp)}</h3></div>}
          </div>
        
      </div>
    );
  }


}

export default Weather;