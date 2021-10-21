import React, { useEffect, useState } from "react";
import "./Test.css";
import { getCurrentDay, getCurrentTime } from "./Time&Date";
function Test() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState("");
  const [search, setSearch] = useState("");
  const [a, setA] = useState(null);
  let curDate = document.getElementById("date");
  //let weathercon = document.getElementById("weathercon");
  curDate = getCurrentDay() + getCurrentTime();
  useEffect(() => {
    const fetchApi = async () => {
      //async for promise return. it will must return a response . if API active the response will be valid.
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=071068cc26b13f0d70dc426db4e55820`;
      const response = await fetch(url);
      const resJson = await response.json(); // convert response in json format for practical use.
      setCity(resJson);

      {
        !city.name ? <p> No Data </p> : setA(city.weather[0].icon);
      }
    };
    fetchApi();
  }, [search]);

  const url = `https://openweathermap.org/img/wn/${a}@4x.png`;

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=071068cc26b13f0d70dc426db4e55820`;
      const response = await fetch(url);
      const resJson2 = await response.json();
      setForecast(resJson2);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="container_row">
      <div className="row1">
        <div className="search-container">
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Enter a City Name...."
            className="search-input"
          ></input>
        </div>
      </div>
      {!city.name ? (
        <div className="No_data">
          <br />
          <h3> {curDate}</h3>
        </div>
      ) : (
        <div className="row">
          <div className="column">
            <div className="hum1">
              <p>{city.weather[0].description}</p>
            </div>
            <div className="weathercon">
              <div
                className="fas"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            </div>
            <div className="hum">
              <p>Humidity : {city.main.humidity}% </p>
            </div>
            <div className="hum">
              <p>Wind : {city.wind.speed} Km/h</p>
            </div>
          </div>

          <div className="column_info">
            <h1 className="location">
              <i className="fas fa-street-view"></i>
              {search} ({city.sys.country})
            </h1>
            <div id="date" className="date">
              {curDate}
            </div>
            <div className="temp-container">
              <div className="temp">
                {city.main.temp}°<span class="after-temp">C</span>
              </div>
              <div className="real-feel">RealFeel® {city.main.feels_like}°</div>
            </div>
          </div>
          {!forecast.list ? (
            <div>
              <p>No Data Found</p>
              <p>Please Search with a Valid City Name</p>
            </div>
          ) : (
            <div className="column">
              <h4 style={{ opacity: "0.9" }}> Forecast of next Four Days</h4>
              <div className="forecast">
                <div className="weathercon1">
                  <h5>{forecast.list[8].weather[0].description}</h5>
                  <div
                    className="fas1"
                    style={{
                      backgroundImage: `url(https://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon}@2x.png)`,
                    }}
                  ></div>
                </div>
                <div className="forinfo">
                  <h5>{forecast.list[8].dt_txt}</h5>

                  <h5>Humidity : {forecast.list[9].main.humidity}% </h5>
                  <h5>Temp : {forecast.list[9].main.temp}°C </h5>
                </div>
              </div>
              <div className="forecast">
                <div className="weathercon1">
                  <h5>{forecast.list[16].weather[0].description}</h5>
                  <div
                    className="fas1"
                    style={{
                      backgroundImage: `url(https://openweathermap.org/img/wn/${forecast.list[16].weather[0].icon}@2x.png)`,
                    }}
                  ></div>
                </div>
                <div className="forinfo">
                  <h5>{forecast.list[16].dt_txt}</h5>

                  <h5>Humidity : {forecast.list[16].main.humidity}% </h5>
                  <h5>Temp : {forecast.list[16].main.temp}°C </h5>
                </div>
              </div>
              <div className="forecast">
                <div className="weathercon1">
                  <h5>{forecast.list[24].weather[0].description}</h5>
                  <div
                    className="fas1"
                    style={{
                      backgroundImage: `url(https://openweathermap.org/img/wn/${forecast.list[24].weather[0].icon}@2x.png)`,
                    }}
                  ></div>
                </div>
                <div className="forinfo">
                  <h5>{forecast.list[24].dt_txt}</h5>

                  <h5>Humidity : {forecast.list[27].main.humidity}% </h5>
                  <h5>Temp : {forecast.list[27].main.temp_min}°C </h5>
                </div>
              </div>
              <div className="forecast">
                <div className="weathercon1">
                  <h5>{forecast.list[32].weather[0].description}</h5>
                  <div
                    className="fas1"
                    style={{
                      backgroundImage: `url(https://openweathermap.org/img/wn/${forecast.list[32].weather[0].icon}@2x.png)`,
                    }}
                  ></div>
                </div>
                <div className="forinfo">
                  <h5>{forecast.list[32].dt_txt}</h5>

                  <h5>Humidity : {forecast.list[35].main.humidity}% </h5>
                  <h5>Temp min : {forecast.list[35].main.temp}°C </h5>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default Test;
