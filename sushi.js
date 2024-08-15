// ? Importation
import { sushiItems, cart } from "./GeneralExport.js";

let basket = [];
//JSON.parse(localStorage.getItem("Data"))||

//* Fetching a tag from the dom
let sushi = document.getElementById("idc");

//* Iterating through the sushiItems Array
const generateShopData = () => {
  let html = "";
  if (sushi) {
    sushiItems
      .map((sushiItem) => {
        let { id, name, desc, img, price } = sushiItem;
        html += `<section id="${id}">
                <figure>
                    <img src="${img}" alt="${name}">
                    <figcaption>
                        <figcaption class="bold">${name}</figcaption><figcaption>${desc}</figcaption>
                        <div class="price-button">
                            <h3>$<span>${price}</span></h3>
                            <button type="submit" class="add-cart" >Add to cart</button>
                        </div>
                    </figcaption>
                </figure>
            </section>
            `;
        sushi.innerHTML = html;
      })
      .join("");
  }
};
generateShopData();
