// handling the user query:
let user = document.querySelector(".userInput");
let btn = document.querySelector("button");
user.addEventListener("input", (e) => {
  if (user.value != "") {
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
    btn.disabled = false;
  } else {
    btn.style.color = "white";
    btn.style.backgroundColor = "transparent";
    btn.disabled = true;
  }
});

btn.addEventListener("click", () => {
  document.querySelector(".logo").style.display = "none";
  main(user.value);
});

async function main(input) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${your-api-key}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    }),
  };

  let res = await fetch(
    "https://api.openai.com/v1/chat/completions",
    requestOptions
  );
  let data = await res.json();
  let i = 0;

  let newEle = document.createElement("div");
  newEle.innerHTML = `
  <div class="top">USER:  ${document.querySelector(".userInput").value}</div>
    <div class="bottom">
      <div class="bottom-inner">
        <img src="img/logo.svg" class="res" />
        <div>ChatGPT</div>
      </div>
      <div class="bottom-last"><!--response-here--></div>
    </div>
  `;
  document.querySelector(".data").append(newEle);

  function fun() {
    if (i < data.choices[0].message.content.length) {
      document.querySelector(
        ".data"
      ).lastElementChild.lastElementChild.innerHTML +=
        data.choices[0].message.content[i];
    }
    i++;
    setTimeout(fun, 50);
  }
  fun();
}
