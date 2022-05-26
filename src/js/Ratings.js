class Ratings {
  constructor() {
    this.createRatingWidget(this.rating);
    this.averageRating();
  }

  createRatingWidget = () => {
    const body = document.querySelector("body");
    const ratingWidget = document.createElement("div");
    ratingWidget.innerHTML = `<div class='rating-widget'>Some text we get from API:  ..... ->>></div>`;
    body.appendChild(ratingWidget);
    // console.log(data[i].subject, data[i].value);
  };

  averageRating = async () => {
    const res = await fetch(
      "https://test-api.codingbootcamp.cz/api/9ec2ea83/ratings"
    );
    const data = await res.json();

    data.forEach((el, i) => {
      console.log(data[i].subject, data[i].value);
    });
  };
}

export default Ratings;
