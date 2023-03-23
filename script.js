const fadeElements = document.querySelectorAll(".cards");
const fadeElements2 = document.querySelectorAll(".fourthcard");

function fadeInOnScroll() {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    if (window.pageYOffset > elementTop - window.innerHeight) {
      element.style.opacity = 1;
    }
  });
}
function fadeInOnScroll2() {
  fadeElements2.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    if (window.pageYOffset > elementTop - window.innerHeight / 2) {
      element.style.opacity = 1;
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("scroll", fadeInOnScroll2);

fetch(
  "https://api.weatherapi.com/v1/current.json?key=ec287096b00840b18b3135226232303&q=mumbai"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let temp = document.getElementById("bigno");
    temp.innerText = data.current.temp_c;
    let cloudy = document.getElementById("cloudy");
    cloudy.innerText = data.current.cloud + "%";
    let humidity = document.getElementById("humidity");
    humidity.innerText = data.current.humidity + "%";
    let wind_kph = document.getElementById("wind_kph");
    wind_kph.innerText = data.current.wind_kph + "%";
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });

fetch(
  "https://api.weatherapi.com/v1/current.json?key=ec287096b00840b18b3135226232303&q=chennai"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const chennai = document.querySelectorAll(".cardtemp")[1];
    chennai.innerText = data.current.temp_c;
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });
fetch(
  "https://api.weatherapi.com/v1/current.json?key=ec287096b00840b18b3135226232303&q=New_Delhi"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const delhi = document.querySelectorAll(".cardtemp")[0];
    delhi.innerText = data.current.temp_c;
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });
fetch(
  "https://api.weatherapi.com/v1/current.json?key=ec287096b00840b18b3135226232303&q=jaipur"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const jaipur = document.querySelectorAll(".cardtemp")[2];
    jaipur.innerText = data.current.temp_c;

    const jaipur2 = document.getElementById("localtime");
    jaipur2.innerText = data.location.localtime;
    const jaipur3 = document.getElementById("localtime2");
    jaipur3.innerText = data.location.localtime;
    const jaipur4 = document.getElementById("localtime3");
    jaipur4.innerText = data.location.localtime;
    const jaipur5 = document.getElementById("localtime4");
    jaipur5.innerText = data.location.localtime;
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });
