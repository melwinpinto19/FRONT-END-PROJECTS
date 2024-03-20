let input = document.querySelector("input");
let obj = document.querySelector(".box");
let box1 = document.querySelector(".box1");
let icon = document.querySelector(".icon");
let iconNext = document.querySelector(".icon-next");
let cancelBtn = document.querySelector(".cancel");
let nav = document.querySelector(".nav-bar");
let cartSection = document.querySelector(".cart-section");

let images = [
  {
    name: "aapa",
    url: "img/aapa.webp",
  },
  {
    name: "jonatan",
    url: "img/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
  },
  {
    name: "pexels-eberhard",
    url: "img/pexels-eberhard-grossgasteiger-443446.jpg",
  },
  {
    name: "pexels-eberhard",
    url: "img/pexels-sebastiaan-stam-1097456.jpg",
  },
  {
    name: "abs",
    url: "img/abs.jpg",
  },
  {
    name: "aapa",
    url: "img/aapa.webp",
  },
  {
    name: "birds",
    url: "img/birds.webp",
  },
  {
    name: "pexels-eberhard",
    url: "img/pexels-eberhard-grossgasteiger-443446.jpg",
  },
  {
    name: "pexels-eberhard",
    url: "img/pexels-sebastiaan-stam-1097456.jpg",
  },
  {
    name: "abs",
    url: "img/abs.jpg",
  },
  {
    name: "poco X6",
    url: "img/image.png",
  },
  {
    name: "iphone 13",
    url: "img/iphone 13.webp",
  },
  {
    name: "iphone 15",
    url: "img/iphone 15.webp",
  },
  {
    name: "moto g34",
    url: "img/moto g34.webp",
  },
  {
    name: "realme 12 pro",
    url: "img/realme 12 pro.webp",
  },
  {
    name: "moto g34",
    url: "img/moto g34.webp",
  },
  {
    name: "redmi note 13 pro",
    url: "img/redmi note 13 pro.webp",
  },
  {
    name: "redmi note 13",
    url: "img/redmi note 13.webp",
  },
  {
    name: "galaxy s24 ultra",
    url: "img/galaxy s24 ultra.webp",
  },
  {
    name: "galaxy f15",
    url: "img/galaxy f15.webp",
  },
];
for (let i in images) {
  images[i].index = i;
}
let cart = [];

input.addEventListener("input", (e) => {
  console.log(input.value);

  let filtered = images.filter((image) => {
    return image.name.startsWith(input.value);
  });

  obj.innerHTML = "";

  if (input.value === "") return;
  let clutter = "";
  let i = 0;
  for (let each of filtered) {
    clutter += `<div class="stl">
    <img src="${each.url}">
    <br>
    <div class="j-c">
    ${each.name}
    <button class="btn1" b="${each.index}">+</button>
    </div>
    </div>`;
    i++;
  }

  obj.innerHTML = clutter;

  console.log(filtered);
});

icon.addEventListener("click", () => {
  //   iconNext.style.display = "block";
  iconNext.style.transition = "all 1s";
  iconNext.style.transform = "translateX(-200px)";
});
cancelBtn.addEventListener("click", () => {
  iconNext.style.transition = "all 1s";
  iconNext.style.transform = "translateX(200px)";
});

input.addEventListener("focus", (e) => {
  box1.style.display = "block";
});

input.addEventListener("blur", (e) => {
  box1.style.display = "none";
});

obj.addEventListener("click", (e) => {
  if (e.target.hasAttribute("b")) {
    console.log(e.target.getAttribute("b"));
    upDateCart(images[e.target.getAttribute("b")]);
  }
});

function upDateCart(e) {
  if (cart.includes(e)) return;

  let arr = JSON.parse(localStorage.getItem("cart"));
  arr.push(`${e.name},${e.url}`);
  localStorage.setItem("cart", JSON.stringify(arr));

  cart.push(e);
  let a = document.createElement("div");
  a.innerHTML = `
  <div class="j-c" style="border:5px solid red;border-radius:20px;padding:20px">
  <img src="${e.url}" style="height:60px;width:150px">
  <div><button class="btn1"  b1>-</button></div>
  </div>
  `;
  cartSection.append(a);
}

cartSection.addEventListener("click", (e) => {
  if (e.target.hasAttribute("b1")) {
    let parent = e.target.parentNode;
    parent.parentNode.parentNode.remove();
  }
});
