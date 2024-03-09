let post = document.querySelector(".container");

let postArr = [
  {
    name: "Captain America",
    image:
      "https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hulk",
    image:
      "https://images.unsplash.com/photo-1562613531-a131faf45335?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Thor",
    image:
      "https://images.unsplash.com/photo-1579445710183-f9a816f5da05?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Iron Man",
    image:
      "https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "DeadPool",
    image:
      "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function showCards() {
  emptyPost = "";
  postArr.forEach((obj) => {
    emptyPost += `<div class="box">
    <img
      class="cursor-pointer"
      src="${obj.image}"
      alt="image"
    />
    <div class="caption">${obj.name}</div>
  </div>`;
  });

  post.innerHTML = emptyPost;
}

showCards();

let searchinput = document.querySelector("#searchinput");
let overlay = document.querySelector(".overlay");
let searchdata = document.querySelector(".searchdata");

function handleSearchFunctionality() {
  searchinput.addEventListener("focus", () => {
    overlay.classList.remove("hidden");
    searchdata.classList.remove("hidden");
  });

  searchinput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchinput.blur();
      overlay.classList.add("hidden");
      searchdata.classList.add("hidden");
    }
  });

  searchinput.addEventListener("blur", () => {
    overlay.classList.add("hidden");
    searchdata.classList.add("hidden");
  });

  searchinput.addEventListener("input", () => {
    // if (searchinput.value === " ") {
    //   console.log("");
    // } else {
    //   console.log(searchinput.value);
    // }
    let filterArr = postArr.filter((obj) =>
      obj.name.toLowerCase().startsWith(searchinput.value)
    );

    let clutter = "";
    filterArr.forEach(function (obj) {
      clutter += `<div class="res flex px-8 py-3">
      <i class="ri-search-line font-semibold mr-5"></i>
      <h3 class="font-semibold">${obj.name}</h3>
    </div>`;
    });
    let searchdata = document.querySelector(".searchdata");

    searchdata.innerHTML = clutter;
  });
}

handleSearchFunctionality();
