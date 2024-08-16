// Imporation
import {
  sushiItems,
  sushiData,
  plus,
  minus,
  removeItem,
  totalPrice,
} from "./GeneralExport.js";
totalPrice();
const sushiCombo = sushiItems.concat(sushiData);

const items = document.querySelector(".items");
function parseBasket() {
  let rawData = localStorage.getItem("sushiId");
  let parsed = JSON.parse(rawData);
  if (localStorage.hasOwnProperty("sushiId")) {
    return parsed;
  } else {
    return "";
  }
}
// result
function parsedResult() {
  if (parseBasket() != "") {
    let ul = document.createElement("ul");
    items.appendChild(ul);
    parseBasket().forEach((item) => {
      sushiCombo.filter((x) => {
        let { id, name, price, img } = x;
        if (item.id === id) {
          ul.innerHTML += `
          <li id=${id}>
           <div class="item">
            <div class="sus-img">
                <img src=${img} alt=${name}/>
            </div>
            <div class="sus-desc">
                <i class="fa fa-times" aria-hidden="true"></i>
                 <div class="info">
                 <h2 class="name">${name}</h2>
                 <p class="appreciation-msg">Thank you for choosing ${name}.
                     <br>
                     We would give you a heads up when it's ready.
                 </p>
                 </div>
                 <div class="price-quantity" id=${id}>
                     <div style="font-weight:bold;font-size:1.2em">$<span class="price">${price}</span></div>
                     <div class="alter-buttons">
                        <i class="fa fa-plus"  aria-hidden="true"></i>
                         <div class="quantity" id=itemAmount-${id}>${item.quantity}</div>
                          <i class="fa fa-minus" aria-hidden="true" ></i>
                     </div>
                  </div>
              </div>
            </div>
          </li>`;
          plus();
          minus();
          removeItem();
        }
      });
    });
  } else {
    items.innerHTML =
      '<p style="margin-top:1em">Nothing to see here go back to the <a href="Food.html" rel="noopener">Food menu</a> and add to cart.</p><img style="height: 74.6vh; width: 100%;" src="img_src/confused.svg" alt="">';
  }
}
parsedResult();
