/*
    - JSON
    - API
    - GitHub

*/

//  client -- JSON    -- server

//  client --  request  =>   -- server
//  client --   <= response    -- server
//                API
//  console.log("1")
//  console.log(alert("2"))
//  console.log("3")
//   /
//   /about
//   /login
//   /login/quiz

// https://jsonplaceholder.typicode.com/users

// let api = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data[4]));

//  body params  /:id
//  path params  /name page
//  query params  ?key= , value=

/*   get  - post  - put - delete */

// https://api.openweathermap.org/data/2.5/weather?units=metric&q=
// f112ffd524d1f7938ad75467818c715f

const searchBtn = document.querySelector("button");
const searchBox = document.querySelector("input");

async function checkWeather(city) {
  //   console.log(city);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=` +
      city +
      "&appid=f112ffd524d1f7938ad75467818c715f"
  );
  const data = await response.json();
//   console.log(data);
  document.querySelector(".country").innerHTML ="Country: " + data.sys.country;
  document.querySelector(".city").innerHTML = "City :" + data.name;
  document.querySelector(".temp").innerHTML = "Temp: " + Math.round(data.main.temp ) + " <sup>o</sup>C";
  document.querySelector(".speed").innerHTML = "Speed: " + Math.floor(data.wind.speed ) + " km/h";

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
