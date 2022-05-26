import Widget from "./Widget";
import Ratings from "./Ratings";

const dataRating = {
  rating_subject: null,
  rating_value: null,
};

let newRating = new Widget("Spiderman", dataRating);

let newWidget = new Widget("Top Gun", dataRating);

let onemoWidget = new Widget("Star Wars", dataRating);

let averageRating = new Ratings();

//to clear database
const submitRating = async () => {
  const my_url =
    "https://test-api.codingbootcamp.cz/api/9ec2ea83/ratings/clear";

  const dataRating = {};
  const myResponse = await fetch(my_url, {
    method: "POST",
    body: JSON.stringify(dataRating),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const myUsableResponse = await myResponse.json();
  console.log(myUsableResponse);
};

const btn = document.querySelector(".btn-clear");
btn.addEventListener("click", () => {
  submitRating();
});
