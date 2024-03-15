document.querySelector("#btn").addEventListener("click", () => {
  let clutter = ` 
<div class="data1">${website.value}</div>
<div class="data2">${username.value}</div>
<div class="data3">***************</div>
<div class="copy">Copy</div>
<button class="minus">-</button>
`;

  let newData = document.createElement("div");
  newData.setAttribute("id", localStorage.getItem("index"));
  newData.setAttribute("class", "data");
  newData.innerHTML = clutter;

  document.querySelector(".passwords-main").append(newData);

  document.querySelectorAll(".minus").forEach((each) => {
    each.addEventListener("click", (e) => {
      console.log("clciked");
      localStorage.removeItem(Number(e.target.parentNode.getAttribute("id")));
      e.target.parentNode.remove();
    });
  });

  document.querySelectorAll(".copy").forEach((ele) => {
    ele.addEventListener("click", () => {
      let i = ele.parentNode.getAttribute("id");
      let text = localStorage.getItem(`${i}`).split(" ");
      navigator.clipboard.writeText = text[2];
      console.log(text[2]);
    });
  });

  localStorage.setItem(
    localStorage.getItem("index"),
    `${website.value} ${username.value} ${password.value}`
  );
  localStorage.setItem("index", Number(localStorage.getItem("index")) + 1);
});

function fun() {
  for (let i = 0; i < Number(localStorage.getItem("index")); i++) {
    if (localStorage.getItem(`${i}`) == null) continue;
    let arr = localStorage.getItem(`${i}`).split(" ");
    console.log(arr);

    let clutter = ` 
    <div class="data1">${arr[0]}</div>
    <div class="data2">${arr[1]}</div>
    <div class="data3">************</div>
    <div class="copy">Copy</div>
    <button class="minus">-</button>
    `;

    let newData = document.createElement("div");
    newData.setAttribute("class", "data");
    newData.setAttribute("id", i);
    newData.innerHTML = clutter;

    document.querySelector(".passwords-main").append(newData);
  }
  document.querySelectorAll(".minus").forEach((each) => {
    each.addEventListener("click", (e) => {
      console.log("clciked");
      localStorage.removeItem(Number(e.target.parentNode.getAttribute("id")));
      e.target.parentNode.remove();
    });
  });

  document.querySelectorAll(".copy").forEach((ele) => {
    ele.addEventListener("click", () => {
      let i = ele.parentNode.getAttribute("id");
      let text = localStorage.getItem(`${i}`).split(" ");
      navigator.clipboard.writeText (text[2]);
      console.log(text[2]);
    });
  });
}

fun();
