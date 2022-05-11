let google = document.querySelector(".search-btn");
let lucky = document.querySelector(".lucky-btn");

let input = document.querySelector("input");

let googleSwitch = document.querySelector("#switch");

let accessKey = "b66dea11ca6dce22d64c88699e872510";

google.addEventListener("click", () => {
  googleSearch();
  apiSearch();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    googleSearch();
    apiSearch();
  }
});

function googleSearch() {
  if (googleSwitch.checked) {
    let query = input.value;

    console.log(query);

    /* let url =
    "http://api.serpstack.com/search?access_key=" +
    accessKey +
    "&query=" +
    query;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.organic_results.forEach((element) => {
        console.log(element.title);
        console.log(element.snippet);
        console.log(element.url);
      });

      data.organic_results;
    }); */
  }
}

function apiSearch() {}
