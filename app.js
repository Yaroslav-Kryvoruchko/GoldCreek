const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    header.classList.add("header_down");
  } else if (scrollY === 0) {
    header.classList.remove("header_down");
  }
});

const secItems = document.querySelector(".sec-item");
secItems.style.transition = `transform 2s ease-in-out 0s`;

function galery() {
  setTimeout(() => {
    secItems.style.transform = `translateX(-12.5%)`;
  }, 3000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-25%)`;
  }, 8000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-37.5%)`;
  }, 13000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-50%)`;
  }, 18000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-62.5%)`;
  }, 23000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-75%)`;
  }, 28000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-87.5%)`;
  }, 33000);
}

galery();

setInterval(() => {
  secItems.style.transform = `translateX(0%)`;
  galery();
}, 38000);

// SCROLL

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHight = animItem.offsetHeight;
      const animItemOffSet = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHight / animStart;

      if (animItemHight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffSet - animItemPoint &&
        pageYOffset < animItemOffSet + animItemHight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

// Calculate Logic

const sample = document.getElementById("samples");
const calcBtn = document.getElementById("calc");
const grams = document.getElementById("grams");
const price = document.getElementById("price");

function goldPrice() {
  if (sample.value === "375") {
    const total = grams.value * 21.61;
    out(total);
    console.log(total);
  } else if (sample.value === "583") {
    const total = grams.value * 33.64;
    out(total);
    console.log(total);
  } else if (sample.value === "585") {
    const total = grams.value * 36.93;
    out(total);
    console.log(total);
  } else if (sample.value === "750") {
    const total = grams.value * 47.46;
    out(total);
    console.log(total);
  } else if (sample.value === "958") {
    const total = grams.value * 55.12;
    out(total);
    console.log(total);
  } else if (sample.value === "999") {
    const total = grams.value * 56.07;
    out(total);
    console.log(total);
  }
  console.log(grams.value);
  console.log(sample.value);
}

function out(totals) {
  price.textContent = totals + "$";
}

calcBtn.addEventListener("click", goldPrice);

const opnBtn = document.getElementById("opn_btn");
const calc = document.querySelector(".calc");
const calcItems = document.querySelector(".calc-items");
const secTree = document.getElementById("sec-3");

let testBtnCalc = false;

opnBtn.addEventListener("click", () => {
  if (!testBtnCalc) {
    calc.style.display = "block";
    secTree.classList.add("padd-sec-3");
    setTimeout(() => {
      calc.classList.add("open_calc");
    }, 500);
    setTimeout(() => {
      calcItems.classList.add("open_calc-items");
    }, 700);
    testBtnCalc = true;
    console.log(testBtnCalc);
  } else {
    calcItems.classList.remove("open_calc-items");
    setTimeout(() => {
      calc.classList.remove("open_calc");
    }, 700);
    setTimeout(() => {
      secTree.classList.remove("padd-sec-3");
    }, 1200);
    setTimeout(() => {
      calc.style.display = "none";
    }, 1000);

    testBtnCalc = false;
  }
});
