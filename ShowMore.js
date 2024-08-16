// ? Importation
import { sushiData, cart } from "./GeneralExport.js";

let sushy = document.getElementById("moreFood");

// * Iterating through sushiData Array
const generateSecondShopData = () => {
  if (sushy != null) {
    sushy.innerHTML = sushiData
      .map((x) => {
        let { id, name, price, desc, img } = x;
        return `
            <section id=${id}>
            <figure>
                <img src="${img}" alt="${name}">
                <figcaption>
                    <figcaption class="bold">${name}</figcaption><figcaption>${desc}</figcaption>
                    <div class="price-button">
                        <h3>$<span>${price}</span></h3>
                        <button type="submit" class="add-cart">Add to cart</button>
                    </div>
                </figcaption>
            </figure>
            </section>
            `;
      })
      .join("");
  }
  cart();
};

const showMore=()=>{
  const moreButton = document.getElementById("more");
  const moreFoodContainer = document.getElementById("moreFood");
  const lessButton= document.getElementById("less")
  
  moreButton.addEventListener("click",()=>{
    moreFoodContainer.style.display="flex"
    moreButton.style.display="none"
    lessButton.style.display="block"
  })

  lessButton.addEventListener("click",()=>{
    moreFoodContainer.style.display="none"
    moreButton.style.display="block"
    lessButton.style.display="none"
  })
}

generateSecondShopData();
showMore()
