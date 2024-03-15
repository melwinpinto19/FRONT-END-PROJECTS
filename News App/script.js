let news = document.querySelector(".news");

Shery.makeMagnet(".btn" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.mouseFollower({
  height: "30px",
  width: "30px",
});

Shery.hoverWithMediaCircle(".container" /* Element to target.*/, {
  images: [""] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});

Shery.textAnimate(".headingH1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0,
  duration: 2,
  ease: "linear",
  multiplier: 0.1,
});

document.querySelector(".btn").addEventListener("click", () => {
  news.innerHTML = "";
  let category = document.querySelector("#category").value;
  let country = document.querySelector("#country").value;
  console.log(category, country);

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=246afeafd18a4334af9c83719b75b6b5`;

  async function getNews() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }

  let newsData = getNews();
  newsData.then((data) => {
    data["articles"].forEach((obj) => {
      let eachNews = document.createElement("div");
      eachNews.setAttribute("class", "design-news");
      eachNews.innerHTML = obj.title;
      news.append(eachNews);
    });
  });
});
