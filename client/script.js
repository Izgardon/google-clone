let google = document.querySelector(".search-btn");
let lucky = document.querySelector(".lucky-btn");
let logo = document.querySelector(".logo-search");
let input = document.querySelector("input");

let googleSwitch = document.querySelector("#switch");

let searchResults = document.querySelector(".search-results");

let googleContainer = document.querySelector(".container");

let magnifySearch = document.querySelectorAll(".magnify");

logo.addEventListener("click", (e) => {
  googleContainer.classList.remove("none");
  searchResults.classList.add("none");
});

magnifySearch.forEach((magnify) => {
  magnify.addEventListener("click", searchHelper);
});

google.addEventListener("click", searchHelper);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchHelper();
  }
});

lucky.addEventListener("click", feelingLucky);

function searchHelper() {
  googleContainer.classList.add("none");
  searchResults.classList.remove("none");
  removeResults();
  googleSearch();
  apiSearch();
}

function googleSearch() {
  if (googleSwitch.checked) {
    let query = input.value;
    let accessKey = "b66dea11ca6dce22d64c88699e872510";

    let url =
      "http://api.serpstack.com/search?access_key=" +
      accessKey +
      "&query=" +
      query;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.organic_results.forEach((element) => {
          searchResults.insertAdjacentHTML(
            "beforeend",
            `<div class="result">
        <div class="url">${element.url}</div>
        <div>
          <a class="link" href="${element.url}">${element.title}</a>
        </div>
        <div class="snippet">
          ${element.snippet}
        </div>
      </div>`
          );
        });

        data.organic_results;
      });
  } else return;
}

function apiSearch() {
  if (!googleSwitch.checked) {
    fetch("http://localhost:3000/search/")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          searchResults.insertAdjacentHTML(
            "beforeend",
            `<div class="result">
          <div class="url">${element.url}</div>
          <div>
            <a class="link" href="${element.url}">${element.title}</a>
          </div>
          <div class="snippet">
            ${element.snippet}
          </div>
        </div>`
          );
        });
      });
  } else return;
}

function feelingLucky() {
  fetch("http://localhost:3000/search/random")
    .then((resp) => resp.json())
    .then((data) => {
      window.location.replace(data);
    });
}

function removeResults() {
  const results = document.querySelectorAll(".result");

  results.forEach((result) => {
    result.remove();
  });
}
