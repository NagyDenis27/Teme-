window.onload = (event) => {
  //Cookies Homework

  const celsiusgrade = document.querySelector("#C");
  const fahrenheitgrade = document.querySelector("#F");

  celsiusgrade.addEventListener("click", () => {
    setCookie("Grad", "Celsius");
    setCookie("Language", "ro-RO");
    console.log("Celsius");
  });
  fahrenheitgrade.addEventListener("click", () => {
    setCookie("Grad", "Fahrenheit");
    setCookie("Language", "en-US");
    console.log(" Fahrenheit");
  });
  const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`;
  };

  //History Homework

  const pushHistory = document.querySelector("#pushHistory");
  pushHistory.addEventListener("click", () => {
    history.pushState("Push History Clicked", null, "History has been pushed");
    console.log(history.state);
  });

  const replaceHistory = document.querySelector("#replaceHistory");
  replaceHistory.addEventListener("click", () => {
    history.replaceState(
      "History has been replaced",
      null,
      "http://127.0.0.1:5500/cookies.html"
    );
    console.log(history.state);
  });

  //Geolocation & Ajax;

  const findMe = () => {
    const location = document.querySelector("#location");

    const currentLocation = (myPos) => {
      console.log(myPos);
      const latitude = myPos.coords.latitude;
      const longitude = myPos.coords.longitude;
      console.log(latitude + " " + longitude + " Second Console.log");
      const api =
        "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en";

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          location.innerText = data.localityInfo.administrative[2].description;
        });
    };

    navigator.geolocation.getCurrentPosition(currentLocation);
  };
  const findButton = document.querySelector("#findMe");
  findButton.addEventListener("click", findMe);
};

console.log(history.length);
