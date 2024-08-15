// The First set of Sushi Array Data.
let sushiItems = [
  {
    id: "jrygiej",
    name: "Smashed Avo",
    desc: "is a light roll with green avocado and cucumber wrapped with seaweed and rice.",
    img: "https://imgs.search.brave.com/Kc2aO6zfquHCIzpZfUbV6rWlpixQWDlxA9iIX-BHXdc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bm9uZ3VpbHR5cGxl/YXN1cmVzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8x/MC9hdm9jYWRvLXN1/c2hpLXJvbGxzLWNo/b3BzdGlja3MuanBn",
    price: 27,
  },
  {
    id: "jgffyurhgbi",
    name: "Yin & Yang",
    desc: "is made of Vingear, Powdered Sugar, Salt, rolled with Salmon and Avocado",
    price: 30,
    img: "https://i0.wp.com/sushimakingforthesoul.com/wp-content/uploads/2020/10/92441e95-797a-422c-b421-72af860674f2.jpg?fit=1280%2C1024&ssl=1",
  },
  {
    id: "thhjghu",
    name: "Sashimi",
    desc: " is raw fish, served in long rectangular slices known as hira-zukuri.",
    img: "https://restaurantclicks.com/wp-content/uploads/2021/05/Sashimi.jpg",
    price: 22,
  },
  {
    id: "vgehdvg",
    name: "Chirashi",
    desc: "sushi is usually a scattered mix of fruits and vegetables, making it a very healthy diet.",
    img: "https://restaurantclicks.com/wp-content/uploads/2021/05/Chirashi.jpg",
    price: 25,
  },
  {
    id: "wguihjridori",
    name: "Uramaki",
    img: "https://restaurantclicks.com/wp-content/uploads/2021/05/Uramaki.jpg",
    price: 40,
    desc: "sushi often comes with lots of toppings and sauces that you can dip into.The nori will be wrapped around the filling.",
  },
  {
    id: "kaniea",
    name: "Dragon Roll",
    img: "https://restaurantclicks.com/wp-content/uploads/2021/05/dragon-roll-sushi.jpg",
    price: 30,
    desc: "are also covered in a thin slice of avocado and drizzled with spicy mayonnaise and unagi sauce. You should try it!",
  },
  {
    id: "gshjhd",
    name: "Spider Roll",
    img: "img_src/Spider-roll.jpg",
    price: 30,
    desc: "have a filling of deep-fried soft shell crab with other optional fillings of avocado, cucumber, lettuce and spicy mayonnaise.",
  },
  {
    id: "gwgfdvgb",
    name: "Tempura Roll",
    img: "img_src/Tempura-roll.jpg",
    price: 35,
    desc: "have rice on the outside of the nori.The filling is made up of tempura fried shrimp with various kinds of vegetable.",
  },
];

// * Second set of stored Sushi Array Data.
let sushiData = [
  {
    id: "fjyuikujytd",
    name: "Nigiri",
    price: 60,
    desc: "The most traditional form of sushi, consists of a single topping over a palm-pressed compact oblong sushi rice. Topping, when used raw usually has an under-coat small amount of wasabi.",
    img: "https://howdaily.com/wp-content/uploads/2017/05/nigirizushi-640x401.jpg",
  },
  {
    id: "dtfyuikhiuy",
    name: "Temarizushi",
    price: 55,
    desc: "is a variant of Nigiri that is in small round ball-shaped instead of the usual oblong (like the Nigiri). They are usually served on special occasion in a large batch of impressive colorful balls.",
    img: "https://howdaily.com/wp-content/uploads/2017/05/temarizushi-640x427.jpg",
  },
  {
    id: "truyfgfytr",
    name: "Gunkan maki",
    price: 53.65,
    desc: "sushi is actually a ball of Nigiri that is wrapped around by a seaweed-nori strip or sashimi with extra height leaving a bounded empty space on top of the rice ball for loose ingredients to sink in.",
    img: "https://howdaily.com/wp-content/uploads/2017/05/gunkan-maki-640x483.jpg",
  },
  {
    id: "ydtyvubkl",
    name: "Salmon Gunkan maki",
    price: 32,
    desc: "are the most recognisable form of Sushi. Gunkan maki are the classic sushi rice stuffed with fresh salmon and spring onion wrapped in seaweed. As the name suggests it's filled with salmon.",
    img: "https://howdaily.com/wp-content/uploads/2017/05/salmon-gunkan-640x479.jpg",
  },
  {
    id: "shbfioudh",
    name: "Makizushi",
    price: 26.29,
    desc: "is a very popular sushi type. You often see them in a long cylinder containing fruits, vegetables, pickles, meat, toppings, seafood & just anything edible.",
    img: "https://howdaily.com/wp-content/uploads/2017/05/makizushi-rolls-640x427.jpg",
  },
  {
    id: "sUVHuibhih",
    name: "Futomaki",
    price: 25,
    desc: "usually contain various colorful vegetables and fruits, sometimes with fish powder mainly for decorating purposes when serving at special occasions.",
    img: "https://howdaily.com/wp-content/uploads/2017/05/futomaki-640x425.jpg",
  },
  {
    id: "siosxiodhj",
    name: "Temaki",
    price: 43.99,
    desc: "is rolled into a cone. This cone is then filled with rice, vegetables and fish. It is served immediately upon rolling to prevent the nori from losing its crispiness.",
    img: "https://howdaily.com/wp-content/uploads/2017/05/temaki-640x427.jpg",
  },
  {
    id: "wqdyutwei",
    name: "California Roll",
    price: 20,
    desc: "is made of avocado,crab and cucumber; usually as an inside-out cylindrical roll. It  was created to hide the seaweed, but later on, explode with the best taste.",
    img: "https://howdaily.com/wp-content/uploads/2017/05/california-roll-640x408.jpg",
  },
];

// * Add to cart function
let basket = JSON.parse(localStorage.getItem("sushiId")) || [];
function cart() {
  const ADD_CART = document.querySelectorAll(".add-cart");
  ADD_CART.forEach((add) => {
    add.addEventListener("click", (evt) => {
      let secParent =
        evt.target.parentElement.parentElement.parentElement.parentElement;
      let secPrice =
        secParent.children[0].children[1].children[2].children[0].children[0]
          .textContent;
      basket.push({ id: secParent.id, price: secPrice, quantity: 1 });
      localStorage.setItem("sushiId", JSON.stringify(basket));
      add.disabled = true;
      disableAddCart(add);
    });
    disableAddCart(add);
  });
}

// disable button
const disableAddCart = (add) => {
  let addParent = add.parentElement.parentElement.parentElement.parentElement;
  basket.forEach((item) => {
    if (item.id === addParent.id) {
      add.disabled = true;
    }
  });
};

//   Addition function
function plus() {
  const plusButton = document.querySelectorAll(".fa-plus");
  plusButton.forEach((add) => {
    add.addEventListener("click", (e) => {
      const parent = e.target.parentElement;
      const quantity = parent.children[1];
      let addition = parseInt(quantity.textContent) + 1;
      quantity.textContent = addition;
      evalPrice(quantity);
    });
  });
}

// sutraction function
function minus() {
  const minusButton = document.querySelectorAll(".fa-minus");
  minusButton.forEach((minus) => {
    minus.addEventListener("click", (e) => {
      const parent = e.target.parentElement;
      const quantity = parent.children[1];
      if (Number(quantity.textContent) == 1) {
        return;
      } else {
        let subtraction = Number(quantity.textContent) - 1;
        quantity.textContent = subtraction;
      }
      evalPrice(quantity);
    });
  });
}

// evalPrice
const evalPrice = (quantity) => {
  let price = 0;
  let itemQuantity = quantity.textContent;
  let pricePerItem =
    quantity.parentElement.parentElement.children[0].children[0];
  const ID = pricePerItem.parentElement.parentElement.id;
  basket.forEach((item) => {
    if (item.id === ID) {
      item.price = pricePerItem.textContent * itemQuantity;
      item.quantity = quantity.textContent;
    }
    price += Number(item.price);

    sessionStorage.setItem("totalPrice", price);
  });
  console.log(basket);
  localStorage.setItem("sushiId", JSON.stringify(basket));
  totalPrice();
};

// output totalprice
const totalPrice = () => {
  let cartAmount = document.querySelector(".total-price");
  let price = 0;
  let getPrices = JSON.parse(localStorage.getItem("sushiId")) || [];
  if (getPrices == "") {
    sessionStorage.setItem("totalPrice", 0);
    cartAmount.innerText = 0;
  }
  getPrices.forEach((getPrice) => {
    price += Number(getPrice.price);
    let totalPrice = sessionStorage.setItem("totalPrice", price) || price;
    cartAmount.innerText = totalPrice;
  });
};

const removeItem = () => {
  let rawId = JSON.parse(localStorage.getItem("sushiId"));
  const ul = document.querySelector("ul");
  const items = document.querySelector(".items");
  let cancels = document.querySelectorAll(".fa-times");
  cancels.forEach((cancel) => {
    cancel.addEventListener("click", (e) => {
      const parent = e.target.parentElement.parentElement.parentElement;
      rawId.forEach((itemId) => {
        if (parent.id === itemId.id) {
          let index = rawId.indexOf(itemId);
          if (index > -1) {
            rawId.splice(index, 1);
            localStorage.setItem("sushiId", JSON.stringify(rawId));
            basket = rawId;
            parent.remove();
          }
          totalPrice();
        }
        if (rawId == "") {
          ul.remove();
          items.innerHTML =
            '<p>Nothing to see here go back to the <a href="Food.html" rel="noopener">Food menu</a> and add to cart.</p>';
        }
      });
    });
  });
};

export { sushiItems, sushiData, cart, plus, minus, removeItem, totalPrice };
