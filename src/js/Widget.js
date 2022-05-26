class Widget {
  constructor(header, dataRating) {
    this.header = header;
    this.dataRating = dataRating;
    this.createWidget();
  }

  createWidget = () => {
    const body = document.querySelector("body");
    const newWidget = document.createElement("div");
    newWidget.innerHTML = `
    <div class='rating'><h2>${this.header}</h2>
    <div class="rating__value">0</div>
      <div class="rating__stars">
        <div class="rating__star rating__star--on"></div>
        <div class="rating__star"></div>
        <div class="rating__star "></div>
        <div class="rating__star"></div>
        <div class="rating__star"></div>
      </div>
      <button class='btn-send'>Send rating!</button>
      </div>
  `;

    // Senditn POST fetch
    // sends data from LAST rated title :()
    const submitRating = async () => {
      const my_url = "https://test-api.codingbootcamp.cz/api/9ec2ea83/ratings";
      const dataRating = {
        rating_subject: `${this.dataRating.rating_subject}`,
        rating_value: ` ${this.dataRating.rating_value}`,
      };

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

    body.appendChild(newWidget);

    const btnSend = newWidget.querySelector(".btn-send");

    btnSend.addEventListener("click", () => {
      submitRating();
      console.log(this.dataRating);
    });

    let textRating = newWidget.querySelector(".rating__value");
    const stars = newWidget.querySelectorAll(".rating__star");

    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        stars.forEach((tempStar, tempIndex) => {
          tempIndex <= index
            ? tempStar.classList.add("rating__star--on")
            : tempStar.classList.remove("rating__star--on");
        });

        textRating.textContent = index + 1;

        //to get current header with rating
        let sendRating = textRating.textContent;
        let sendTitle = this.header;

        this.dataRating.rating_subject = sendTitle;
        this.dataRating.rating_value = sendRating;

        console.log(sendTitle, sendRating);
      });
    });
  };
}
export default Widget;
